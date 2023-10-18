public class booleanOperator {
    public static void main(String[] args) {
      boolean fimDeSemana = true;
      boolean fazendoSol = true;
      boolean vamosAPraia = fimDeSemana && fazendoSol;
        
        System.out.println(vamosAPraia);

        String mensagem = fimDeSemana ? "é fim de semana" : "não é sexta!";
        System.out.println(mensagem);
    }
}
