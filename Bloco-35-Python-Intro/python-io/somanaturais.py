soma = 0
numeros = input('Digite um numero natural: ')

while numeros != 'sair':
    if not numeros.isdigit():
        print(f'O objeto digitado foi {numeros} é invalido.')
        numeros = input('Digite um numero natural: ')
    else:
        soma += int(numeros)
        numeros = input('Digite um numero natural: ')


print(f'Soma total: {soma}')

# nums = input("Insira valores aqui, separados por espaço: ")

# numsArr = nums.split(" ")

# sum = 0
# for num in numsArr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")