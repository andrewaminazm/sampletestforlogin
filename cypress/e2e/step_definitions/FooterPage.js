import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const FooterPage = require("../../pages/footerPage");

When("user can scroll down to the end of page", () => {
    FooterPage.CheckFooterElement()
});

Then("all footer elements work good", () => {
    FooterPage.AllElementsWork()
});

When("user can open ContactUs form", () => {
    FooterPage.OpenContactForm()
});

When("user can fill valid credentials and contact information correctly", () => {
    FooterPage.FillContactForm('sireenTest','+96555555555','uat@toptalla.com','test test test test test test. ')
});

When("user can fill invalid credentials and contact information", () => {
    FooterPage.FillContactForm('s','121','uat@d.com','t')
});

Then("notes are sent", () => {
    FooterPage.SendContactNotes()
});

Then("notes have error message", () => {
    FooterPage.SendContactWithFail()
});
When('user can open "Request a Feature" form', () => {
    FooterPage.OpenFeatureForm()
});

When("user can fill valid credentials and Feature information", () => {
    FooterPage.FillFeatureForm('sireenTest','+96555555555','uat@toptalla.com','test test test test test test. ',"Marketing")
});

When("user can fill invalid credentials and Feature information", () => {
    FooterPage.FillFeatureForm('s','121','uat@d.com','t',"Marketing")
});

Then("Request are sent", () => {
    FooterPage.SendFeatureNotes()
});

Then("Request have error message", () => {
    FooterPage.SendFeatureWithFail()
});