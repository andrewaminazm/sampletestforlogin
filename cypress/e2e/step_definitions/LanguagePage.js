import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const LanguagePage = require("../../pages/languagePage");



When("user can hover on language", () => {
    LanguagePage.CheckNavbarElement()
    LanguagePage.CheckNavLanguageTab()
    LanguagePage.HoverOnLanguage()
});

When("languages dropdown list appeare", () => {
    LanguagePage.CheckNavArLanguage()
    LanguagePage.CheckNavEnLanguage()
});

When("user can click on Arabic button", () => {
    LanguagePage.ClickArabicLanguage()
});

Then("website in arabic language", () => {
    LanguagePage.CheckNavArLanguagefunctionality()
});
When("user can click on English button", () => {
    LanguagePage.ClickEnglishLanguage()
});

Then("website in english language", () => {
    LanguagePage.CheckNavEnLanguagefunctionality()
});

