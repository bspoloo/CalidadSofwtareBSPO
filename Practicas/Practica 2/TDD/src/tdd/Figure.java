/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tdd;

/**
 *
 * @author Animetx
 */
public class Figure {
    public double calculateArea(double radius) {
        if(radius <= 0) throw new IllegalArgumentException("No puedes introducir un radio cero o negativo");
        if(radius >= 1000) throw new IllegalArgumentException("*El radio no puede ser mayor a 1000");
        
        return Math.PI * Math.pow(radius, 2);
    }
}
