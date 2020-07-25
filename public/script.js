

    $('.profile-img').click(function() { //Event listener for home button 
      alert("clicked image");
    });

    $('.projects-btn').click(function() { //Event listener for home button 
      //var contentMain = document.getElementById("#content-main")
      
      $.ajax(
      { url: "http://127.0.0.1:3000/projects",
        type: "GET",
      success: function(result){
          $("#content-main").html(result);
        }
      });
    });
