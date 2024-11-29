
class languagePage {

    elements = {
        NavbarElement: () => cy.get('.elementor-element-2d0e58ea'),

        NavLanguageTab: () => cy.get('#menu-1-4af5e36 > li.pll-parent-menu-item.menu-item.menu-item-type-custom.menu-item-object-custom.current-menu-parent.menu-item-has-children.menu-item-29858'),

        NavEnLanguage: () => this.elements.NavbarElement().find('li.menu-item-29858-en').findByText('English'),

        EnglishVal: () => cy.findByRole('link', { name: /categories/i }),

        ArabicVal: () => cy.findByRole('link', { name: /التصنيفات/i }),

        NavArLanguage: () => this.elements.NavbarElement().find('li.menu-item-29858-ar').findByText('العربية'),

    }

    CheckNavbarElement() {
        this.elements.NavbarElement().should('be.visible')
    }

    CheckNavLanguageTab() {
        this.elements.NavLanguageTab().should('be.visible')
        cy.wait(2000)
    }

    HoverOnLanguage() {
        this.elements.NavLanguageTab().click()
    }

    CheckNavEnLanguage() {
        this.elements.NavEnLanguage().should('be.visible')
    }

    ClickEnglishLanguage() {
        this.elements.NavEnLanguage().click()
        cy.wait(3000)
    }

    CheckNavEnLanguagefunctionality() {
        cy.url().should('eq', 'https://business.toptalla.com/en/')
        this.elements.EnglishVal().should('be.visible')
    }

    CheckNavArLanguage() {
        this.elements.NavArLanguage().should('be.visible')
    }

    ClickArabicLanguage() {
        this.elements.NavArLanguage().click()
        cy.wait(3000)
    }
    CheckNavArLanguagefunctionality() {
        cy.url().should('eq', 'https://business.toptalla.com/')
        this.elements.ArabicVal().should('be.visible')
    }


}
module.exports = new languagePage();
