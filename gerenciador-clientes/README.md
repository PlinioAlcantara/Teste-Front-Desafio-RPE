# Frontend - Desafio Técnico - Evoluir

## Visão Geral

Este repositório contém a implementação do frontend para o sistema de gerenciamento de clientes e faturas, desenvolvido utilizando **React**, **Vite**, **CSS** e **JavaScript**. A interface permite visualizar os clientes, suas faturas e registrar pagamentos, de acordo com as funcionalidades definidas no desafio técnico.

## Funcionalidades

- **Listagem de Clientes**: Exibe os dados dos clientes, como nome, CPF, idade, status de bloqueio e limite de crédito.
- **Faturas do Cliente**: Exibe as faturas de um cliente, permitindo registrar pagamentos.
- **Registro de Pagamentos**: Permite registrar o pagamento de faturas não pagas ou atrasadas.

## Tecnologias Utilizadas

- **React**
- **Vite**
- **CSS**
- **JavaScript**
- **React Icons** (para ícones)
- **Fetch API** (para comunicação com o backend)

## Como Executar

### Com Docker

Este projeto pode ser facilmente executado utilizando Docker. Siga as etapas abaixo para executar a aplicação:

1. Clone este repositório.
2. Navegue até o diretório onde o arquivo `docker-compose.yml` está localizado.
3. Execute o comando:
   ```bash
   docker-compose up --build

### Sem Docker

1. Clone este repositório.

2. Navegue até o diretório do frontend.

3. Instale as dependências com o comando:
```bash

npm install

```
Inicie a aplicação com o comando:

```bash

npm run dev

```
Isso irá iniciar o Vite no navegador na porta 4173 (configurada no arquivo vite.config.js).

### Arquitetura

-**React**: Utilizado para a criação da interface interativa, com componentes para listagem de clientes, faturas e pagamento.

-**Vite**: Usado para empacotamento e desenvolvimento rápido.

-**Modal de Pagamento**: Modal interativo para confirmar o pagamento de faturas.

-**Hooks Personalizados**: Uso do hook useClientes para buscar e gerenciar dados de clientes.

### Vite config

As configurações do vite estão no arquivo **vite.config.js**

### Dockerfile

O Dockerfile está configurado para rodar o aplicativo dentro de um container. O comando para construir a imagem do Docker é:

```bash

docker build -t gerenciador-de-clientes-frontend .

```
### Melhorias

**UI/UX**: Melhorar a interface do frontend com mais funcionalidades de interação e usabilidade.

**Funcionalidade de Edição de Clientes**: Permitir que o usuário edite informações de clientes diretamente da interface.

**Notificações**: Implementar notificações para alertar o usuário sobre sucesso ou falhas ao registrar pagamentos.


### Observações

Assim como dito no repositório do back, passei por probelmas no docker, na hora de fazer rodar lá, eu não consegui fazer rodar os dois containers junto de forma que o front consumisse a API e exibisse as informações, sem o docker está funcionando trnaquilo, mas quando se usa o docker, da erro.
