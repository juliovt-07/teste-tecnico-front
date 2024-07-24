## O Teste

Tive uma facilidade com a criação do projeto e início, focando primeiro na estrutura base como a estilização com Tailwind, a criação do Services para adicionar todos os endpoints da API, e os componentes base como o VCard focando na responsividade mobile first.
Após ter boa parte feita da listagem tive algumas muitas dúvidas sobre a API Reqres pois imaginei que seria dinâmica para uso, vendo as adições de usuário e exclusão, porém a requisição é feita e verificada nas 3 partes do CRUD (faltou o Update).
Adicionei teste unitários, algo que não tenho tanta experiência mas não acho difícil, percebi que precisaria usar o Vuex de controle de estado para ativar um Modal no App principal através de outro componente distante.

# Como rodar o projeto?

## Após clonar o repositório, Instale as dependências

```sh
npm install
```

## Caso queira verificar se os componentes principais estão renderizando antes de testar, apenas rode isso

```sh
npm run test:unit
```

## Por fim, rode o projeto

```sh
npm run dev
```

