import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const JoinPage = require("../../pages/joinPage");
const HomePage = require("../../pages/homePage");


Given("i navigate to the url", () => {
    HomePage.GoHome()
});


When("user be on home page", () => {
    HomePage.CheckHomePage()
    HomePage.CheckHomeTitle()
});

When("user can click on Join button", () => {
    JoinPage.ClickJoinInHome()
});

Then("salon type page appear", () => {
    JoinPage.CheckSalonPage()
});

When("user can enter salon information", () => {
    JoinPage.EnterSalonName('Test1')
    JoinPage.EnterSalonType()
    JoinPage.NavigateToCredentials()
});
When("user be on credentials page", () => {
    JoinPage.CheckCredentialsPage()

    
});
When("user can enter his credentials", () => {
    JoinPage.EnterFirstName('Test1User')
    JoinPage.EnterLastName('Test1Userl')
    JoinPage.EnterEmail('uat321@gmail.com')
    JoinPage.EnterMobileNumber('+96454545453')
    JoinPage.NavigateToLocation()
});
Then("user be on location page", () => {
    JoinPage.CheckLocationPage()
    
});
When("user can enter his location", () => {
    JoinPage.CLickSend()

});
Then("Your submission was successful join appear", () => {
    JoinPage.CheckSuccess()
});