We use classes as selectors in HTML/CSS. No access to any other selectors without classes except global resets and global default rules.

Each element should be named for its purpose. For example, <header> could be named by classes: header, heading... (<header class="header"></header>).

Upper level entity is a block. It's an independant entity of page, for example, <nav class="nav-bar">, <h1 class="topic">, <article class="article">, <ul class='list'> - all are separate entities. Next to the block - the element entity. It's a part of the block, for example, <li class="list__item">, <tr class="table__row">, <td class="table__cell">. The last one is modifier - its purpose to change appearance or state for block or element entities, for example, <td class="table__cell  table__cell--red">.

As you noticed above each element could have one or more classes assigned to it. It can be used to specify element properties precisely, for example, <h1 class="topic  topic--red">.

Wrapping up - the naming format is Block\_\_Element--Modifier.

These rules derived from [BEM](http://getbem.com/naming/) notation.
