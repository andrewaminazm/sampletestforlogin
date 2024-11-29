Feature: check categories

    verify user can enter to category page
    verify element appear in category page

    Background:
        Given i navigate to the url 
    Scenario: category page exists 
        When user be on home page
        And user can click on Categories button 
        Then Categories page appear 

    Scenario: validate categories 
        When user be on home page
        And user can click on Categories button 
        And Categories page appear 
        Then all Categories elements appear
