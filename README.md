# trybe_sd04
touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status
Notebook

# Github

## Mas o que é mesmo esse Controle de Versão?

Até aqui, você já sentiu na pele a dificuldade de gerenciar o trabalho realizado por diferentes pessoas ao mesmo tempo a fim de realizarem uma entrega conjunta.

Esse mesmo desafio assombrava o dia a dia de quase toda pessoa que trabalhava com desenvolvimento e precisava guardar diversas versões de seus sistemas, depois juntar os pedaços daquilo que era produzido ou alterado por cada colega, de modo a ter um código final estável.

O surgimento das comunidades de desenvolvimento de “software livre” tornou esse desafio ainda mais evidente, já que havia milhares de pessoas trabalhando juntas, em horários e localidades diversas, no código de um mesmo produto.

O artigo a seguir mostra, de maneira geral o que é esse Controle de Versão . Leia-o atentamente. 👩🏽‍🏫

Agora que você já entende bastante qual a finalidade do controle de versão, vamos a três conceitos importantíssimos para o seu trabalho:

**_Ramificação (Branching);_**

**_Mesclagem (Merge);_**

**_Resolução de conflitos._**

Em primeiro lugar, mais importante do que saber a sintaxe dos comandos, agora é hora de entender os conceitos.

Tendo isso em vista, veja este video sobre branch e merge:

```
https://vimeo.com/393015047
```

### Parte 1 - Instalação e configuração

Vamos começar com dois conteúdos que vão te ensinar a instalar e configurar o Git. Siga o passo a passo para deixar o Git pronto em seu ambiente.

Instalando o Git - Git Setup
Configuração inicial - Git Config
Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

Digite:

```
git --version
```

para saber qual versão do git está instalada.

Seu terminal deve conter algo parecido com:

```
git version 2.x.y
```

Digite **_git config --list_**

Seu terminal deve conter algo similar a isso:Copiar

```
user.email=seuemail@gmail.com
user.name=seunome
```

Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.

### Parte 2 - Criar conta no GitHub

Crie sua conta no GitHub usando seu e-mail pessoal 🐙

### Parte 3 (opcional) - Adicionando uma chave SSH na sua conta do GitHub

https://medium.com/@rgdev/como-adicionar-uma-chave-ssh-na-sua-conta-do-github-linux-e0f19bbc4265
Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do GitHub, o que vai te permitir fazer push’s e pull’s sem ter que ficar digitando usuário e senha.

Adicionando chave SSH na conta do GitHub
Se tiver problemas ao seguir o tutorial acima, consulte a documentação oficial do GitHub .

### Parte 4 - Do git init ao git push

Agora você vai aprender a iniciar um repositório Git, fazer seu primeiro commit e subi-lo para um repositório no GitHub.
http://www.devfuria.com.br/git/tutorial-iniciando-git/

Do primeiro commit ao primeiro Push

### Parte 5 - O seu repositório no GitHub

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o GitHub, é hora de colocar a casa em ordem!

Durante seu curso na Trybe, seus projetos serão entregues através de pushes nos repositórios do GitHub. Nada mais natural do que fazermos isso agora enviando os exercícios de Shell Script para o GitHub, não é mesmo? 👨🏽‍💻

Antes de começar, crie uma pasta com o nome my-shell-scripts. Você deve colocar os scripts em Shell que desenvolveu nos últimos dias nessa pasta. Coloque cada exercício em um arquivo separado.

No final, você deverá ter algo parecido com:

```
ls -l my-shell-scripts
total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 exercicio1.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio10.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio11.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio2.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio3.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio4.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio5.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio6.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio7.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio8.sh
-rw-r--r--  1 tryber  staff  0 Jan 27 00:35 exercicio9.sh
```

Agora vamos transformar essa pasta em um repositório Git:

Inicialize o repositório com **git init**;

Crie um arquivo de README utilizando o comando **touch README.md**;

Crie um commit inicial utilizando:

```
git add .
git commit -m "Initial commit"
```

Vá até o seu GitHub e crie um repositório público ;

⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md, pois você já criou um nos passos anteriores! 😉
Caso você tenha configurado a chave SSH nos passos anteriores, copie a URL do repositório depois de clicar no botão SSH. Senão, copie a URL do repositório depois de clicar no botão HTTPS;

Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO";
Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso:

