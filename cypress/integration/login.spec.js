describe('test Connexion ', () => {
    beforeEach(() =>{
        cy.visit("https://www.backmarket.fr/register")
        cy.wait(2000)
    })
    it('logain sucess',()=>{
       cy.get('#email-signin').type('soufiane.hannane.pro@gmail.com')
       cy.get('#password-signin').type('NaymarJr007!')
        cy.contains('Welcome Back').click()
        
        
    })

    it('Testé le login with login  empty',()=>{
        cy.get('#email-signin').type('jk').clear()
        cy.get('._3EiijXdZYR7s-feQq8KOZl').click()  
        cy.get('[data-test=list] > [data-test=list-item]').should('contain','Le champ "Email" est obligatoire')
        
    })

    it('login with failed gmail',()=>{
        cy.get('#email-signin').type('hahkkak@gmail.com')
        cy.get('#password-signin').type('NaymarJr007!')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain','Mauvaise combinaison email/mot de passe')
    })
    
    it('login with fail password',()=>{
        cy.get('#email-signin').type('soufiane.hannane.pro@mail.com')
        cy.get('#password-signin').type('Naymar')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain','Mauvaise combinaison email/mot de passe')
    })
    

})