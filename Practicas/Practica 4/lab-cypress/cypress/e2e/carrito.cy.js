describe("Práctica Guiada: Para carrito", () => {
    it("Selecciona un carrito automaticamente", () => {

        // // 1. Visitar la de saucedemo.com
        cy.visit("https://www.saucedemo.com/");

        // // 2. Seleccionar el campo de email (usando su clase CSS) y escribir
        cy.get("#user-name").type("standard_user");

        // // 3. Verificar que el campo realmente contiene el texto que escribimos
        cy.get("#password").type("secret_sauce");

        cy.get(".btn_action").click();

        // 4. Hacer clic en el primer boton para agregar al carrito
        cy.get("#add-to-cart-sauce-labs-backpack").click();

        // 4. Verificar que el carrito muestre "1"
        cy.get(".shopping_cart_badge")
            .should("be.visible")
            .and("have.text", "1");
    });
});
