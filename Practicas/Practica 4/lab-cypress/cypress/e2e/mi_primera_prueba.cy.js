describe("Práctica Guiada: Interacción con Formularios", () => {
    it("Escribe un correo y verifica el valor del input", () => {
        // 1. Visitar la página de acciones de Cypress
        cy.visit("https://example.cypress.io/commands/actions");
        // 2. Seleccionar el campo de email (usando su clase CSS) y escribir
        cy.get(".action-email").type("estudiante@usfx.bo");
        // 3. Verificar que el campo realmente contiene el texto que escribimos
        cy.get(".action-email").should("have.value", "estudiante@usfx.bo");
        // 4. Hacer clic en un botón de la página
        cy.get(".action-btn").click();
    });
});
