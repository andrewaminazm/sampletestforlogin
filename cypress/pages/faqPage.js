
class FaqPage {

    elements = {
        SidebarPart: () => cy.get('body > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(1)'),
        
        QuestionsPart: () => cy.get('body > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(2)'),
        
        GetStatedTab: () => cy.findByRole('link', { name: /getting started/i }),

        FeaturesTab: () => cy.findByRole('link', { name: /features and functions/i }),

        PricingTab: () => cy.findByRole('link', { name: /pricing and payments/i }),

        TroubleshootingTab: () => cy.findByRole('link', { name: /troubleshooting/i }),

        IntegrationsTab: () => cy.findByRole('link', { name: /integrations/i }),

        PrivacyTab: () => cy.findByRole('link', { name: /privacy and security/i }),

        CustomerTab: () => cy.findByRole('link', { name: /customer support/i }),
        
        RegisterPart: () => cy.get('.elementor-element-d76c0c6'),
        
        OtherTab: () => cy.get('[href="#cea-tab-1-8"]'),
        
        NavFaqTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29146'),

    }

    ClickFaqButtonNavbar() {
        this.elements.NavFaqTab().should('be.visible')
        this.elements.NavFaqTab().invoke('removeAttr', 'target').click()
        cy.wait(2000)
    }
    CheckFaqPageURL() {
        cy.url().should('eq', 'https://business.toptalla.com/en/en-faq/')
    }

    CheckFaqPageTitle() {
        cy.title().should('eq', 'FAQ - Toptalla business')
    }

    CheckSidebarPart() {
        this.elements.SidebarPart().scrollIntoView()
        this.elements.SidebarPart().should('be.visible')
        cy.wait(2000)
    }
    CheckQuestionsPart() {
        this.elements.QuestionsPart().scrollIntoView()
        this.elements.QuestionsPart().should('be.visible')
        cy.wait(2000)

    }
    CheckGetStatedTab() {
        this.elements.GetStatedTab().scrollIntoView()
        this.elements.GetStatedTab().should('be.visible')
        cy.wait(2000)

    }
    CheckFeaturesTab() {
        this.elements.FeaturesTab().scrollIntoView()
        this.elements.FeaturesTab().should('be.visible')
        cy.wait(2000)

    }
    CheckTroubleshootingTab() {
        this.elements.TroubleshootingTab().scrollIntoView()
        this.elements.TroubleshootingTab().should('be.visible')
        cy.wait(2000)

    }
    CheckIntegrationsTab() {
        this.elements.IntegrationsTab().scrollIntoView()
        this.elements.IntegrationsTab().should('be.visible')
        cy.wait(2000)

    }
    CheckPricingTab() {
        this.elements.PricingTab().scrollIntoView()
        this.elements.PricingTab().should('be.visible')
        cy.wait(2000)

    }
    CheckPrivacyTab() {
        this.elements.PrivacyTab().scrollIntoView()
        this.elements.PrivacyTab().should('be.visible')
        cy.wait(2000)

    }
    CheckCustomerTab() {
        this.elements.CustomerTab().scrollIntoView()
        this.elements.CustomerTab().should('be.visible')
        cy.wait(2000)

    }
    CheckOtherTab() {
        this.elements.OtherTab().scrollIntoView()
        this.elements.OtherTab().should('be.visible')
        cy.wait(2000)

    }
    CheckRegisterPart() {
        this.elements.RegisterPart().scrollIntoView()
        this.elements.RegisterPart().should('be.visible')
        cy.wait(2000)

    }
    CheckAllElements() {
        this.CheckSidebarPart()
        this.CheckQuestionsPart()
        this.CheckGetStatedTab()
        this.CheckFeaturesTab()
        this.CheckPricingTab()
        this.CheckTroubleshootingTab()
        this.CheckIntegrationsTab()
        this.CheckPrivacyTab()
        this.CheckCustomerTab()
        this.CheckOtherTab()
        this.CheckRegisterPart()
    }

}
module.exports = new FaqPage();
