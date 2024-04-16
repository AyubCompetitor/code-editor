import { makeAutoObservable } from "mobx";
import { getRuntimes } from "../api/api";

interface RuntimesSignature {
    [key: string]: string
}

type SingleLanguage = {
    language: string, version: string
}

const renamedAliases = ['sqlite3'];
const transormAliases: RuntimesSignature = {
    sqlite3: 'sql',
}

class RuntimesStore {
    runtimes = {
        javascript: "18.15.0",
        typescript: "5.0.3",
        python: "3.10.0",
        java: "15.0.2",
        csharp: "6.12.0",
        php: "8.2.3",
    };

    constructor() {
        makeAutoObservable(this);
    }

    getRuntimesMobxAction = async () => {
        try {
            const runtimesResponse = await getRuntimes();
            const runtimesResponseTransform = runtimesResponse.reduce((acc: RuntimesSignature, curr: SingleLanguage) => {
                const language = !renamedAliases.includes(curr.language) ? curr.language : transormAliases[curr.language];
                acc[language] = curr.version;
                return acc;
            }, {});

            this.runtimes = runtimesResponseTransform;
        } catch (error) {
            console.error('No response to the runtime request was received', error);
        }
    };

}

export default RuntimesStore;