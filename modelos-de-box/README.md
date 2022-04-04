# Entendendo a anatomia das caixas
 As caixas em HTML são os espaços que os textos são inseridos.<br>
 Elas são divididas por camadas, então imagine:<br>
 Uma palavra em HTML está cercada por altura (height) e largura (width). Essa é a primeira camada.<br><br>
 Altura e largura estão formando uma borda (border). Essa é a segunda.<br><br>
 O espaçamento da borda para dentro se chama padding. Essa é a terceira camada.<br><br>
 O margin é como se fosse o padding externo; fica da borda para fora<br>
 É a última camada e se refere ao espaço externo à caixa de texto.<br><br>
 Por exemplo: se criamos duas box de texto, elas ficarão grudadas uma na outra. O margin espaça elas.<br><br>
 Mas se quisermos algo entre a borda e o margin, isso se chama outline e sempre fica fora da borda e dentro da margin. É útil para quando queremos criar um tracejado em volta do tracejado da borda.<br><br>
 Ficou confuso? Na última seção, em "Verificando a anatomia das caixas:", ficará mais claro de como visualizar melhor o que foi descrito acima.<br><br>

 **Sequenciação:**<br><br>

 texto < height and width < padding < border < outline < margin.
 
 ## Na CSS:

  ### Height e Width

   ```height: Xpx;```<br>
   ```width: Xpx;```

  ### Border

   ```border-width: 10px;```<br>
   ```border-color: lightgoldenrodyellow;```<br>
   ```border-style: inset;```<br><br>

   **Shorthand de border:**<br><br>

   Tem de estar nessa ordem:<br><br>

   ```border: width style color;```

  ### Padding

   ```padding-top: 10px;```<br>
   ```padding-right: 10px;```<br>
   ```padding-bottom: 10px;```<br>
   ```padding-left: 10px;```<br><br>

   **Shorthand de padding:**<br><br>
   Tem de estar nessa ordem: padding-top &rightarrow; padding-right &rightarrow; padding-bottom &rightarrow; padding-left<br><br>
   <strong>Se o padding for de medidas iguais para todos os lados, padding: 10px 10px 10px 10px; basta usar o "padding: 10px;"</strong><br><br>

   ```padding: 10px;```

  ### Margin

   ```margin-top: 20px;```<br>
   ```margin-right: 20px;```<br>
   ```margin-bottom: 40px;```<br>
   ```margin-left: 20px;```<br><br>

   **Para centralizar caixas:**<br><br>
   ```margin: auto;```<br><br>

   **Shorthand de margin:**<br><br>
   Ordem necessária: Igual ao padding, o magin também gira no sentido horário:<br>
   margin-top &rightarrow; margin-right &rightarrow; margin-bottom &rightarrow; margin-left.<br><br>
   Seguindo o exemplo acima:<br><br>

   ```margin: 20px 20px 40px 20px;```<br><br>

   **Para centralizarmos a box com shorthand margin:**<br><br>
   margin: Xpx auto Xpx auto;

  ### Outline

   ```outline-width: 5px;```<br>
   ```outline-style: dashed;```<br>
   ```outline-color: salmon;```<br><br>

   **Shorthand de outline:**<br><br>
   Ordem necessária: Igual ao border, o shorthand outline deve estar nessa ordem:<br>
   ```outline: width style color;```<br><br>

   Exemplo com base no outline acima:<br><br>

   ```outline: 5px dashed salmon;```

 ## Tipos de box:
  Todas as caixas possuem a sequenciação descrita acima, mas elas ainda se dividem em duas.
  ### Box-level
   São as tags que ocupam uma linha inteira, de ponta a ponta, dentro da box do código HTML.<br><br>
   As mais populares são: &lt;div&gt;, &lt;h1-h6&gt;, &lt;p&gt;, &lt;main&gt;, &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;form&gt; e &lt;video&gt;
  ### Inline-level
   São as tags que ocupam somente o espaço necessário dentro da box do código HTML.<br><br>
   Por isso usamos span para customizar uma palavra ou frase dentro de um parágrafo, por exemplo. Enquanto uma é box-level, a outra é inline-level.<br><br>
   Um button não ocupa toda a linha, assim como o label, portanto é possível que na mesma linha haja texto, box e mais texto. Em uma box-level isso não é possível. Aí está a diferença dos dois tipos de box.<br><br>
   As mais populares são: &lt;span&gt;, &lt;a&gt;, &lt;code&gt;, &lt;label&gt;, &lt;button&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;small&gt;, &lt;sup&gt;, &lt;sub&gt; e &lt;input&gt;

# Verificando a anatomia das caixas:
 Com o nosso código aberto dentro do navegador, iremos abrir o inspecionar e clicar na tag que queremos destrinchar.<br>
 Ser-nos-á mostrado todas as configurações de CSS daquela tag.<br><br>
 Ainda no inspecionar, conseguimos alterar a CSS e ver em tempo real as alterações que estão sendo feitas, e nada disso alterará o código principal, basta dar um F5 para retornar às configurações primárias.<br><br>
 **O outline não aparece na caixa do inspecionar.**