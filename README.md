# DesafioJust
Bem vindo a resolução do desafio de contratação para vaga de Desenvolvedor WEB Front-END com a JUST.

## Este projeto foi desenvolvido utilizando:
- Angular - [https://angular.io/](https://angular.io/)
- Angular Material - [https://material.angular.io/](https://material.angular.io/)
- NgRx - [https://ngrx.io/](https://ngrx.io/)

  

## Rodando a aplicação
Para rodar a aplicação em sua maquina certifique-se de possuir a versão mais recente do [Node.js](https://nodejs.org/en/) e siga os seguintes passos:
1. Clone o repositório em um diretório de sua preferencia com o seguinte comando `git clone https://github.com/hugobr02/perrys.git`
2. Entre na pasta, e instale as dependência rodando `npm install`
3. Rode a aplicação com o comando: `npm start`.
4. Depois acesse `http://localhost:4200/`.

  

## Estrutura do Projeto
Dentro da pasta `src/app`está a aplicação seguindo a seguinte estrutura:
- `actions` -  Este diretório armazena as constantes das ações que serão chamadas para mudança do state no `reducers` do NgRx.
- `components` - Está pasta irá armazenar os componentes da aplicação, ou seja, o layout em si.
- `models` - São os modelos de estrutura de dados que será trabalhado na aplicação como a Model do Produto.
- `reducers`- Está pasta armazena os `reducers` da aplicação onde será trabalho o state da aplicação e suas logicas aplicadas. 
- `services` - Armazena os serviços compartilhados pela aplicação.

Dentro da pasta `src/assets/images` está salvo todas as imagens utilizadas na aplicação.