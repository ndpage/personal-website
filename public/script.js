


    let currentdate = new Date();
    $.ajax({
      type:"GET",
      url:
      success: function(data) {
          $('.text').prepend('<p>' + data.symbol + " $" + data.price +" as of " + currentdate + '</p>');
        },
      dataType: 'json',
    });

    $('.submit-btn').click(function() {
      $.ajax({
        type: "POST",
        url: "login",
        contentType: "application/json",
        data: JSON.stringify({
          username: $("#username").val(),
          password: $("#password").val()
        }),
        success: function(data) {
          console.log('data', data);
        }
      })
    });
