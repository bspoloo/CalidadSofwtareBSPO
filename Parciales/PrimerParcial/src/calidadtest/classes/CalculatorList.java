/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package calidadtest.classes;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author USUARIO
 */
public class CalculatorList {

    public Double getAvergareList(List<Integer> numbers) {
        if (numbers.isEmpty()) {
            throw new IllegalArgumentException("Lista vacia");
        }
        
        Double cant = (double) numbers.size();
        Double sum = 0.0;
        for (Integer number : numbers) {
            sum += number;
        }

        return sum / cant;
    }
}
