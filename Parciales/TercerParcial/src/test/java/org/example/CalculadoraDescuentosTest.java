package org.example;

import org.junit.Test;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;


public class CalculadoraDescuentosTest {
    private CalculadoraDescuentos calculadoraDescuentos;
    public CalculadoraDescuentosTest() {
        this.calculadoraDescuentos = new CalculadoraDescuentos();
    }
    @Test
    public void caso1() {
        double monto  = 1000.0;
        boolean VIP = true;

        double resultado = calculadoraDescuentos.calcularPrecioFinal(monto, VIP);
        assertEquals(800, resultado, 0.001);
    }
    @Test
    public void caso2() {
        double monto  = 600.0;
        boolean VIP = false;

        double resultado = calculadoraDescuentos.calcularPrecioFinal(monto, VIP);
        assertEquals(540, resultado, 0.001);
    }
    @Test
    public void caso3() {
        double monto  = 200.0;
        boolean VIP = false;

        double resultado = calculadoraDescuentos.calcularPrecioFinal(monto, VIP);
        assertEquals(190, resultado, 0.001);
    }
    @Test
    public void caso4() {
        double monto  = 500;
        boolean VIP = false;

        double resultado = calculadoraDescuentos.calcularPrecioFinal(monto, VIP);
        assertEquals(450, resultado, 0.001);
    }
}