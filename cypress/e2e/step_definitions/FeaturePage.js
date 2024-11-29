import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const FeaturesPage = require("../../pages/featurePage");

When("user can click on Features button", () => {
    FeaturesPage.ClickFeatureButtonNavbar()
});

Then("Features page appear", () => {
    FeaturesPage.CheckFeaturesPageURL()
    FeaturesPage.CheckFeaturePageTitle()
});

Then("all features appear", () => {
    FeaturesPage.CheckAllElements()
});



