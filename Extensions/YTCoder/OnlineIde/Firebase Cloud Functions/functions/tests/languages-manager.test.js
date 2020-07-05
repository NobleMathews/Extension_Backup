"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const language_manager_1 = require("../utils/language-manager");
const languages_table_1 = require("../utils/languages-table");
describe('LanguagesManager class.', function () {
    it('getLanguagesTable() should return a map of languagesTable.', function () {
        // ARRANGE
        const constLanguagesMap = new Map(languages_table_1.languagesTable);
        // ACT
        const returnedLanguagesMap = language_manager_1.LanguagesManager.getLanguagesMap();
        // ASSERT
        chai_1.expect(returnedLanguagesMap).to.not.be.empty;
        chai_1.expect(returnedLanguagesMap.entries()).to.be.eql(constLanguagesMap.entries());
    });
    it('isLangSupported() should return true only for supported language & version.', function () {
        // ARRANGE
        var lang01 = { langId: 'java', version: 'JDK 9.0.1' };
        var lang02 = { langId: '', version: 'JDK 9.0.1' };
        var lang03 = { langId: 'java', version: undefined };
        // ACT
        const result01 = language_manager_1.LanguagesManager.isLangSupported(lang01.langId, lang01.version);
        const result02 = language_manager_1.LanguagesManager.isLangSupported(lang02.langId, lang02.version);
        const result03 = language_manager_1.LanguagesManager.isLangSupported(lang03.langId, lang03.version);
        // ASSERT
        chai_1.expect(result01).to.be.true;
        chai_1.expect(result02).to.be.false;
        chai_1.expect(result03).to.be.false;
    });
    it('getLanguageVersionIndex(lang, version) should return the version index for supported language & version.', function () {
        // ARRANGE
        var lang01 = { langId: 'nodejs', version: '9.2.0' };
        var lang02 = { langId: 'python3', version: '3.6.5' };
        var lang03 = { langId: 'ruby', version: 'gem' };
        // ACT
        const result01 = language_manager_1.LanguagesManager.getLanguageVersionIndex(lang01.langId, lang01.version);
        const result02 = language_manager_1.LanguagesManager.getLanguageVersionIndex(lang02.langId, lang02.version);
        const result03 = language_manager_1.LanguagesManager.getLanguageVersionIndex(lang03.langId, lang03.version);
        // ASSERT
        chai_1.expect(result01).to.be.eql('1');
        chai_1.expect(result02).to.be.eql('2');
        chai_1.expect(result03).to.be.an('undefined');
    });
});
//# sourceMappingURL=languages-manager.test.js.map