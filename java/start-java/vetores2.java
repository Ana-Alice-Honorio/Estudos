import java.util.Arrays;

public class vetores2 {
    public static void main(String[] arg){
        // Primeira Opção:

        // String[] letras = new String[5];
        // letras[0] = "A";
        // letras[1] = "B";
        // letras[2] = "C";
        // letras[3] = "D";
        // letras[4] = "E";
        // for(int i=0; i < letras.length; i++){
        //   System.out.println(letras[i]);
        // }
        

        // Segunda Opção:
        // String[] letras = {"A", "B", "C", "R", "Y"};
        // for(int i=0; i < letras.length; i++){
        //    System.out.println(letras[i]);
        //  }

        // Terceira Opção:
        String[] letras = {"A", "B", "C", "R", "Y"};
      
         System.out.println(Arrays.toString(letras));
    }
}
