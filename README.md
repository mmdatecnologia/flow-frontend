# JCPM Checkout Front

## Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] some_task

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão `nodejs 16`
  - sugerimos o uso do `nvm`
- Você instalou a versão mais recente de `yarn`
- Você tem uma máquina `<Linux / Mac>`

## 🚀 Clonando e Instalando `<checkout-frontend>`

Para clonar o repositorio `<checkout-frontend>`, siga estas etapas:

```bash
git clone git@gitlab.com:jcpm-checkout/frontend.git
```

Para instalar as dependencias `<checkout-frontend>`, siga estas etapas:

```bash
yarn
```
## ⚙️ Configurando ambiente `<checkout-frontend>`

---

## ☕ Usando `<checkout-frontend>`

Para usar `<checkout-frontend>`, siga estas etapas:

```bash

# development
$ yarn dev

```

## Testes

```bash
# unit tests
$ yarn test:watch

# test coverage
$ yarn test:cov

# e2e tests cypress local
$ yarn test:cypress

# e2e tests cypress with server
$ yarn test:e2e

# e2e tests cypress with server
$ yarn test:e2e:headless


```

## Gerando arquivo de change log

```bash
auto-changelog --template changelog-template.hbs -p -u --commit-limit false 
```

ou

```bash
yarn changelog 
```

- auto-changelog — comando node module
- --template changelog-template.hbs — parâmetro para configurar um arquivo de padrão para suas mensagens de changelog
- -p — use a versão SEMVER do package.json como a versão mais recente
- -u — inclui mudanças não lançadas no changelog
- --commit-limit false — remova o limite sobre o número de commits por lançamento no changelog (padrão: 3)
