<!-- BEGIN:main -->
<h1>Virtues - {virtue}</h1>
<nav class="sub">
  <ul>
    <!-- BEGIN:subnav -->
    <li><a href="/virtues/{virtue}" <!-- BEGIN:subnav-active -->class="active"<!-- END:subnav-active -->>{name}</a></li>
    <!-- END:subnav -->
  </ul>
</nav>
<section>
  <!-- BEGIN:list -->
  <p class="filter">Filter: <a href="#" class="toggleAll">All</a> | <a href="#" class="toggleCompleted">Completed</a> | <a href="#" class="toggleUncompleted">Uncompleted</a></p>
  {list}
  <!-- END:list -->

  <!-- BEGIN:overview -->
  <a href="/virtues/{virtue}" class="virtue">
    <div class="icon"><img src="/resources/{virtue}-icon.png" width="50" height="50"></div>
    <div class="title">{virtue}</div>
  </a>
  <!-- END:overview -->
</section>
<!-- END:main -->