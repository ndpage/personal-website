

    $('.btn-home').click(function() {
      
      $.ajax({
        type: "GET",
        url: "hello-world",
        contentType: "text/plain",
        success: function(data) {
          $('.footer-text').text('Hello, World!')
          console.log('Success!');
        }
      })    
    });
