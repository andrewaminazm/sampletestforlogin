
class JoinPage {

    elements = {
        joinButton: () => cy.get('.elementor-element-9a99af2 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button'),

        salonTypePage: () => cy.get('.elementor-field-group-field_abf5359 > .elementor-field-type-text > .elementor-field-label'),
        
        salonNameField: () => cy.get('#form-field-salonName'),

        salonTypeField: () => cy.get('.elementor-field-subgroup > :nth-child(4) > label'),

        salonPageNextButton: () => cy.get('.elementor-field-group-field_abf5359 > .e-form__buttons > .elementor-field-group > .elementor-button'),
        
        firstNameLabel: () => cy.get('.elementor-field-group-first_name > .elementor-field-label'),

        firstNameField: () => cy.get('#form-field-first_name'),

        mobileNumberField: () => cy.get('#form-field-mobile_number'),

        emailField: () => cy.get('#form-field-email'),
        
        lastNameField: () => cy.get('#form-field-last_name'),
        
        credentialsPageNextButton: () => cy.get('.elementor-field-group-field_bf3dff5 > .e-form__buttons > .elementor-field-type-next > .elementor-button'),
        
        LocationLabel: () => cy.get('.elementor-field-group-mapStep > .elementor-field-type-html'),
        
        LocationPageSendButton: () => cy.get('.elementor-field-type-submit > .elementor-button'),

        successMessage:()=> cy.getByText(/your submission was successful\./i),
    }


    CheckJoinButtonAppear() {
        this.elements.joinButton().should('be.visible')
    }

    ClickJoinInHome() {
        this.elements.joinButton().click()
        cy.wait(3000)
    }

    CheckSalonPage() {
        this.elements.salonTypePage().should('be.visible')
    }

    EnterSalonName(SalonName) {
        this.elements.salonNameField().type(SalonName)
        cy.wait(1000)
    }

    EnterSalonType() {
        this.elements.salonTypeField().click()
        cy.wait(1000)
    }
    NavigateToCredentials() {
        this.elements.salonPageNextButton().click()
        cy.wait(1000)
    }

    CheckCredentialsPage() {
        this.elements.firstNameLabel().should('be.visible')
    }

    EnterFirstName(FirstName) {
        this.elements.firstNameField().type(FirstName)
    }

    EnterLastName(LastName) {
        this.elements.lastNameField().type(LastName)
    }

    EnterEmail(Email) {
        this.elements.emailField().type(Email)
    }

    EnterMobileNumber(MobileNumber) {
        this.elements.mobileNumberField().type(MobileNumber)
        cy.wait(1000)
    }

    NavigateToLocation() {
        this.elements.credentialsPageNextButton().click()
        cy.wait(1000)
    }
    CheckLocationPage() {
        this.elements.LocationLabel().should('be.visible')
    }
    CLickSend() {
        this.elements.LocationPageSendButton().click()
    }

    CheckSuccess(){
        cy.wait(2000)
        this.elements.successMessage().should('be.visible')
    }


}
module.exports = new JoinPage();
