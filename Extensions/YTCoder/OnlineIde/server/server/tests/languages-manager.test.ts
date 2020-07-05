import { expect } from 'chai';
import { LanguagesManager } from '../utils/language-manager';
import { languagesTable } from '../utils/languages-table';

describe('LanguagesManager class.', function () {
    it('getLanguagesTable() should return a map of languagesTable.', function () {
        // ARRANGE
        const constLanguagesMap = new Map(languagesTable);
        // ACT
        const returnedLanguagesMap = LanguagesManager.getLanguagesMap();
        // ASSERT
        expect(returnedLanguagesMap).to.not.be.empty;
        expect(returnedLanguagesMap.entries()).to.be.eql(constLanguagesMap.entries());
    });

    it('isLangSupported() should return true only for supported language & version.', function () {
        // ARRANGE
        var lang01 = { langId: 'java', version: 'JDK 9.0.1' };
        var lang02 = { langId: '', version: 'JDK 9.0.1' };
        var lang03 = { langId: 'java', version: undefined };
        // ACT
        const result01 = LanguagesManager.isLangSupported(lang01.langId, lang01.version);
        const result02 = LanguagesManager.isLangSupported(lang02.langId, lang02.version);
        const result03 = LanguagesManager.isLangSupported(lang03.langId, lang03.version);
        // ASSERT
        expect(result01).to.be.true;
        expect(result02).to.be.false;
        expect(result03).to.be.false;
    });

    it('getLanguageVersionIndex(lang, version) should return the version index for supported language & version.', function() {
        // ARRANGE
        var lang01 = { langId: 'nodejs', version: '9.2.0' };
        var lang02 = { langId: 'python3', version: '3.6.5' };
        var lang03 = { langId: 'ruby', version: 'gem' };
        // ACT
        const result01 = LanguagesManager.getLanguageVersionIndex(lang01.langId, lang01.version);
        const result02 = LanguagesManager.getLanguageVersionIndex(lang02.langId, lang02.version);
        const result03 = LanguagesManager.getLanguageVersionIndex(lang03.langId, lang03.version);
        // ASSERT
        expect(result01).to.be.eql('1');
        expect(result02).to.be.eql('2');
        expect(result03).to.be.an('undefined');
    });
});