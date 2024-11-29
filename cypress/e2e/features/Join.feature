Feature: join to system
    
    verify user can enter to join page
    verify user can join

    Background:
        Given i navigate to the url 

    Scenario: open join page
        When user be on home page
        And user can click on Join button 
        Then salon type page appear 
        
    Scenario: valid user join
        When user be on home page
        And user can click on Join button 
        And salon type page appear 
        And user can enter salon information
        And user be on credentials page
        And user can enter his credentials
        Then user be on location page



