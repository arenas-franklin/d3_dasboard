// Definido os dados
const data = [30, 86, 168, 281, 303, 365];

//configurando as dimensões do SVG
const width = 600;
const height = 400;
const barWidth = width / data.length;

// Selecionando o SVG e definindo a escala
const svg = d3.select("svg");

//Escala para o eixo Y
const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height, 0]);



//adicionar as barras
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr('class', "bar")
    .attr('x',(d,i)=> i * barWidth )
    .attr('y', d =>yScale(d))
    .attr('width',barWidth - 1 )
    .attr("height", d => height - yScale(d));


// Adicnionar texto (Valores nas barras)
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i)=> i * barWidth + (barWidth/2))
    .attr("y", d => yScale(d) - 5)
    .attr("text-anchor", "middle")
    .text(d => d);

