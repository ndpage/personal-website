

    $('.profile-img').click(function() { //Event listener for home button 
      alert("clicked image");
    });

    $('.projects-btn').click(function() { //Event listener for home button 
      alert("Pressed the button");

      var contentMain = document.getElementById("content-main")

          contentMain.innerHTML = 
            "<div> <h1>This is the projects page</h1></div>"
    });
    