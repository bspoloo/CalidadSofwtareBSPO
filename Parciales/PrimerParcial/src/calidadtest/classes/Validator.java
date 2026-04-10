/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package calidadtest.classes;

/**
 *
 * @author USUARIO
 */
public class Validator {

    public Boolean isValidPassord(int n, String password) {
        if (password.length() < n || password.isEmpty()) {
            return false;
        }

        boolean hasUpper = false, hasLower = false, hasDigit = false;
        for (char c : password.toCharArray()) {
            if (Character.isUpperCase(c)) {
                hasUpper = true;
            } else if (Character.isLowerCase(c)) {
                hasLower = true;
            } else if (Character.isDigit(c)) {
                hasDigit = true;
            }
        }
        return hasUpper && hasLower && hasDigit;
    }
}
