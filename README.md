# FocusTime 🕒 - Sistema Pomodoro & Gestão de Tarefas

> **STATUS: EM DESENVOLVIMENTO**

FocusTime é um sistema de produtividade pessoal que combina a técnica Pomodoro
com a gestão de tarefas. O projeto nasceu da necessidade pessoal de uma
ferramenta robusta e eficiente para gerenciar meu tempo e organizar as tarefas
durante os estudos para o vestibular.

## ✨ Funcionalidades Principais

- **Ciclos Pomodoro Integrados:** Gerencie seus períodos de foco e descanso
  (Pomodoro, Pausa Curta, Pausa Longa).
- **Gestão de Tarefas (To-Do List):** Crie, edite e acompanhe o status de suas
  tarefas.
- **Tema Claro:** Opção de alternância para um visual mais confortável em
  ambientes bem iluminados.
- **Alta Performance com Web Workers:** O cronômetro e a lógica de tempo são
  executados em um _Web Worker_ dedicado para garantir precisão e evitar
  travamentos da interface (thread principal).
- **Persistência de Dados (Cache):** As tarefas são armazenadas em cache local
  para que você não perca seu progresso ao recarregar a página.

## 💻 Tecnologias Utilizadas

Este projeto está sendo desenvolvido utilizando um _stack_ moderno e
performático:

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Adiciona tipagem estática ao JavaScript, melhorando a
  escalabilidade e a manutenção do código.
- **Vite:** Ferramenta de _build_ extremamente rápida, otimizando o
  desenvolvimento.
- **Web Workers:** Para a execução em _background_ da lógica do cronômetro.

## 🚀 Como Executar Localmente (Em Desenvolvimento)

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 16+) e o npm ou
yarn instalados em sua máquina.

### Passos

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/gabz-roberto/focustime.git](https://github.com/gabz-roberto/focustime.git)
   cd focustime

   ```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor**

```bash
npm run dev
# ou
yarn dev
```
