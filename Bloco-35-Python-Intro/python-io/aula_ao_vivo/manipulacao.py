import json

try:
    file = open('file.json', 'r')
    games = json.load(file)
    print(games)
    print('Vc esta usando o arquivo2')
except OSError:
    print('Aconteceu algum erro ou o arquivo nao existe')
else:
    print('Arquivo foi manipulado, tudo certo')
finally:
    file.close()

with open('file.json', 'r') as file:
    file = open('file.json', 'r')
    games = json.load(file)
    print(games)