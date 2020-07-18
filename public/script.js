

<<<<<<< HEAD
    $('.header-btn-projects').click(function() {
      alert("Button clicked");
      $.ajax({
        type: "GET",
        url: "projects",
        contentType: "text/html",
        success: function(data) {
          console.log("Success!");
        }
      })    
=======
    $('.profile-img').click(function() { //Event listener for home button 
      alert("clicked image");
>>>>>>> b57b4c1f750b86b1908c4ecca3644e223c00a738
    });
