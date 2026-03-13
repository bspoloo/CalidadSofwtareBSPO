/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit4TestClass.java to edit this template
 */
package unitesting;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Animetx
 */
public class CalculatorTest {
    private Calculator instance = null;

    public CalculatorTest() {
    }

    @BeforeClass
    public static void setUpClass() {

    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        System.out.println("Iniciando prueba...");
        this.instance = new Calculator(); // inicializamos el objeto a probar
    }

    @After
    public void tearDown() {
        instance = null;
    }

    /**
     * Test of add method, of class Calculator.
     */
    @Test
    public void testAdd() {
        System.out.println("add");
        int a = 5;
        int b = 3;
        int expResult = 8;
        int result = instance.add(a, b);
        assertEquals(expResult, result);
    }

    /**
     * Test of rest method, of class Calculator.
     */
    @Test
    public void testRest() {
        System.out.println("rest");
        int a = 10;
        int b = 4;
        
        int expResult = 6;
        int result = instance.rest(a, b);
        assertEquals(expResult, result);
    }

    /**
     * Test of multiply method, of class Calculator.
     */
    @Test
    public void testMultiply() {
        System.out.println("multiply");
        int a = 5;
        int b = 6;
        
        int expResult = 30;
        int result = instance.multiply(a, b);
        assertEquals(expResult, result);
    }

    /**
     * Test of divide method, of class Calculator.
     */
    @Test
    public void testDivide() {
        System.out.println("divide");
        int a = 5;
        int b = 5;

        int expResult = 1;
        int result = instance.divide(a, b);
        assertEquals(expResult, result);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        System.out.println("divide by zero");
        int a = 5;
        int b = 0;

        int expResult = 1;
        int result = instance.divide(a, b);
        assertEquals(expResult, result);
    }

}
