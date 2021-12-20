# ESCLARECIMENTOS DO CÓDIGO

## 1. Linguagem e libs utilizadas:

### Front-end:
* Javascript
* Axios
* React
* Sass

### Back-end:
* Javascript
* NodeJS
* Async
* Axios
* body-parse
* express
* nodemon
* bluebird

## 2. Instalando o projeto:
Rode os seguintes comandos no terminal:

```bash
$ git clone https://github.com/gustavobarretto/nimbus-challenge.git
```

Rode os seguintes comandos no terminal na pasta './app':

```bash
$ cd app
$ npm i
$ npm start
```

![image](https://cdn.discordapp.com/attachments/869979419643637783/922188143304777849/unknown.png)

O servidor está no heroku, sob o domínio https://nimbus-back-end-app.herokuapp.com/ e com bando de dados relacional PostgreSQL.

Só foram criados o POST para criação do bairro e das previsões e o GET por bairro. É possível fazer consulta pelo navegador dos seguintes endereços:
* https://nimbus-back-end-app.herokuapp.com/neighbourhoods/Pituba 
* https://nimbus-back-end-app.herokuapp.com/neighbourhoods/Patamares 
* https://nimbus-back-end-app.herokuapp.com/neighbourhoods/Barra 
* https://nimbus-back-end-app.herokuapp.com/neighbourhoods/Itapua 

Pronto! Seu projeto foi instalado!