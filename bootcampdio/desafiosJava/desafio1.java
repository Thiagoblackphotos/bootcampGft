import java.util.Scanner;

import javax.net.ssl.SSLProtocolException;

public class desafio1 {
    public static void main(String[]args){
        Scanner scanner = new Scanner(System.in);
        float valorSalario = scanner.nextFloat();
        float valorBeneficios = scanner.nextFloat();

        float valorImposto = 0;
        if (valorSalario >= 0 && valorSalario <= 1100) {
            valorImposto = 0,05 * valorSalario;

        }
        float saida = valorSalario + valorBeneficios - valorImposto;
        System.out.println("R$" + String.format("%.2f", saida));
    }
}
