![Playwright Tests](https://github.com/eapereira87/playwright-web-tests/actions/workflows/playwright.yml/badge.svg?branch=master)

# Playwright Web Tests

Suite de automação web com Playwright usando o SauceDemo como aplicação pública de referência.

## Tecnologias
- Node.js
- Playwright
- JavaScript

## Aplicação utilizada
- https://www.saucedemo.com

## Versão atual
v1.2.0

## Estrutura atual
- Page Object Model
- Fixtures para dados de teste
- Suite smoke
- Suite regression
- Execução multi-browser
- Relatório HTML nativo do Playwright
- Execução no GitHub Actions

## Cenários atuais
- Login com sucesso
- Login inválido
- Validação de carregamento do inventário

## Instalação
npm install
npx playwright install

## Execução
npx playwright test

Rodar apenas smoke:
npm run test:smoke

Rodar apenas regression:
npm run test:regression

## Relatório
npx playwright show-report
