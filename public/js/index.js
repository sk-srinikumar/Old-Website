/* Shows pop menu */
function showProjectsMenu() {
    document.getElementById("projectsPopMenu").classList.toggle("show");
}

function showInfoMenu() {
    document.getElementById("infoPopMenu").classList.toggle("show");
}

/* Closes pop menu */
document.onclick = function(event){
    if (!event.target.matches('.projectsButton')) {
      var dropdowns = document.getElementsByClassName("projectsContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('.infoButton')) {
        var dropdowns = document.getElementsByClassName("infoContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
  }