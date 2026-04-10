/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit4TestClass.java to edit this template
 */
package calidadtest.classes;

import java.util.ArrayList;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author USUARIO
 */
public class CalculatorListTest {

    private CalculatorList calculator = new CalculatorList();

    public CalculatorListTest() {
    }

    /**
     * Test of getAvergareList method, of class CalculatorList.
     */
    @Test
    public void testGetAvergareListPositive() {
        System.out.println("getAvergareList Positive");
        List<Integer> numbers = new ArrayList();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        Double result = 25.0;

        assertEquals(result, calculator.getAvergareList(numbers));
    }

    @Test
    public void testGetAvergareListNegative() {
        System.out.println("getAvergareList Negative");
        List<Integer> numbers = new ArrayList();
        numbers.add(-10);
        numbers.add(-20);
        numbers.add(-30);

        Double result = -20.0;

        assertEquals(result, calculator.getAvergareList(numbers));
    }

    @Test
    public void testGetAvergareListMix() {
        System.out.println("getAvergareList Mix");
        List<Integer> numbers = new ArrayList();
        numbers.add(5);
        numbers.add(-5);
        numbers.add(10);
        numbers.add(-10);

        Double result = 0.0;

        assertEquals(result, calculator.getAvergareList(numbers));
    }

    @Test
    public void testGetAvergareListOneElement() {
        System.out.println("getAvergareList One Element");
        List<Integer> numbers = new ArrayList();
        numbers.add(100);
        Double result = 100.0;

        assertEquals(result, calculator.getAvergareList(numbers));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testGetAvergareListEmpty() {
        System.out.println("getAvergareList Error exception");
        List<Integer> numbers = new ArrayList();
        Double result = 25.0;

        assertEquals(result, calculator.getAvergareList(numbers));
    }
}
