Feature: login to system

    verify the login page url 
    verify user can make valid login 
    verify user can't make invalid login 

    Background:
        Given i navigate to the urlUAT 
    Scenario: open login 
        And login page loaded
        Then login page appear 
        
    Scenario: invalid login 
        When login page loaded
        And login page appear 
        And user can enter invalid login credentials 
        Then user got error message

    Scenario: validate login 
        When login page loaded
        And login page appear 
        And user can enter his login credentials 
        Then user navigate to dashboard

    

