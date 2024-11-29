import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const LoginPage = require("../../pages/loginPage");

Given("i navigate to the urlUAT", () => {
    LoginPage.NavigateToToptallaUAT()
});

When("login page loaded", () => {
    LoginPage.CheckLoginPageLoad()
});

Then("login page appear", () => {
    LoginPage.CheckLoginPagetitle()
});

When("user can enter his login credentials", () => {
    LoginPage.EnterEmail('uat@toptalla.com')
    LoginPage.EnterPassword('123qwe')
    LoginPage.CheckHidePassword()
    LoginPage.clickLoginButton()
});

When("user can enter invalid login credentials", () => {
    LoginPage.EnterEmail("uat@toptalla.com")
    LoginPage.EnterPassword("OR true")
    LoginPage.CheckHidePassword()
    LoginPage.clickLoginButton()
});

Then("user navigate to dashboard", () => {
    LoginPage.CheckBoardPage()
    
});

Then("user got error message", () => {
    LoginPage.CheckFailedMessage()
});