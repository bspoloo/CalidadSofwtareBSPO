/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package calidadtest.classes;


import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * @author USUARIO
 */
public class ValidatorTest {
    private Validator validator;
    public ValidatorTest(){
        validator = new Validator();
    }
  
    
    /**
     * Test of isValidPassord method, of class Validator.
     */
    @Test
    public void testIsValidPassord() {
        int n = 8;
        String password = "Password1";
        Boolean result = this.validator.isValidPassord(n, password);
        assertEquals(true, result);
    }

    @Test
    public void testIsValidPassordNoMayus() {
        int n = 8;
        String password = "password1";
        Boolean result = this.validator.isValidPassord(n, password);
        assertEquals(false, result);
    }
    
    @Test
    public void testIsValidPassordNoNumber() {
        int n = 8;
        String password = "Password";
        Boolean result = this.validator.isValidPassord(n, password);
        assertEquals(false, result);
    }
    
    @Test
    public void testIsValidPassordShort() {
        int n = 8;
        String password = "Pas1";
        Boolean result = this.validator.isValidPassord(n, password);
        assertEquals(false, result);
    }
    @Test
    public void testIsValidPassordEmpty() {
        int n = 8;
        String password = "";
        Boolean result = this.validator.isValidPassord(n, password);
        assertEquals(false, result);
    }
}
