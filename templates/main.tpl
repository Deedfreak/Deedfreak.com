<!-- BEGIN:main -->
<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
  <head>
    <meta charset="utf-8">
    <title>Deed Freak <!-- BEGIN:title --> - {title}<!-- END:title --></title>
    <link rel="stylesheet" type="text/css" href="/resources/main.css" />
    <link rel="stylesheet" type="text/css" href="/resources/traittree.css" />
    <link rel="stylesheet" type="text/css" href="/resources/guildrepcalc.css" />
    <link rel="shortcut icon" type="image/png" href="/resources/deed-icon-5.png">
  </head>
  <body itemscope itemtype="http://schema.org/WebPage" class="{loggedin}">
    <div id="header">
      <header>
        <nav class="main">
          <ul class="navmenu nav">
            <li class="dropdown"><a href="/">Deed Freak</a>
              <ul>
                <li><a href="/about">About Deed Freak</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="/deeds">Deeds</a>
              <ul>
              <!-- BEGIN:deedsub-nav -->
                <li><a href="/deeds/{link}">{name}</a></li>
              <!-- END:deedsub-nav -->
              </ul>
            </li>
            <li class="dropdown"><a href="#">Lists</a>
              <ul>
                <li><a href="/virtues">Virtues</a></li>
                <li><a href="/stable">Stable</a></li>
                <li><a href="/titles">Titles</a></li>
                <!--li><a href="/big+battles">Big battles</a></li-->
                <!--li><a href="/recipes">Recipes</a></li-->
              </ul>
            </li>
            <li class="dropdown"><a href="#">Tools</a>
              <ul>
                <!--li><a href="/tools/virtue+composer">Virtue composer</a></li>
                <li><a href="/tools/LI+point+spender">LI point spender</a></li-->
                <!--li><a href="/tools/trait-tree-spender">Trait tree spender</a></li-->
                <!--li><a href="/tools/BB+tree+spender">Big battle tree spender</a></li-->
                <li><a href="/tools/guild-rep-calculator">Guild rep calculator</a></li>
                <!--li><a href="/tools/Skirmish+soldier+spender">Skirmish soldier spender</a></li-->
              </ul>
            </li>
            <!-- BEGIN:notloggedin -->
            <li><a href="/register">Register</a></li>
            <li><a href="/login" class="login">Login</a></li>
            <!-- END:notloggedin -->
            <!-- BEGIN:loggedin -->
            <li class="dropdown"><a href="/overview" class="character {class}">{charname}</a>
              <ul class="character-list">
                <!-- BEGIN:characterlist -->
                <li><a href="/character/{id}" class="{class}"><img src="/resources/{class}-icon.png" width="30" height="30"/> {charname}</a></li>
                <!-- END:characterlist -->
                <li><a href="/add-character">Add character</a></li>
                <li><a href="/logout">Log out</a></li>
              </ul>
            </li>
            <!-- END:loggedin -->
          </ul>
        </nav>
      </header>
    </div>
    <div id="content">
      {content}
      <aside>
        <div class="ad">
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <!-- COMPLETIONIST -->
          <ins class="adsbygoogle"
               style="display:inline-block;width:160px;height:600px"
               data-ad-client="ca-pub-4626086352659849"
               data-ad-slot="5453383810"></ins>
          <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </aside>
    </div>
    <footer>
      <div id="footer">
        <div class="block">
          <h3>Deeds</h3>
          <ul>
            <!-- BEGIN:deedsub-nav -->
            <li><a href="/deeds/{link}">{name}</a></li>
            <!-- END:deedsub-nav -->
          </ul>
        </div>
        <div class="block">
          <h3>Other features</h3>
          <ul>
            <li><a href="/virtues">Virtues</a></li>
            <li><a href="/stable">Stable</a></li>
            <li><a href="/titles">Titles (Coming soon)</a></li>
          </ul>
        </div>
        <div class="block">
          <h3>About LOTRO Deed Freak</h3>
          <ul>
            <li><a href="/about">About</a></li>
          </ul>
          <br/><br/>
          <h3>Account</h3>
          <ul>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div class="block">
          <h3>Tools</h3>
          <ul>
            <!--li><a href="/tools/virtue+composer">Virtue composer</a></li>
            <li><a href="/tools/LI+point+spender">LI point spender</a></li-->
            <li><a href="/tools/trait-tree-spender">Trait tree spender</a></li>
            <!--li><a href="/tools/BB+tree+spender">Big battle tree spender</a></li-->
            <li><a href="/tools/guild-rep-calculator">Guild rep calculator</a></li>
            <!--li><a href="/tools/Skirmish+soldier+spender">Skirmish soldier spender</a></li-->
          </ul>
        </div>
        <br/><br/><br/>
        <div align="center"><small style="color: #777">LOTRO Deed Freak is not an official tool for the game "The Lord of the Rings Online"!<br/><br/>

