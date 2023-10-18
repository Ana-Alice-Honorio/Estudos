package src;

import src.Animais.Cachorro;

public class Main {
    public static void main(String[] args){
     Cachorro cachorro1 = new Cachorro();
     Cachorro cachorro2 = new Cachorro("Puppy", "caramelo", 25, 25.8, "nada");
       System.out.println(cachorro2.getNome());
       System.out.println(cachorro2.getPeso());
 
    cachorro1.latir();
    System.out.println("O cachorro pegou uma " + cachorro1.pegar());
    }
 }
