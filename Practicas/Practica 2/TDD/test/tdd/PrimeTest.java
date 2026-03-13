/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit4TestClass.java to edit this template
 */
package tdd;

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
public class PrimeTest {
    private Prime prime = null;
    public PrimeTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        this.prime = new Prime();
    }
    
    @After
    public void tearDown() {
    }

    @Test
    public void testPrimeNumber() {
        int number = 3;        
        assertTrue(prime.calculatePrimeNumber(number));
    }
    
    @Test
    public void testNoPrimeNumber() {
        int number = 6;        
        assertFalse(prime.calculatePrimeNumber(number));
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void testNegativePrimeNumber() {
        int number = -3;        
        assertFalse(prime.calculatePrimeNumber(number));
    }
    
    @Test
    public void testBigPrimeNumber() {
        int number = 997;        
        assertTrue(prime.calculatePrimeNumber(number));
    }
    @Test(expected = IllegalArgumentException.class)
    public void testZeroPrimeNumber() {
        int number = 0;        
        assertFalse(prime.calculatePrimeNumber(number));
    }
    
}
