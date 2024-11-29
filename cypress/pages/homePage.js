
class HomePage {

    elements = {
        NavbarElement: () => cy.get('.elementor-element-2d0e58ea'),

        VideoElement: () => cy.get('.elementor-element-4e14a27 > .elementor-background-overlay'),

        AdvantagesElement: () => cy.get('.elementor-element-2f27b3e > :nth-child(1) > .elementor-col-100 > :nth-child(1)'),

        SolutionsElement: () => cy.get('.elementor-element-9788682 > .elementor-background-overlay'),

        FeaturesElement: () => cy.get('.elementor-element-7de03fc9 > .elementor-background-overlay'),

        ArticlesElement: () => cy.get('.elementor-element-914ab63'),

        CommunityElement: () => cy.get('.elementor-element-df6c359'),

        IntegrationElement: () => cy.get('.elementor-element-1d33ec0 > .elementor-background-overlay'),

        RegisterElement: () => cy.get('.elementor-element-2fa0837'),

        BacktopElement: () => cy.get('.elementor-30198 > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper'),

        FooterElement: () => cy.get('.elementor-element-76791334'),

        NavHomeTab: () => cy.get('#menu-1-4af5e36 > .menu-item-home > .elementor-item'),

        NavFeaturesTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29147 > .elementor-item'),

        NavCategoryTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29223'),

        NavFaqTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29146'),

        NavLanguageTab: () => cy.get('#menu-1-4af5e36 > li.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-parent.menu-item-has-children.menu-item-29858'),

        NavEnLanguage: () => this.elements.NavbarElement().find('li.menu-item-29858-en'),
        
        NavArLanguage: () => this.elements.NavbarElement().find('li.menu-item-29858-ar'),
        
    }
    GoHome() {
        cy.visit("https://business.toptalla.com/en/");
        cy.wait(3000)

    }

    CheckHomeTitle() {
        cy.title().should('eq', 'Toptalla: Leading Salon Management Software in Saudi Arabia');
    }

    CheckHomePage() {
        cy.url().should('eq', 'https://business.toptalla.com/en/')
    }
    CheckNavbarElement() {
        this.elements.NavbarElement().should('be.visible')
    }
    CheckVideoElement() {
        this.elements.VideoElement().scrollIntoView()
        this.elements.VideoElement().should('be.visible')
                cy.wait(2000)
    }
    CheckAdvantagesElemen() {
        this.elements.AdvantagesElement().scrollIntoView()
        this.elements.AdvantagesElement().should('be.visible')
        cy.wait(2000)

    }
    CheckSolutionsElement() {
        this.elements.SolutionsElement().scrollIntoView()
        this.elements.SolutionsElement().should('be.visible')
        cy.wait(2000)

    }
    CheckFeaturesElement() {
        this.elements.FeaturesElement().scrollIntoView()
        this.elements.FeaturesElement().should('be.visible')
        cy.wait(2000)

    }
    CheckArticlesElement() {
        this.elements.ArticlesElement().scrollIntoView()

        this.elements.ArticlesElement().should('be.visible')
        cy.wait(2000)

    }
    CheckCommunityElement() {
        this.elements.CommunityElement().scrollIntoView()
        this.elements.CommunityElement().should('be.visible')
        cy.wait(2000)

    }
    CheckIntegrationElement() {
        this.elements.IntegrationElement().scrollIntoView()
        this.elements.IntegrationElement().should('be.visible')
        cy.wait(2000)

    }
    CheckRegisterElement() {
        this.elements.RegisterElement().scrollIntoView()
        this.elements.RegisterElement().should('be.visible')
        cy.wait(2000)

    }
    CheckBacktopElement() {
        this.elements.BacktopElement().scrollIntoView()
        this.elements.BacktopElement().should('be.visible')
        cy.wait(2000)

    }
    CheckFooterElement() {
        this.elements.FooterElement().scrollIntoView()
        this.elements.FooterElement().should('be.visible')
        cy.wait(2000)

    }

    CheckNavHomeTab() {
        this.elements.NavHomeTab().should('be.visible')
    }
    CheckNavFeaturesTab() {
        this.elements.NavFeaturesTab().should('be.visible')

    }
    CheckNavCategoryTab() {
        this.elements.NavCategoryTab().should('be.visible')
        cy.wait(2000)

    }
    CheckNavFaqTab() {
        this.elements.NavFaqTab().should('be.visible')

    }
    CheckNavLanguageTab() {
        this.elements.NavLanguageTab().should('be.visible')
        cy.wait(2000)

    }
    CheckNavEnLanguage() {
        this.elements.NavLanguageTab().click()
        this.elements.NavEnLanguage().should('be.visible')
        this.elements.NavLanguageTab().click()

    }
    CheckNavArLanguage() {
        this.elements.NavLanguageTab().click()
        this.elements.NavArLanguage().should('be.visible')
    }
    CheckHomeElements() {
        this.CheckNavbarElement()
        this.CheckVideoElement()
        this.CheckAdvantagesElemen()
        this.CheckSolutionsElement()
        this.CheckFeaturesElement()
        this.CheckArticlesElement()
        this.CheckCommunityElement()
        this.CheckIntegrationElement()
        this.CheckRegisterElement()
        this.CheckBacktopElement()
        this.CheckFooterElement()
    }
    CheckAllTabs() {
        this.CheckNavHomeTab()
        this.CheckNavFeaturesTab()
        this.CheckNavCategoryTab()
        this.CheckNavFaqTab()
        this.CheckNavLanguageTab()
        this.CheckNavEnLanguage()
        this.CheckNavArLanguage()
    }

}
module.exports = new HomePage();
