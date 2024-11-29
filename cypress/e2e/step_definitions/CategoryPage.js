import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const CategoryPage=require("../../pages/categoryPage");

When("user can click on Categories button", () => {
    CategoryPage.ClickCategoryButtonNavbar()
});

Then("Categories page appear", () => {
    CategoryPage.CheckCategoryPageURL()
    CategoryPage.CheckCategoryPageTitle()
});

Then("all Categories elements appear", () => {
    CategoryPage.CheckAllElements()
});



