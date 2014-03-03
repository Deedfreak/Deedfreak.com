<!-- BEGIN:main -->
<h1>Register</h1>
<section>
 <form method="post">
  <!-- BEGIN:error -->
  <h4 color="red">Not all fields were filled out correctly.</h4>
  <!-- END:error -->

  <h2>Account</h2>
  <p><small>All fields are required. DO NOT use your lotro account data<sup>*</sup>. A level 95 character is assumed.</small></p>

  <label for="reg_username">Username</label>
  <input type="text" name="username" id="reg_username" placeholder="Username" required="required"/><br/><br/>

  <label for="reg_password">Password</label>
  <input type="password" name="password" id="reg_password" placeholder="Password" required="required"/><br/><br/>


  <h2>Main character</h2>

  [template='templates/character.tpl']

  <br/><br/><br/>

  <input type="submit" value="Create account">
 </form>
 <br/><br/>
 <small><sup>*</sup> Even though all password are stored safely it is not wise to use the same data on this website as you are for the game.</small>
</section>
<!-- END:main -->