# Mesclagem de Células

Para mesclar células nas tabelas em HTML, usamos o "colspan" e o "rowspan", no mesmo lugar que usamos os seletores.

Se temos uma tabela A | B | Ø | e queremos que o B ocupe a posição do vazio, usamos:

``<td colspan="2">B</td>``

Ou seja, o &lt;td&gt;B&lt;/td&gt; ocupará duas colunas (a dele e a seguinte).

Ficaria assim:

![mesclagem-de-celulas](https://user-images.githubusercontent.com/97858145/179429200-80d78b4d-806f-4ecf-a66d-d566baeaaff9.png)

Agora, em uma tabela

1 | 2 | 3 | 4 |

5 | 6 | Ø | 7 |

e quiséssemos que o 3 ocupe a linha debaixo, usamos o rowspan, ficando assim:

``<td rowspan="2">3</td>``

Veja como ficaria:

![rowspan-mesclagem](https://user-images.githubusercontent.com/97858145/179429361-8bb73dc0-feaa-4bc1-aef0-6000d6a92797.png)

Recapitulando: "Rowspan" para mesclagem de linhas e "Colspan" para mesclagem de colunas.
