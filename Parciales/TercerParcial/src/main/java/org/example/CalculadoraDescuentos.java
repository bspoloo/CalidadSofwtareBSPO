package org.example;

public class CalculadoraDescuentos {
    public double calcularPrecioFinal(double montoCompra, boolean isVip) {
        double precionFinal = 0.0;

        if(montoCompra < 0) {
            throw new IllegalArgumentException("El monto no puede ser 0");
        }
        if(isVip) {
            precionFinal = montoCompra - (montoCompra * 0.2);
        } else if(montoCompra >= 500.0){
            precionFinal = montoCompra - (montoCompra * 0.1);
        }else if(montoCompra < 500.0) {
            precionFinal = montoCompra - (montoCompra * 0.05);
        }

        if(precionFinal < 0) throw new IllegalArgumentException("El precio final no debe ser menor que 0");

        return precionFinal;
    }
}
