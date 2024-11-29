Feature: check features

    verify user can enter feature page
    verify element appear in features page

    Background:
        Given i navigate to the url 
    Scenario: Features page exists 
        When user be on home page
        And user can click on Features button 
        Then Features page appear 

    Scenario: validate features 
        When user be on home page
        And user can click on Features button 
        And Features page appear 
        Then all features appear
