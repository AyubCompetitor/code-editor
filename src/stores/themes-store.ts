import { makeAutoObservable } from "mobx";

class ThemesStore {

    isDarkMode = true;

    constructor() {
        makeAutoObservable(this);
    }

    toggleThemeMobxAction = () => {
        this.isDarkMode = !this.isDarkMode;
    }
}

export default ThemesStore;