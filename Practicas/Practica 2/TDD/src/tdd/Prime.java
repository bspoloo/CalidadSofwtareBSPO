/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tdd;

/**
 *
 * @author Animetx
 */
public class Prime {
    public boolean calculatePrimeNumber(int number) {
        if( number <= 0) throw new IllegalArgumentException("El numero no puede ser negativo");        
        if( number > 0 && number <= 1) return false;

        for(int i = 2; i <= Math.sqrt(number); i++ ) {
            if(number %i == 0) return false;
        }
        return true;
    }
}
