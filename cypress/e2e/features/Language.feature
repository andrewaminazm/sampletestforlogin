Feature: change language

    verify user can change to arabic language 
    verify user can change to english language 

    Background:
        Given i navigate to the url 

    Scenario: validate Arabic language 
        When user be on home page
        And user can hover on language  
        And languages dropdown list appeare
        And user can click on Arabic button 
        Then website in arabic language

    Scenario: validate English language 
        When user be on home page
        And user can hover on language  
        And languages dropdown list appeare
        And user can click on English button 
        Then website in english language


