# Tabelas Responsivas

Para criarmos uma tabela responsiva, usamos uma propriedade na CSS chamada "overflow".

Mas antes disso precisamos envelopar a nossa tabela (&lt;table&gt;) em uma div container.

Feito isso, basta vermos para onde a tabela está "vazando" e taparmos o buraco.

Isto é, se a tabela estiver muito longa na horizontal, ela precisa de responsividade na horizontal, mas sela estiver muito larga na vertical, ela precisa de responsividade na vertical.

Tabela larga na horizontal:

``div#container{``<br>
``overflow-x: auto;``<br>
``}``

Tabela larga na vertical:

``div#container{``<br>
``overflow-y: auto;``<br>
``}``

Minimize a tela da [tabela do site]() e teste. Uma barra de scroll será criada para a tabela, mas o site continuará normal.
