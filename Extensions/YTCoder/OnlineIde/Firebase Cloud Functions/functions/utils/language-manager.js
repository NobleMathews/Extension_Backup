"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesManager = void 0;
const languages_table_1 = require("./languages-table");
class LanguagesManager {
    static getLanguageVersionIndex(lang, version) {
        if (this.isLangSupported(lang, version)) {
            const langEntrys = this.languagesMap.get(lang);
            const entry = langEntrys.find(lang => lang.version == version);
            if (entry) {
                return entry.index;
            }
        }
    }
    static isLangSupported(lang, version) {
        if (this.languagesMap.has(lang)) {
            const langEntrys = this.languagesMap.get(lang);
            return langEntrys.some(lang => lang.version == version);
        }
        else {
            return false;
        }
    }
    static getLanguagesMap() {
        return this.languagesMap;
    }
}
exports.LanguagesManager = LanguagesManager;
LanguagesManager.languagesMap = new Map(languages_table_1.languagesTable);
//# sourceMappingURL=language-manager.js.map