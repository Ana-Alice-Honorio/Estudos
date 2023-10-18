# Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão

# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

def calc(num1, num2, entrada):
    if entrada == 1:
        return num1 + num2
    elif entrada == 2:
        return num1 - num2
    elif entrada == 3:
        return num1 * num2
    elif entrada == 4:
        return num1 / num2
    else:
        return 0

res = calc(1, 2, 1)
print("O resultado da operação é:", res)