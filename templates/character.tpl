<!-- BEGIN:main -->
  <p><small>All fields are required.</small></p>

  <label for="reg_name">Character name</label>
  <input type="text" name="name" id="reg_name" placeholder="Character name" required="required"/><br/><br/>

  <label for="reg_race">Character race</label><br/><br/>
  <div class="class_select">
    <label for="class-dwarf"><img width="50" height="50" src="/resources/Dwarf-icon.png"/><input type="radio" name="reg_race" value="1" id="class-dwarf" checked="checked"></label>
    <label for="class-elf"><img width="50" height="50" src="/resources/Elf-icon.png"/><input type="radio" name="reg_race" value="2" id="class-elf"></label>
    <label for="class-hobbit"><img width="50" height="50" src="/resources/Hobbit-icon.png"/><input type="radio" name="reg_race" value="3" id="class-hobbit"></label>
    <label for="class-man"><img width="50" height="50" src="/resources/Race_of_Man-icon.png"/><input type="radio" name="reg_race" value="4" id="class-man"></label>
  </div>
  <br/><br/>

  <label for="reg_class">Character class</label><br/><br/>
  <div class="class_select">
    <label for="class-burglar"><img width="50" height="50" src="/resources/Burglar-icon.png"/><input type="radio" name="reg_class" value="1" id="class-burglar" checked="checked"></label>
    <label for="class-captain"><img width="50" height="50" src="/resources/Captain-icon.png"/><input type="radio" name="reg_class" value="2" id="class-captain"></label>
    <label for="class-champion"><img width="50" height="50" src="/resources/Champion-icon.png"/><input type="radio" name="reg_class" value="3" id="class-champion"></label>
    <label for="class-guardian"><img width="50" height="50" src="/resources/Guardian-icon.png"/><input type="radio" name="reg_class" value="4" id="class-guardian"></label>
    <label for="class-hunter"><img width="50" height="50" src="/resources/Hunter-icon.png"/><input type="radio" name="reg_class" value="5" id="class-hunter"></label>
    <label for="class-lore-master"><img width="50" height="50" src="/resources/Lore-master-icon.png"/><input type="radio" name="reg_class" value="6" id="class-lore-master"></label>
    <label for="class-minstrel"><img width="50" height="50" src="/resources/Minstrel-icon.png"/><input type="radio" name="reg_class" value="7" id="class-minstrel"></label>
    <label for="class-rune-keeper"><img width="50" height="50" src="/resources/Rune-keeper-icon.png"/><input type="radio" name="reg_class" value="8" id="class-rune-keeper"></label>
    <label for="class-warden"><img width="50" height="50" src="/resources/Warden-icon.png"/><input type="radio" name="reg_class" value="9" id="class-warden"></label>
    </div>
  <br/><br/>

  <label for="reg_world">Character world</label>
  <select name="reg_world" id="reg_world">
    <option value="Arkenstone">Arkenstone</option>
    <option value="Brandywine">Brandywine</option>
    <option value="Crickhollow">Crickhollow</option>
    <option value="Dwarrowdelf">Dwarrowdelf</option>
    <option value="Eldar">Eldar</option>
    <option value="Elendilmir">Elendilmir</option>
    <option value="Evernight">Evernight</option>
    <option value="Firefoot">Firefoot</option>
    <option value="Gilrain">Gilrain</option>
    <option value="Gladden">Gladden</option>
    <option value="Imladris">Imladris</option>
    <option value="Landroval">Landroval</option>
    <option value="Laurelin">Laurelin</option>
    <option value="Meneldor">Meneldor</option>
    <option value="Nimrodel">Nimrodel</option>
    <option value="Riddermark">Riddermark</option>
    <option value="Silverlode">Silverlode</option>
    <option value="Snowbourn">Snowbourn</option>
    <option value="Vilya">Vilya</option>
    <option value="Windfola">Windfola</option>
    <option value="Withywindle">Withywindle</option>
    <option value="Anduin">Anduin</option>
    <option value="Belegaer">Belegaer</option>
    <option value="Gwaihir">Gwaihir</option>
    <option value="Maiar">Maiar</option>
    <option value="Morthond">Morthond</option>
    <option value="Vanyar">Vanyar</option>
    <option value="Estel">Estel</option>
    <option value="Sirannon">Sirannon</option>
  </select>
<!-- END:main -->