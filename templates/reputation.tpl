<!-- BEGIN:main -->
<h1>Deeds - {title} <!-- BEGIN:deedCounter -->({amount})<!-- END:deedCounter --></h1>
<nav class="sub">
  <ul>
    <!-- BEGIN:subnav -->
    <li><a href="/deeds/{page}/{tab}" <!-- BEGIN:subnav-active -->class="active"<!-- END:subnav-active -->>{name}</a></li>
    <!-- END:subnav -->
  </ul>
</nav>
<section data-tab="{tab_id}">
  [template='templates/partials/filter.tpl']
  <div class="progress-bar">
    <div class="bar" style="width: {percent}%"></div>
    <span class="percent">{percent}%</span>
  </div>
  <!-- BEGIN:faction -->
  <div class="faction" data-id="{id}">
    <h3>{faction}</h3>
    {deeds}
  </div>
  <!-- END:faction -->
</section>
<!-- END:main -->