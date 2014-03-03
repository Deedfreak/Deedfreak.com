<!-- BEGIN:main -->
<h1>Titles</h1>
<nav class="sub">
  <ul>
    <!-- BEGIN:subnav -->
    <li><a href="/titles/{section_link}" <!-- BEGIN:subnav-active -->class="active"<!-- END:subnav-active -->>{section}</a></li>
    <!-- END:subnav -->
  </ul>
</nav>
<section>
  <p>Coming soon :-)</p>
  <!-- BEGIN:list -->
  <p>Filter: <a href="#" class="toggleAll">All</a> | <a href="#" class="toggleCompleted">Completed</a> | <a href="#" class="toggleUncompleted">Uncompleted</a></p>
  {list}

  <!-- END:list -->
  <!-- BEGIN:overview -->
  <a href="/titles/{section_link}" class="virtue">
    <div class="icon"><img src="/resources/deed-icon-1.png" width="50" height="50"></div>
    <div class="title">{section}</div>
  </a>
  <!-- END:overview -->
</section>
<!-- END:main -->