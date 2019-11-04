$(document).ready(function () {
   $("#designLogo").click(function () {
      $("#inlineDesign").hide();
      $(".toggleDesignLogo").show();
   });
   $(".toggleDesignLogo").click(function () {
      $(".toggleDesignLogo").hide();
      $("#inlineDesign").show();
   });

   $("#devLogo").click(function () {
      $("#inlineDev").hide();
      $(".toggleDevLogo").show();
   });
   $(".toggleDevLogo").click(function () {
      $(".toggleDevLogo").hide();
      $("#inlineDev").show();
   });

   $("#productLogo").click(function () {
      $("#inlineProduct").hide();
      $(".toggleProductLogo").show();
   });
   $(".toggleProductLogo").click(function () {
      $(".toggleProductLogo").hide();
      $("#inlineProduct").show();

   });
   $(document).ready(function () {
      $('.work1Logo').hover(function () {
         console.log('hovering')
         $("#work1Text").show();
      });
   });
});
console.log('it works')
$(document).ready(function () {
   $('.submit').click(function (event) {
      event.preventDefault();
      console.log('clicked button');
      var name = document.getElementById('nameInput').value;
      var email = document.getElementById('exampleFormControlInput1').value;
      var message = document.getElementById('messageInput').value;
      var statusElm = document.getElementById('status');

      if (email.length > 5 && email.includes('@') && email.includes('.')) {
         console.log("email valid")
      } else {
         console.log("email invalid")
      }
      if (name.length > 2) {
         console.log(name);
      } else {
         console.log('name invalid')
      }
      if (message.length > 2) {
         document.getElementById('status').innerText = "Thank you for your message!"
      } else {
         document.getElementById('status').innerText = "Null"
      }
   });

});
$(document).ready(function () {
   $('#subscribeForm').bind('.submit', function () {
      event.preventDefault();
      var name = $('#nameInput').val;
      var email = $('#exampleFormControlInput1').val;
      var message = $('#messageInput').val;
      var url = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=df458b36b6"
      "id=98190a3419c9eb27281a8f3d59840865-us20 " +
      "&email[email]=" + email +
         "&merge_vars[NAME]=" + name +
         "&merge_vars[NAME]=" + message +
         "&send_welcome=false";

      $.ajax({
         type: "POST",
         url: url,
         dataType: 'json',
         success: function (data) {
            $('#subscribe-form').html("Thank you!");
         },
         error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
         }
      });


   });
});






// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>