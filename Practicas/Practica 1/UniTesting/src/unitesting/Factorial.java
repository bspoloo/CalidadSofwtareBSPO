/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package unitesting;

/**
 *
 * @author Animetx
 */
public class Factorial {
    
    public int getOperation(int n) {
        if (n <= 1) {
            throw new IllegalArgumentException("Introducido valor n cero o por uno");
            //return 1;
        } else {
            return n * getOperation(n - 1);
        }
    }
}
