import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  
  const subpage = require("../../pages/subpage");
  
  
Given("i navigate to the url", () => {
    subpage.checkurl()
    subpage.checktitle()

  });
  
When("user be on  home page", () =>{
  
    subpage.checktitle()

  });
  
  When("user can click on login button", () =>{
  
   subpage.checkloginappear()
   subpage.clickLogin()

  });
  
  When("login page appear", () =>{
  
   subpage.checkloginpageappear()

  });
  
  When("user can enter his credentials", () =>{
  
   subpage.enterusername()
   subpage.enterpassword()

  });
  
Then("user navigate to dashboard", () => {
  subpage.enterdashboard()
    
  });