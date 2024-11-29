
class LoginPage {

    elements = {
        NavbarLoginButton: () => cy.get('.elementor-element-5ef1cc0a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button'),

        LoginLabel: () => cy.get('#signInForm > ion-text:nth-child(2) > p'),

        EmailField: () => cy.get('#identifier'),

        PasswordField: () => cy.get('#password'),

        LoginButton: () => cy.get('.ion-color-primary'),

        HidePasswordButton: () => cy.get('.icon-button'),

        FailedMessage: () => cy.findByText('المعرف أو كلمة مرور غير صحيحة'),

    }

    NavigateToToptallaUAT() {
        cy.visit('https://partners.stg.toptalla.com/auth/sign-in')
        cy.wait(3000)
    }

    CheckLoginPageLoad() {
        cy.wait(5000)
        cy.url().should('eq', 'https://partners.stg.toptalla.com/auth/sign-in')

    }
    CheckLoginPagetitle() {

        cy.title().should('eq', 'تسجيل دخول')
        this.elements.LoginLabel().should('be.visible')
    }

    EnterEmail(Email) {
        this.elements.EmailField().should('be.visible')
        this.elements.EmailField().type(Email)
        cy.wait(1000)
    }

    EnterPassword(Password) {
        this.elements.PasswordField().should('be.visible')

        this.elements.PasswordField().type(Password)
        cy.wait(1000)
    }

    CheckHidePassword() {
        this.elements.PasswordField().should('have.prop', 'nodeName', 'INPUT')
            .and('have.attr', 'type', 'password')
        cy.wait(1000)

        this.elements.HidePasswordButton().should('be.visible')
        this.elements.HidePasswordButton().click()
        cy.wait(1000)

        this.elements.PasswordField().should('have.prop', 'nodeName', 'INPUT')
            .and('have.attr', 'type', 'text')
        cy.wait(1000)

        this.elements.HidePasswordButton().click()
        this.elements.PasswordField().should('have.prop', 'nodeName', 'INPUT')
            .and('have.attr', 'type', 'password')
        cy.wait(1000)


    }
    clickLoginButton() {
        this.elements.LoginButton().should('be.visible')
        this.elements.LoginButton().invoke('removeAttr', 'target').click()
        cy.wait(5000)
    }
    CheckFailedMessage() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('المعرف أو كلمة مرور غير صحيحة')
        })
        cy.wait(4000)
    }

    CheckBoardPage() {
        cy.url().should('include', 'https://partners.stg.toptalla.com/calendar')
    }
}
module.exports = new LoginPage();
