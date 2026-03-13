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
public class FactorialTest {
    private Factorial factorial = null;
    public FactorialTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        this.factorial = new Factorial();
    }
    
    @After
    public void tearDown() {
        factorial = null;
    }

    /**
     * Test of getOperation method, of class Factorial.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testGetOperationNegative() {
        System.out.println("Iniciando operacion Negativa");
        int n = -1;
        Factorial instance = new Factorial();
        int expResult = 6;
        int result = instance.getOperation(n);
        assertNotEquals(expResult, result);
    }
    @Test(expected = IllegalArgumentException.class)
    public void testGetOperationZero() {
        System.out.println("Iniciando operacion Cero");
        int n = 0;
        Factorial instance = new Factorial();
        int expResult = 6;
        int result = instance.getOperation(n);
        assertNotEquals(expResult, result);
    }
    @Test(expected = IllegalArgumentException.class)
    public void testGetOperationThree() {
        System.out.println("Iniciando operacion de Tres");
        int n = 3;
        Factorial instance = new Factorial();
        int expResult = 6;
        int result = instance.getOperation(n);
        assertEquals(expResult, result);
    }
}