All rights reserved by The Saul Zaentz Company, d/b/a Middle-earth Enterprises (SZC), Warner Bros and Turbine.<br/>
All trademarks are the property of their respective owners. </small></div>
        <!--form action="/search" method="get">
          <input type="text" name="deed" placeholder="Search for deeds">
        </form-->
      </div>
    </footer>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="/js/traittree.js"></script>
  <script type="text/javascript" src="/js/guildrep_calc.js"></script>
  <!--script src="/js/hunter.js"></script>
  <script src="/js/rip.js"></script-->
  <script>
  $(".loggedin .deed").on("click", function(e){
    $this = $(this);

    $url = "/complete/deed?"+$.now();
    if($this.hasClass("mount")) {
      $url = "/complete/mount?"+$.now();
    }
    
    $.post($url, {complete: !$this.hasClass("completed"), id: $this.attr("data-deed-id"), include: $this.attr("data-include"), exclude: $this.attr("data-exclude")}, function(d) {
      if(d.success) {
        $this.toggleClass("completed");
        if($this.attr("data-include") && $this.hasClass("completed")) {
          $include = $this.attr("data-include").split(",");
          $.each($include, function(k, v) {
            $(".deed[data-deed-id="+v+"]").addClass("completed");
          })
        }
        if($this.attr("data-exclude") && !$this.hasClass("completed")) {
          $exclude = $this.attr("data-exclude").split(",");
          $.each($exclude, function(k, v) {
            $(".deed[data-deed-id="+v+"]").removeClass("completed");
          })
        }
        updateProgressBar();
      }
    }, "json");
  });

  $(".loggedin .toggleUncompleted").on("click", function(e) {
    $(".deed").show();
    $(".deed.completed").hide();
    return false;
  });

  $(".loggedin .toggleCompleted").on("click", function(e) {
    $(".deed").hide();
    $(".deed.completed").show();
    return false;
  });

  $(".loggedin .toggleAll").on("click", function(e) {
    $(".deed").show();
    return false;
  })

  $(".loggedin .completeTab").on("click", function(e) {
    $this = $(this);
    $.post("/complete/deed_tab?"+$.now(), {id: $this.parents("section").attr("data-tab")}, function(d) {
      if(d.success) {
        $(".deed").addClass("completed");
        updateProgressBar();
      }
    }, "json");

  })

  $(".deed").on("mouseenter", function(e) {
    $this = $(this);
    if($this.hasClass("completed")) {
      $include = $this.attr("data-exclude").split(",");
    } else {
      $include = $this.attr("data-include").split(",");
    }
    $.each($include, function(k, v) {
      $(".deed[data-deed-id="+v+"]").addClass("include");
    })
  });

  $(".deed").on("mouseleave", function(e) {
    $(".deed.include").removeClass("include");
  })

  function updateProgressBar() {
    $total = $(".deed").length;
    $completed = $(".deed.completed").length;
    percent = Math.round(100/$total*$completed);
    $(".progress-bar .bar").css({width: percent+"%"});
    $(".percent").html(percent+"%");
  }
  </script>

  </body>
</html>
<!-- END:main -->