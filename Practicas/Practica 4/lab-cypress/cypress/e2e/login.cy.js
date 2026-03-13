describe("Práctica Guiada: Interacción con Formularios", () => {
    it("Escribe un correo y verifica el valor del input", () => {

        // 1. Visitar la de saucedemo.com
        cy.visit("https://www.saucedemo.com/");

        // 2. Seleccionar el campo de email (usando su clase CSS) y escribir
        cy.get("#user-name").type("standard_user");

        // 3. Verificar que el campo realmente contiene el texto que escribimos
        cy.get("#password").type("secret_sauce");

        // 4. Hacer clic en un botón de la página para logearse
        cy.get(".btn_action").click();
    });
});
