Feature: check Home page

    verify the url of our landing page
    verify the element in home page
    verify all tabs in home page

    Background:
        Given i navigate to the url 
    Scenario: open landing page 
        When page loaded
        Then landing page appear 

    Scenario: validate home page element 
        when user be on home page
        Then all home elements appear

    Scenario: validate tabs
        when user be on home page
        Then all navbar tabs appear