```
origin	git@github.com:john-snow/know-nothing.git (fetch)
origin	git@github.com:john-snow/know-nothing.git (push)
```

Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub! 🤩

Execute o comando **git push origin master** no terminal;

Vá até o seu GitHub e verifique as novas alterações.

Agora, faça algumas alterações nos arquivos do repositório. Que tal adicionar uma descrição do que cada script faz no arquivo README.md ? 💪🏼

Lembre-se de fazer um commit quando terminar de alterar os arquivos;

Depois do commit, faça sempre um push;

Confira as alterações no GitHub.

### Learn the Basics of Git in Under 10 Minutes

https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/

### Tutorial para iniciar com o Git e o GitHub

http://devfuria.com.br/git/tutorial-iniciando-git/

### 2.1 - Git log

```
touch eder
git add .
git commit -m "criacao do arquivo eder"
git log
git log eder --ira verificar commits que foram feito com esse arquivo
git status
git show f1e11 - usar 4 primeiros caracteres do hash gerado é o suficiente
git push origin master
```

### 2.2 - Git remove

```
➜  exercisesTrybe git:(master) ✗ cat > arq3
teste de remocao
➜  exercisesTrybe git:(master) ✗ git add .
➜  exercisesTrybe git:(master) ✗ git commit -m "commit do arq3"
[master 7f31bc5] commit do arq3
 1 file changed, 2 insertions(+)
 create mode 100644 arq3
➜  exercisesTrybe git:(master) git rm arq3
rm 'arq3'
➜  exercisesTrybe git:(master) ✗ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	deleted:    arq3

➜  exercisesTrybe git:(master) ✗ git commit -m "arq 3 excluido"
[master 63ea5f4] arq 3 excluido
 1 file changed, 2 deletions(-)
 delete mode 100644 arq3
➜  exercisesTrybe git:(master)

➜  exercisesTrybe git:(master) git log --diff-filter=D --summary
➜  exercisesTrybe git:(master) git checkout 63ea5f~1 arq3
➜  exercisesTrybe git:(master) ✗ git add .
➜  exercisesTrybe git:(master) ✗ git commit -m "arq3 recuperado"
[master 5c25977] arq3 recuperado
 1 file changed, 2 insertions(+)
 create mode 100644 arq3
➜  exercisesTrybe git:(master) git push origin master
```

## Agora a prática

⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com os scripts em Shell que você criou nas aulas anteriores.
Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

Navegue até a raiz do projeto com os scripts em Shell Script;

Verifique se não existe nada sem “commitar” utilizando git status;

Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
Crie uma nova branch com o nome shell-script-changes e faça checkout nela;

Em algum arquivo .sh, na linha #2 , adicione o comentário: “Eu sou Tryber e…”;

Exemplo:
Copiar
#!/usr/bin bash

# Eu sou Tryber e...

Faça um git add nomeDoSeuArquivoShell;

Agora um git commit -m "Mensagem que você gostaria";

E por último um git push -u origin shell-script-changes;

Abra um Pull Request com uma descrição detalhada:

Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: “Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi… E para resolver o problema fizemos… E o resultado foi…”
Retorne para a branch principal, master, com o comando: git checkout master;

Verifique que você está na branch master, com o comando: git branch;

Crie uma nova branch shell-script-updates a partir da master e faça checkout nela;

No mesmo arquivo .sh que você modificou no passo 4, também na linha #2 adicione o comentário: “Vou ter muito sucesso na programação!”;

Faça um git add nomeDoSeuArquivoShell

Agora um git commit -m "Mensagem que você gostaria"

e por último um git push -u origin shell-script-updates

Abra um Pull Request com uma descrição amigável.

No Slack, procure pelo canal “code-review-\*” relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outro estudante. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;

Agora, faça o merge das branches shell-script-changes e shell-script-updates na branch master, através do Pull Request:

Primeiro, vá até a página do primeiro Pull Request (branch shell-script-changes) e faça o merge clicando no botão verde “Merge pull request”;

Agora, vá até página do outro Pull Request (branch shell-script-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta.

Você terá que resolver esse conflito antes de “mergear” o Pull Request. Clique no botão “Resolve conflicts”, escolha uma das duas versões do texto (lembre-se de apagar as linha com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em “Mark as resolved” e, em seguida, em “Commit merge”.

Agora você deve conseguir “mergear” seu Pull Request normalmente. 😎
