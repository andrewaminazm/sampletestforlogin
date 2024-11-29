Feature: check footer

    verify all footer links work good  
    verify user can contact us  
    verify invalid Contact us

    Background:
        Given i navigate to the url 

    Scenario: Footer Elemets Works
        When user be on home page
        And user can scroll down to the end of page
        Then all footer elements work good

    Scenario: valid ContactUs
        When user be on home page
        And user can scroll down to the end of page
        And user can open ContactUs form
        And user can fill valid credentials and contact information correctly
        Then notes are sent

    Scenario: invalid ContactUs
        When user be on home page
        And user can scroll down to the end of page
        And user can open ContactUs form
        And user can fill invalid credentials and contact information
        Then notes have error message

    Scenario: Valid Request Feature
        When user be on home page
        And user can scroll down to the end of page
        And user can open "Request a Feature" form
        And user can fill valid credentials and Feature information
        Then Request are sent

    Scenario: Invalid Request Feature
        When user be on home page
        And user can scroll down to the end of page
        And user can open "Request a Feature" form
        And user can fill invalid credentials and Feature information
        Then Request have error message