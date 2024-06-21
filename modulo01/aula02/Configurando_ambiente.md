# Aula 02 - Configurando o Ambiente de Desenvolvimento

#### Objetivos

* Instalar Node.js e npm.
* Configurar um projeto básico com D3.js.
* Entender a estrutura de arquivos e dependências.

#### Conteúdo

##### 1. Instalando Node.js e npm

**Node.js** é uma plataforma que permite executar JavaScript no servidor. O **npm** (Node Package Manager) é um gerenciador de pacotes para Node.js, que facilita a instalação e gerenciamento de bibliotecas JavaScript, incluindo D3.js.

**Passo a Passo:**

1. **Baixar e Instalar Node.js:**

   * Acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org/)
   * Baixe o instalador para o seu sistema operacional e siga as instruções de instalação.
2. **Verificar Instalação:**

   * Abra o terminal (ou prompt de comando) e execute os seguintes comandos para verificar se a instalação foi bem-sucedida:

     ```bash
     node - v
     npm -v
     ```

     Estes comandos deve, retornar a versão instalada no NOde.js e do nom, respectivamente.

##### 2. Configurando um Projeto Básico com D3.js

**Passo a Passo:**

1. **Criar uma Pasta paa o Projeto:**

   * No terminal, navegue até o diretório onde deseja criar o projeto e execute:

   ```bash
   mkdir d3-dasboard
   cd d3-dasboard
   ```
2. **Inicializar o PRojeto com npm:**

   - Ainda no terminal, execute:

     ```bash
     npm init -y
     ```
   - Isso criará arquivo 'package.json' com as configurações básicas do projeto
3. **Estrutura de Arquivvos e Dependências**

   ```plaintext
   d3-dasboard/
   |
   |--- index.html
   |---package.json
   |---node_mosules.json
   |---src/
   |    |___script.js
   |_____styles/
      	|_____ styles.css
   ```
