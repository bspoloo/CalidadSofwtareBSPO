/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tdd;

/**
 *
 * @author Animetx
 */
public class Palindromo {

    public boolean esPalindromo(String text) {
        // 1. Limpiar el texto (quitar espacios, puntuación y convertir a minúsculas)
        String textoLimpio = text.toLowerCase().replaceAll("[^a-z0-9]", "");
        // 2. Invertir el texto
        String textoInvertido = new StringBuilder(textoLimpio).reverse().toString();
        // 3. Comparar el texto original limpio con el invertido
        return textoLimpio.equals(textoInvertido);
    }
}
