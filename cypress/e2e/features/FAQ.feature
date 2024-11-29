Feature: check FAQ

    verify user can enter faq page 
    verify all element appear in faq page 

    Background:
        Given i navigate to the url 
    Scenario: validate faq page 
        When user be on home page
        And user can click on FAQ button  
        Then FAQ page appeare


    Scenario: validate faq elements 
        When user be on home page
        And user can click on FAQ button  
        And FAQ page appeare
        Then all faq elements appear
