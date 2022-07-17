# Como Trabalhar com Tabelas Grandes

Para trabalhar com tabelas com muitos dados, dividimos o conteúdo em três partes, igual ao grouping tags.

A anatomia ficaria assim:

```<thead>```
    ```<tr>```
        ```<th>XYZ</th>```
    ```</tr>```
```</thead>```
```<tbody>```
    ```<tr>```
        ```<td>XYZ</td>```
    ```</tr>```
```</tbody>```
```<tfoot>```
    ```<tr>```
        ```<th>XYZ</th>```
    ```</th>```
```</tfoot>```

Em suma, usamos as tags <thead>, <tbody> e <tfoot>. Dentro delas usamos os elementos já conhecidos. Depois é só estilizar na CSS.

No exemplo do site que anexei com o link, a primeira linha ("Estado" e "População") se referem ao <tfoot>. Os estados em si se referem ao <tbody>. E o total de habitantes é o <tfoot>

## Caption

A tag <caption> basicamente é um título para a tabela.

Essa tag fica dentro da tag <table> e não precisa de nenhum elemento a mais, basta usá-la e escrever o título dentro da tag e alterar como quiser na CSS.
