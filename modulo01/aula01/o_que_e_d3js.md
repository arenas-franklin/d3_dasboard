# Aula 1: O que é D3.js?

**Objetivos**
 - Entender o que é D3.js e suas principais características.
- Comparar D3.js com outras bibliotecas de visualização de dados.
- Conhecer aplicações e casos de uso do D3.js.

**Conteúdo**

## 1. Introdução ao D3.js
D3.js (Data-Driven Documents) é uma biblioteca JavaScript poderosa para manipulação de documentos baseados em dados. Ela permite criar visualizações de dados dinâmicas e interativas utilizando padrões web como SVG, HTML e CSS.

**Principais Características:**

 - Flexibilidade: Permite criar uma ampla variedade de visualizações personalizadas.
 - Interatividade: Facilita a adição de interatividade aos gráficos.
 - Desempenho: Manipula grandes conjuntos de dados de forma eficiente.
 - Compatibilidade: Integra-se bem com outras tecnologias web.

## 2. Comparação com Outras Bibliotecas
 - Chart.js: Ótima para gráficos simples e rápidos, mas menos flexível que D3.js.
 - Highcharts: Muito fácil de usar com gráficos prontos, porém menos personalizável.
 - D3.js: Maior curva de aprendizado, mas oferece controle total sobre a visualização.

## 3. Aplicações e Casos de Uso
 - Dashboards interativos
 - Gráficos e relatórios de dados em tempo real
 - Mapas interativos
 - Visualização de dados científicos



----

## Explicação do Código
exemplo( arquivo script.js)

**1 .Definindo os Dados:**

Criamos um array de dados que será usado para desenhar as barras.

**2. Configurando as Dimensões do SVG:**

Definimos a largura e a altura do gráfico e calculamos a largura de cada barra com base na quantidade de dados.

**3. Selecionando o SVG:**

Utilizamos o d3.select para selecionar o elemento <svg>.
Escala para o Eixo Y:

Definimos uma escala linear para o eixo Y, mapeando os valores dos dados ao espaço disponível no SVG.

**4. Adicionando as Barras:**

Utilizamos selectAll, data, enter, e append para criar um retângulo (rect) para cada item no array de dados.
Atribuímos atributos de posição e tamanho para cada barra.

**5. Adicionando Texto nas Barras:**

Adicionamos texto aos gráficos para mostrar os valores correspondentes em cima de cada barra.