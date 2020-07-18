

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
    });
