# _Teste Desenvolvimento Pontua Web_

> Esse é o teste para desenvolvedores na Pontua Web.<br>
> Sinta-se livre para editar a partir do título "Documentação da Aplicação".<br>
> Essa aplicação deve ser criada com base e utilização na api fornecida pela Marvel

## [https://developer.marvel.com/](https://developer.marvel.com/)<br>

> Qualquer dúvida poderá ser enviada por e-mail em tecnologia@pontua.com.br;<br>
> O prazo para finalização do teste será fornecido pelo setor de Recursos Humanos.<br> >**_Não deixe de entregar sua aplicação_**, mesmo que não esteja completa ou perfeita;<br>
> A entrega do código deve ser feita no GitHub e, após a conclusão, notifique a equipe através dos e-mails tecnologia@pontua.com.br e gente@pontua.com.br.<br>

---

> Link para layout no Figma: [layout]('https://www.figma.com/file/WgcfxyLOze9TZDUzFJ26Dx/Teste-de-Desenvolvimento-Pontua-Mobile?type=design&node-id=218%3A4648&mode=design&t=UOMzcvXkefwe0ffA-1')

---
## sobre

<br>
> Essa aplicação foi criada com base e utilização na api fornecida pela Marvel [https://developer.marvel.com/](https://developer.marvel.com/)<br>

## Tecnologia usada

- react native
- expo
- styled components
- axios
- typescript

## Primeiros Passos

Siga os passos abaixo apos clonar o projeto:

```bash
# Instalar as dependências do projeto
yarn install
ou
npm install
```

```bash
# Rodar o projeto
npm run dev

ou

yarn dev
```

## Env

´
EXPO_PUBLIC_API_KEY= apikey marvel
EXPO_PUBLIC_PRIVATE_API_KEY= PrivateApiKey marvel
´

## login

- Usuario: `matheus@hotmail.com.br`
- Senha: `test`

## cadastro

- os dados esta sendo salvo em um FIREBASE

## Teste de esquece a senha

- code: 123456 sempre vai ser


## Arquitetura de pasta

- src
  - @type -> configuração dos tipos de importação
  - app -> as telas do app
  - components -> onde fica componentes das paginas
  - navigation -> pasta onde esta as rotas da aplicação
  - services -> onde e feitas as conexão com a apis
  - shared-> configuração, components, hooks que sao utilizada pela toda aplicação
  - type -> tipagem da aplicação

## Conexão com api

centralizei as a conexão usando axios, eu uso a função de interceptar as request para adicionar os header e as api key da api da marvel,
centraliza os errors de api. Separei as conexão por pasta para fica melhor organizado.

## Components

Os componentes esta no shared o que sao so de usando na aplicação todos.

- Carrossel
  os Principais component que esta em todas as telas e o usando para listar os personagem, quadrinhos series...

- Background
  e a funda das telas de detalhes dos conta com o gradientline e o foto com a imagem. usando um padrão de projeto de components para nao repedir código

- Input
  faço um componente de input para poder utilizar na aplicação contendo uma label ícones e o de mostrar senha.
