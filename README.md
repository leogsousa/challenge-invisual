# Challenge Invisual

Esse é o desafio de desenvolvimento RPA feito pela Invisual. Estão sendo usadas as tecnologias NodeJs, NodeXLSX e SeleniumWebDriver. O desafio consiste em desenvolver um código que execute duas ações no navegador.



# Funcionalidades do projeto

- `Funcionalidade 1`: Lê a tabela da página http://webapplayers.com/inspinia_admin-v2.9.4/table_data_tables.html e gera um EXCEL com os mesmos dados da tabela.
- 
- `Funcionalidade 2`: Lê esse EXCEL gerado na ação anterior e insire cada uma das linhas no formulário do link http://webapplayers.com/inspinia_admin-v2.9.4/form_editors.html no lugar do “Lorem Ipsum”, a informação de cada linha do excel são separadas por um traço no começo, um espaço entre as palavras e ponto e virgula no fim quebra de linha.



# Como usar o código

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org/en/).

2. Também se certifique o seu navegador Chrome esteja atualizado.

4. Navegue até a pasta do projeto e execute o comando para instalar o módulos do node
```
node install
```

3. Após a instalação das dependências, basta executar o comando para iniciar as ações:
```
node index.js
```


Aguarde alguns segundos enquanto o código carrega a página da web e executa as ações.

Quando a execução for concluída, o navegador será fechado automaticamente.
