# Criando Tabelas em HTML

## Hierarquia de Tabelas

Para criar tabelas em HTML, antes precisamos entender a  hierarquia dos elementos, senão os dados aparecerão em lugares aleatórios e bagunçará o layout.

Table = Tabela ><br>
Table Row (&lt;tr&gt;) = Linha de tabela ><br>
Table Header (&lt;th&gt;) = Cabeçalho de Tabela ><br>
Table Data (&lt;td&gt;) = Dados de Tabela.

## Criando bordas na Tabela

A tabela começa sem nada em volta, somente com o conteúd, isso significa que temos que criar a borda na CSS.<br><br>

Para isso, usamos o border. O ```border: 1px solid black;``` no td.<br><br>

A imagem ficaria assim:<br>
img<br><br>

Quando criamos a tabela, ela fica um pouco separada entre os td's.<br><br>

Isso acontece porque o border-collapse padrão da **tabela** é separate.<br><br>

Ao usarmos ```border:-collapse: collapse;```, todos os dados da tabela ficam ainda mais juntos, como se esttivéssemos criando uma tabela no Excel mesmo.<br><br>

Veja na imagem abaixo:<br>
img2