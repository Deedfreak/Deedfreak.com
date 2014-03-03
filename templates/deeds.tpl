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
  <!-- BEGIN:list -->
  [template='templates/partials/filter.tpl']
  <div class="progress-bar">
    <div class="bar" style="width: {percent}%"></div>
    <span class="percent">{percent}%</span>
  </div>
  {list}

  <!-- BEGIN:map --><a href="{map}" target="_blank"><img src="{map}" width="100%"></a><!-- END:map -->
  <!-- END:list -->
  <!-- BEGIN:overview -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td width="50%" class="multi">
        <!-- BEGIN:tab -->
        <div class="overview-tab">
          <a href="/deeds/{page_link}/{tab_link}">{name} ({completed}/{total})</a>
          <div class="progress-bar">
            <div class="bar" style="width: {percent}%"></div>
            <span class="percent">{percent}%</span>
          </div>
        </div>
        <!-- END:tab -->
      </td>
      <td class="multi">
        <h3>Deed category breakdown</h3>
        <ul class="type-sum">
          <!-- BEGIN:breakdown -->
          <li class="icon-{id}">
            {label} deeds ({completed}/{total})
            <span style="width: {total_percent}%"></span>
            <span style="width: {completed_percent}%; height:4px;"></span>
          </li>
          <!-- END:breakdown -->
        </ul>
      </td>
    </tr>
  </table>
  <!-- END:overview -->

<!-- BEGIN:page_map -->
<div class="big_map">
  <img src="/resources/{map}" width="100%"/>
  <!-- BEGIN:tabs -->
  <a href="/deeds/{page_link}/{tab_link}" class="big_map_tab" style="left: {x}%; top: {y}%"><span class="percent">{percent} %</span><br/><small>[{completed}/{total}]</small><br/><span class="name">{name}</span></a>
  <!-- END:tabs -->
</div>
<!-- END:page_map -->
</section>
<!-- END:main -->