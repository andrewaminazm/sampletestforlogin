import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const FaqPage=require("../../pages/faqPage");

When("user can click on FAQ button", () => {
    FaqPage.ClickFaqButtonNavbar()
});

Then("FAQ page appeare", () => {
    FaqPage.CheckFaqPageURL()
    FaqPage.CheckFaqPageTitle()
});

Then("all faq elements appear", () => {
    FaqPage.CheckAllElements()
});



