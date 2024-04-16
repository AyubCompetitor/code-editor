import { makeAutoObservable } from "mobx";

class ThemesStore {

    isDarkMode = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleThemeMobxAction = () => {
        this.isDarkMode = !this.isDarkMode;
    }
}

export default ThemesStore;