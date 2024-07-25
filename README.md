## O Teste

Iniciei o teste focando primeiro na estrutura base como a estilização com Tailwind, a criação do Services para adicionar todos os endpoints da API, e os componentes base como o VCard focando na responsividade mobile first.
Por conta da limitação da API reqres, as alterações são observadas pelas requisições e mensagens na página apenas.
Adicionei teste unitários para confirmação nas renderizações dos componentes principais, foi adicionado o Vuex de controle de estado para ativar um Modal no App principal através de outro componente distante.
DashBoard foi criada com ApexCharts contendo um gráfico simples estático e outro com informações dinâmicas vindo da API economia.awesomeapi.

Obs: para visualização prévia, foi feito o deploy no Vercel:
[link](https://teste-tecnico-front-livid.vercel.app)

# Como rodar o projeto?

## Após clonar o repositório, entre na pasta /Vue

```sh
cd Vue
```

## Agora instale as dependências

```sh
npm install
```

## Por fim, rode o projeto

```sh
npm run dev
```

## Caso queira verificar se os componentes principais estão renderizando antes de testar, apenas rode isso

```sh
npm run test:unit
```
