class FooterPage {

    elements = {

        FooterElement: () => cy.get('.elementor-element-76791334'),

        ContactsPart: () => cy.get('.elementor-element-4e46ac1'),

        titleElement: () => cy.get('.elementor-element-3f2626d'),

        EmailContact: () => cy.get('.elementor-icon-list-items > :nth-child(1) > a'),

        WhatsAppContact: () => cy.get('.elementor-icon-list-items > :nth-child(2) > a'),

        AppURL1: () => cy.get('.elementor-element-f3b21eb > .elementor-widget-container'),

        AppURL2: () => cy.get('.elementor-element-df61c1e > .elementor-widget-container'),

        SocialMedia: () => cy.get('.elementor-social-icons-wrapper'),

        Categories: () => cy.get('.elementor-element-8f56214'),

        Features: () => cy.get('.elementor-element-f3622b5'),

        Links: () => cy.get('.elementor-element-3f2626d'),

        FAQ: {

            element: () => cy.get('#menu-1-307d8a5 > .menu-item-31035 > .elementor-item'),
            url: 'https://business.toptalla.com/en/en-faq/'
        },

        PrivacyPolicy: {

            element: () => cy.get('#menu-1-307d8a5 > .menu-item-privacy-policy > .elementor-item'),

            url: 'https://business.toptalla.com/en/privacy-policy/'

        },

        BuisnessFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31026 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-1'

        },

        calenderFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31027 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-2'

        },

        brandFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31028 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-3'

        },

        crmFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31029 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-4'

        },

        noShowFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31030 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-5'

        },

        POSFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31031 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-6'

        },

        productFeature: {

            element: () => cy.get('#menu-1-ce2c485 > .menu-item-31032 > .elementor-item'),

            url: 'https://business.toptalla.com/en/features/#section-7'

        },

        HairCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31019 > .elementor-item'),

            url: 'https://business.toptalla.com/en/hair-salons/'

        },

        BeautyCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31020 > .elementor-item'),

            url: 'https://business.toptalla.com/en/beauty-centers/'

        },

        FaceCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31021 > .elementor-item'),

            url: 'https://business.toptalla.com/en/face-makeup/'

        },

        NailsCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31022 > .elementor-item'),

            url: 'https://business.toptalla.com/en/nails/'

        },

        WaxCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31023 > .elementor-item'),

            url: 'https://business.toptalla.com/en/hair-removal-waxing/'

        },

        SpaCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31024 > .elementor-item'),

            url: 'https://business.toptalla.com/en/spa-massage/'

        },

        OthersCat: {

            element: () => cy.get('#menu-1-2037640 > .menu-item-31025 > .elementor-item'),

            url: 'https://business.toptalla.com/en/any-type-of-salon/'

        },

        InstagramContact: {

            element: () => cy.get('.elementor-social-icon-instagram'),

            url: 'toptalla.partners',

            url2: 'instagram'
        },


        FacebookContact: {

            element: () => cy.get('.elementor-social-icon-facebook'),

            url: 'toptalla.partners',

            url2: 'facebook'
        },

        /*      LinkedInContact: {
     
                 element: () => cy.get('.elementor-social-icon-linkedin'),
     
                 url: 'toptalla',

                 url2: 'linkedin'
             }, */

        RequestButton: {
            element: () => cy.get('.elementor-element-213e915 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button'),
            CheckClick: () => cy.get('.dialog-message'),
            exit: () => cy.get('.dialog-close-button > .eicon-close'),

        },

        ContactUs:
        {
            element: () => cy.get('#menu-1-307d8a5 > .menu-item-type-custom > .elementor-item'),
            CheckClick: () => cy.get('.elementor-field-type-html'),
            exit: () => cy.get('.dialog-close-button > .eicon-close'),
        },

    }


    contactElements = {

        ContactForm: () => cy.get('#menu-1-307d8a5 > .menu-item-type-custom > .elementor-item'),

        NameField: () => cy.get('#form-field-field_6b514f4'),

        PhoneField: () => cy.get('#form-field-email'),

        EmailField: () => cy.get('#form-field-message'),

        NoteField: () => cy.get('#form-field-field_cacf1ef'),

        SendContactUsButton: () => cy.get('.elementor-field-type-submit > .elementor-button'),

        SuccessMessage: () => cy.get('.elementor-message-success'),

        FailedMessage: () => cy.get('.elementor-message-danger')

    }


    RequestFeatureElements = {

        NameField: () => cy.get('#form-field-name'),

        EmailField: () => cy.get('#form-field-email'),

        PhoneField: () => cy.get('#form-field-phone'),

        TypeChoice: () => cy.get('#form-field-requestType-3'),

        ImportantChoice: () => cy.get('#form-field-importants-1'),

        SectionField: () => cy.get('#form-field-section'),

        sectionElement: () => cy.findByRole('option', { name: /staff management/i }),

        MessageField: () => cy.get('#form-field-message'),

        sendButton: () => cy.get('#featre-request-action'),

        SuccessMessage: () => cy.get('.elementor-message-success'),

        FailedMessage: () => cy.get('.elementor-message-danger'),
    }

    CheckFooterElement() {
        this.elements.FooterElement().should('be.visible')
        this.elements.FooterElement().scrollIntoView()
        cy.wait(2000)
    }

    AllElementsWork() {
        let count = 1;
        for (const elementName in this.elements) {
            if (this.elements.hasOwnProperty(elementName)) {
                if (typeof this.elements[elementName] === 'function') {
                    this.elements[elementName]().should('be.visible');
                } else {
                    this.elements[elementName].element().should('be.visible');
                    if (this.elements[elementName].url) {
                        this.ClickAndVerifyUrl(elementName);
                        console.log(count)
                        count++;
                    }
                    if (this.elements[elementName].CheckClick) {
                        this.elements[elementName].element().click();
                        cy.wait(1000)
                        this.elements[elementName].CheckClick().should('be.visible')
                        cy.wait(3000)
                        this.elements[elementName].exit().click({ force: true })
                        cy.wait(8000)
                        cy.reload(true)
                    }
                }
            }
        }
    }

    ClickAndVerifyUrl(elementName) {

        this.elements[elementName].element().invoke('removeAttr', 'target').click();
        if (this.elements[elementName].url2) {
            cy.url().should('include', this.elements[elementName].url).should('include', this.elements[elementName].url2);

        }
        else {
            cy.url().should('include', this.elements[elementName].url);

        }
        cy.wait(2000); // adjust waiting times as needed
        cy.go('back');
    }

    OpenContactForm() {
        this.elements.ContactUs.element().click()
        this.elements.ContactUs.CheckClick().should('be.visible')
        this.contactElements.ContactForm().should('be.visible')
    }
    FillContactForm(name, phone, email, note) {
        this.contactElements.NameField().type(name)
        this.contactElements.PhoneField().type(phone)
        this.contactElements.EmailField().type(email)
        this.contactElements.NoteField().type(note)
        cy.wait(3000)
    }
    SendContactNotes() {
        this.contactElements.SendContactUsButton().click()
        cy.wait(3000)
        this.contactElements.SuccessMessage().should('be.visible')
        cy.wait(3000)
    }

    SendContactWithFail() {
        this.contactElements.SendContactUsButton().click()
        cy.wait(3000)
        this.contactElements.FailedMessage().should('be.visible')
        cy.wait(3000)
    }
    OpenFeatureForm() {
        this.elements.RequestButton.element().click()
        this.elements.RequestButton.CheckClick().should('be.visible')
    }
    FillFeatureForm(name, phone, email, note, option) {
        this.RequestFeatureElements.NameField().type(name)
        this.RequestFeatureElements.EmailField().type(email)
        this.RequestFeatureElements.PhoneField().type(phone)
        this.RequestFeatureElements.TypeChoice().click()
        this.RequestFeatureElements.ImportantChoice().click()
        this.RequestFeatureElements.SectionField().select(option)
        this.RequestFeatureElements.MessageField().type(note)
        cy.wait(3000)
    }
    SendFeatureNotes() {
        this.RequestFeatureElements.sendButton().click()
        cy.wait(3000)
        this.RequestFeatureElements.SuccessMessage().should('be.visible')
        cy.wait(3000)
    }

    SendFeatureWithFail() {
        this.RequestFeatureElements.sendButton().click()
        cy.wait(3000)
        this.RequestFeatureElements.FailedMessage().should('be.visible')
        cy.wait(3000)
    }
}

module.exports = new FooterPage();