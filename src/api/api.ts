import axios from "axios";
interface Runtimes {
    [key: string]: string;
}

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const getRuntimes = async () => {
    const response = await API.get("/runtimes");
    return response.data;
};

export const executeCode = async (language: string, sourceCode: string, runtimes: Runtimes) => {
    const response = await API.post("/execute", {
        language: language,
        version: runtimes[language],
        files: [
            {
                content: sourceCode,
            },
        ],
    });
    return response.data;
};