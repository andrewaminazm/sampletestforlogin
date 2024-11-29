import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const HomePage = require("../../pages/homePage");



When("page loaded", () => {
    HomePage.CheckHomePage()
});

Then("landing page appear", () => {
    HomePage.CheckHomeTitle()
});

Then("all home elements appear", () => {
    HomePage.CheckHomeElements()
});

Then("all navbar tabs appear", () => {
    HomePage.CheckAllTabs()
});

