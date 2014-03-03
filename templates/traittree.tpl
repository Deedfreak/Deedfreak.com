<!-- BEGIN:main -->
<h1>Trait tree spender</h1>
<nav class="sub">
  <ul>
    <!-- BEGIN:subnav -->
    <li><a href="#" class="class-select <!-- BEGIN:subnav-active -->active<!-- END:subnav-active -->" data-class="{class}">{class}</a></li>
    <!-- END:subnav -->
  </ul>
</nav>
<section class="tool">
  <div id="class-select">
    <h3>Pick a class</h3>
    <!-- BEGIN:class-select -->
    <span class="class-select" data-class="{class}"><center><img src="/resources/{class}-icon.png" width="64" height="64"/><br/><a href="#">{class}</a></center></span>
    <!-- END:class-select -->
  </div>

  <div id="traittree">
    <div id="tree-select">
      <div class="tt-section">
        <!-- BEGIN:tree -->
        <div class="tt-tree tree-{id}" data-tree-id="{id}">
          <div class="bonuses">
            <div class="bonus icon"></div>
          </div>
          <div class="tree-skills">
            <!-- ONLY IMAGE TRIGGERS TOOLTIP? -->
          </div>
        </div>
        <!-- END:tree -->
      </div>
      <div class="tt-footer">
        <div class="tt-select-tree" data-tree-id="0"></div>
        <div class="tt-select-tree" data-tree-id="1"></div>
        <div class="tt-select-tree" data-tree-id="2"></div>
      </div>
    </div>
    <div id="tree-spend">
      <div class="tt-section">
        <div class="tt-tree-mastery">
          <div class="bonus icon"></div>
        </div>
        <!-- BEGIN:tree2 -->
        <div class="tt-tree tree-{id}" data-tree-id="{id}">
          <div class="tt-trait">
            <div class="icon"></div>
            <div class="points"><span class="spend">0</span><span class="slash">/</span><span class="max">5</span></div>
          </div>
        </div>
        <!-- END:tree2 -->
      </div>
      <div class="tt-footer">
      </div>
    </div>
  </div>
  <div id="tt-tooltip" class="toolTip"></div>
<!--
  Class selection<br/>
  Tree overview<br/>
  Points to spend (max 65) - Save button - Reset button - re-specialize

<h3>Flow</h3>
<ul>
  <li>Select class (auto select als je ingelogd bent.)</li>
  <li>Show trait trees</li>
  <li>Click tree, show points -> go on from there</li>
</ul>-->
</section>



<!-- END:main -->