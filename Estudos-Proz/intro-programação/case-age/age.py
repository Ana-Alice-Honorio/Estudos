# Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
# A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

# Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

# https://docs.python.org/pt-br/3/library/datetime.html
# https://rollbar.com/blog/python-valueerror/#:~:text=The%20Python%20ValueError%20is%20an,a%20certain%20kind%20of%20value.

import datetime

def calc_age(ano_nascimento):
    data_atual = datetime.datetime.now()
    ano_atual = data_atual.year
    idade = ano_atual - ano_nascimento
    return idade

def input_ano_nascimento():
    while True:
        try:
            ano = int(input("Digite o ano de nascimento (entre 1922 e 2021): "))
            if 1922 <= ano <= 2021:
                return ano
            else:
                print("Ano inválido!Tente novamente.")
        except ValueError:
            print("Digite um número válido para o ano.")

nome = input("Digite seu nome completo: ")
ano_nascimento = input_ano_nascimento()
idade = calc_age(ano_nascimento)

print("Nome: ", nome)
print("Idade: ", idade, "anos.")