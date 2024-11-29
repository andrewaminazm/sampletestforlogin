
class CategoryPage {

    elements = {
        CategoryHeaderPart: () => cy.get('body > div:nth-child(3) > section:nth-child(1)'),
        Cat1Part: () => cy.get('body > div:nth-child(3) > section:nth-child(2)'),
        Cat23Part: () => cy.get('body > div:nth-child(3) > section:nth-child(3)'),
        Cat4Part: () => cy.get('body > div:nth-child(3) > section:nth-child(4)'),
        Cat56Part: () => cy.get('body > div:nth-child(3) > section:nth-child(5)'),
        RegisterPart:()=>cy.get('body > div.elementor.elementor-29203 > div > div > div > div > div > div > section > div.elementor-background-overlay'),
        NavCategoryTab: () => cy.get('#menu-1-4af5e36 > .menu-item-29223'),
    }

    ClickCategoryButtonNavbar() {
        this.elements.NavCategoryTab().should('be.visible')
        this.elements.NavCategoryTab().invoke('removeAttr', 'target').click()
        this.elements.NavCategoryTab().invoke('removeAttr', 'target').click()
        cy.wait(2000)
    }
    CheckCategoryPageURL() {
        cy.url().should('eq', 'https://business.toptalla.com/en/categories/')
    }

    CheckCategoryPageTitle() {
        cy.title().should('eq', 'Categories - Toptalla business')
    }

    CheckCat1Part() {
        this.elements.Cat1Part().scrollIntoView()
        this.elements.Cat1Part().should('be.visible')
        cy.wait(2000)
    }
    CheckCat23Part() {
        this.elements.Cat23Part().scrollIntoView()
        this.elements.Cat23Part().should('be.visible')
        cy.wait(2000)

    }
    CheckCat4Part() {
        this.elements.Cat4Part().scrollIntoView()
        this.elements.Cat4Part().should('be.visible')
        cy.wait(2000)

    }
    CheckCat56Part() {
        this.elements.Cat56Part().scrollIntoView()
        this.elements.Cat56Part().should('be.visible')
        cy.wait(2000)

    }
    CheckRegisterPart() {
        this.elements.RegisterPart().scrollIntoView()
        this.elements.RegisterPart().should('be.visible')
        cy.wait(2000)

    }
    CheckCategoryHeaderPart() {
        this.elements.CategoryHeaderPart().scrollIntoView()
        this.elements.CategoryHeaderPart().should('be.visible')
        cy.wait(2000)

    }
    CheckAllElements() {
        this.CheckCategoryHeaderPart()
        this.CheckCat1Part()
        this.CheckCat23Part()
        this.CheckCat4Part()
        this.CheckCat56Part()
        this.CheckRegisterPart()
    }

}
module.exports = new CategoryPage();
