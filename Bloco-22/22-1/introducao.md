# Entidades

* Representação de algo do mundo real para o banco de dados.
  <summary>
      `Ver entidades`
  </summary>
  Se sua interpretação foi diferente, não se preocupe. A maneira como você modelará o banco de dados varia de acordo com a sua escala.
  <ul>
      <li>Entidade 1: `Álbum`;</li>
      <li>Entidade 2: `Artista`;</li>
      <li>Entidade 3: `Estilo Musical`;</li>
      <li>Entidade 4: `Canção`.</li>
  </ul>

# Atributos
* Descrição das entidades criadas.

  <summary>
      `Ver atributos`
  </summary>
  Se sua interpretação foi diferente, não se preocupe, você praticará mais hoje para que melhore essa percepção.
  <ul>
    <li>Álbum: `album_id`, `titulo`, `preco`, `estilo_id` e `artista_id`;</li>
    <li>Artista: `artista_id` e `nome`;</li>
    <li>Estilo Musical: `estilo_id` e `nome`;</li>
    <li>Canção: `cancao_id`, `nome` e `album_id`.</li>
  </ul>
  <p>
      Algo a ser notado aqui é que algumas informações precisam ser deduzidas, como, por exemplo, a coluna que armazena o identificador único dos registros (aqui chamado de id), que todas tabelas precisam ter.
  </p>

# Relacionamento

* Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, que são:

### Relacionamento Um para Um (1..1):
Nesse tipo de relacionamento, uma linha da Tabela A deve possuir apenas uma linha correspondente na Tabela B e vice-versa. Veja o exemplo abaixo:

Exemplo de relacionamento um para um
Apesar de ser possível inserir essas informações em apenas uma tabela, esse tipo de relacionamento é usado normalmente quando se quer dividir as informações de uma tabela maior em tabelas menores, evitando que as tabelas tenham dezenas de colunas.

###  Relacionamento Um para Muitos ou Muitos para Um (1..N):
Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na Tabela A pode ter várias linhas correspondentes na Tabela B, mas uma linha da Tabela B só pode possuir uma linha correspondente na Tabela A. Veja o exemplo abaixo:

Exemplo de relacionamento um para muitos ou muitos para um
Nesse exemplo, uma categoria pode estar ligada a vários livros, embora um livro deva possuir apenas uma categoria.

###  Relacionamento Muitos para Muitos (N..N):
O relacionamento muitos para muitos acontece quando uma linha na Tabela A pode possuir muitas linhas correspondentes na Tabela B e vice-versa. Veja o exemplo abaixo:

  <li>Um artista pode possuir um ou mais álbuns;</li>
  <li>Um estilo musical pode estar contido em um ou mais álbuns;</li>
  <li>Um álbum pode possuir uma ou mais canções.</li>

3) Criando um banco de dados para conter suas tabelas