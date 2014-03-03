<!-- BEGIN:main -->
<h1>Guild reputation calculator</h1>
<section class="tool">
  <table cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td width="300" valign="top">
        <h4>Recipes</h4>
        <small>Select the recipes that are available to you.</small>
        <div class="guild-rep-recipes">
          <div class="crafting-tier tpl"></div>
          <div class="guild-rep-recipe tpl"></div>
        </div>
      </td>
      <td valign="top">
        <h4>Current status:</h4>
        <div class="repbar current">
          <div class="title">
            <div class="selected"></div>
            <ul class="dropdown">
              <li></li>
            </ul>
          </div>
          <div class="bar"><div class="inner"></div></div>
          <div class="exp">Current exp: <input type="number" class="minexp" min="0" max="0" value="0"/> / <span class="maxexp"></span></div>
        </div>


        <h4>Goal</h4>
        <div class="repbar goal">
          <div class="title">
            <div class="selected"></div>
            <ul class="dropdown">
            </ul>
          </div>
          <div class="bar"><div class="inner"></div></div>
          <div class="exp">Exp required: <span class="minexp">0</span> / <span class="maxexp total"></span></div>
        </div>

        <h4>Result</h4>

        <h2>It takes <span class="result-days">0</span> days to get from <span class="result-level"></span> to <span class="result-goal-level"></span></h2>

        <h4>Log</h4>
        <pre id="log">
          Day 1:
          Exp from recipes: 120
          Total exp: 140320.
          Rank: Apprentice

          Day 2:
          Experience from recipes: 400
          - Small Expert (400)
          ______________________________
          Total exp: 140000
          Rank: Master
        </pre>
      </td>
    </tr>
  </table>
</section>
<!-- END:main -->