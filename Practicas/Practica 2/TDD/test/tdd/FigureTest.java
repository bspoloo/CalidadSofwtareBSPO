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
public class FigureTest {
    private Figure figure = null;
    public FigureTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        this.figure = new Figure();
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of calculateArea method, of class Figure.
     */
    @Test
    public void testCalculateAreaPositiveRadius() {
        double radius = 5;
        double expResult = Math.PI * Math.pow(radius, 2);
        double result = this.figure.calculateArea(radius);
        
        assertEquals(expResult, result, 0);
    }
    @Test(expected = IllegalArgumentException.class)
    public void testCalculateAreaZeroRadius() {
        double radius = 0;
        double expResult = Math.PI * Math.pow(radius, 2);
        double result = this.figure.calculateArea(radius);
        
        assertEquals(expResult, result, 0);
    }
    @Test(expected = IllegalArgumentException.class)
    public void testCalculateAreaNegativeRadius() {
        double radius = -3;
        double expResult = Math.PI * Math.pow(radius, 2);
        double result = this.figure.calculateArea(radius);
        
        assertEquals(expResult, result, 0);
    }
    @Test(expected = IllegalArgumentException.class)
    public void testCalculateAreaBigRadius() {
        double radius = 1000;
        double expResult = Math.PI * Math.pow(radius, 2);
        double result = this.figure.calculateArea(radius);
        
        assertEquals(expResult, result, 0);
    }
    @Test
    public void testCalculateAreaDecimalRadius() {
        double radius = 3.5;
        double expResult = Math.PI * Math.pow(radius, 2);
        double result = this.figure.calculateArea(radius);
        
        assertEquals(expResult, result, 0);
    }
    
}
