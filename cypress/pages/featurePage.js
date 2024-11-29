
class FeaturesPage {

    elements = {
        CoverElement: () => cy.get('body > div:nth-child(3) > section:nth-child(1)'),

        AboutElement: () => cy.get('body > div:nth-child(3) > section:nth-child(2)'),

        BusinessManagementElement: () => cy.get('body > div:nth-child(3) > section:nth-child(4)'),

        CalendarElement: () => cy.get('body > div:nth-child(3) > section:nth-child(5)'),

        BrandElement: () => cy.get('body > div:nth-child(3) > section:nth-child(6)'),

        ConnectToClientsElement: () => cy.get('body > div:nth-child(3) > section:nth-child(7)'),

        AppointmentElement: () => cy.get('body > div:nth-child(3) > section:nth-child(8)'),

        PosElement: () => cy.get('body > div:nth-child(3) > section:nth-child(9)'),

        MoreElement: () => cy.get('body > div:nth-child(3) > section:nth-child(10)'),

        RegisterElement: () => cy.get('body > div:nth-child(3) > section:nth-child(11)'),

        NavFeaturesTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29147 > .elementor-item'),

    }

    ClickFeatureButtonNavbar() {
        this.elements.NavFeaturesTab().should('be.visible')
        this.elements.NavFeaturesTab().invoke('removeAttr', 'target').click()
        cy.wait(2000)
    }
    CheckFeaturesPageURL() {
        cy.url().should('eq', 'https://business.toptalla.com/en/features/')
    }

    CheckFeaturePageTitle() {
        cy.title().should('eq', 'Toptalla Salon management system features')
    }

    CheckCoverElement() {
        this.elements.CoverElement().scrollIntoView()
        
        this.elements.CoverElement().should('be.visible')
        cy.wait(2000)
    }
    CheckAboutElement() {
        this.elements.AboutElement().scrollIntoView()
        this.elements.AboutElement().should('be.visible')
        cy.wait(2000)

    }
    CheckBusinessManagementElement() {
        this.elements.BusinessManagementElement().scrollIntoView()
        this.elements.BusinessManagementElement().should('be.visible')
        cy.wait(2000)

    }
    CheckCalendarElement() {
        this.elements.CalendarElement().scrollIntoView()
        this.elements.CalendarElement().should('be.visible')
        cy.wait(2000)

    }
    CheckBrandElement() {
        this.elements.BrandElement().scrollIntoView()
        this.elements.BrandElement().should('be.visible')
        cy.wait(2000)

    }
    CheckConnectToClientsElement() {
        this.elements.ConnectToClientsElement().scrollIntoView()
        this.elements.ConnectToClientsElement().should('be.visible')
        cy.wait(2000)

    }
    CheckAppointmentElement() {
        this.elements.AppointmentElement().scrollIntoView()
        this.elements.AppointmentElement().should('be.visible')
        cy.wait(2000)

    }
    CheckPosElement() {
        this.elements.PosElement().scrollIntoView()
        this.elements.PosElement().should('be.visible')
        cy.wait(2000)

    }
    CheckMoreElement() {
        this.elements.MoreElement().scrollIntoView()
        this.elements.MoreElement().should('be.visible')
        cy.wait(2000)

    }
    CheckRegisterElement() {
        this.elements.RegisterElement().scrollIntoView()
        this.elements.RegisterElement().should('be.visible')
        cy.wait(2000)

    }
    CheckAllElements(){
        this.CheckCoverElement()
        this.CheckAboutElement()
        this.CheckBusinessManagementElement()
        this.CheckCalendarElement()
        this.CheckBrandElement()
        this.CheckConnectToClientsElement()
        this.CheckAppointmentElement()
        this.CheckPosElement()
        this.CheckMoreElement()
        this.CheckRegisterElement()
    }

}
module.exports = new FeaturesPage();
