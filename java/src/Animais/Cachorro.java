package src.Animais;

public class Cachorro {

    //Atributos
    private String nome;
    private String cor;
    private int altura;
    private double peso;
    private String estadoDeEspirito;

   //Construtores
   public Cachorro(){}
   public Cachorro(String nome, String cor, int altura, double peso, String estadoDeEspirito){
    this.nome = nome;
    this.cor = cor;
    this.altura = altura;
    this.peso = peso;
    this.estadoDeEspirito = estadoDeEspirito;
   }


   //Métodos
   public String getNome(){
    return this.nome;
   }

   public void setNome(String nome){
    this.nome = nome;
   }

   public String getCor(){
    return this.cor;
   }

   public void setCor(String cor){
    this.cor = cor;
   }

   public int getAltura(){
    return this.altura;
   }

   public void setAltura(int altura){
    this.altura = altura;
   }

   public double getPeso(){
    return this.peso;
   }

   public void setPeso(double peso){
    this.peso = peso;
   }

   public String getEstadoDeEspirito(){
    return estadoDeEspirito;
   }

    public void comer(){}
    public void latir(){
        System.out.println("au au");
    }

    public String pegar(){
        return "bolinha";
    }
}
