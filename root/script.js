// Show or hide password
$('#pw-toggle').on('click',function(){

  let state = $('#password').prop('checked');

  if(!state){
    $('#password').prop('checked',true);
    $('#password').prop('type','text');
  }
  else{
    $('#password').prop('checked',false);
    $('#password').prop('type','password');
  }
  
})

// Foolproof on user registration page
$('#register').on('click',function(){

  let ans = confirm('この内容で登録します。よろしいですか？');

  if (ans) {
    location.href = 'login.html';  
  }
  else {
    location.href = '#';
  }

})

// Change and save password after login
$('#change').on('click',function(){

  let state = $('.form-control').prop('disabled');

  if(state){
    $('.form-control').prop('disabled',false);
    $('#pw-toggle').prop('disabled',false);
    $('#change').attr('value','保存');
  }
  else{

    let ans = confirm('この内容に変更します。よろしいですか？');

    if(ans){
      $('#password').prop('type','password');
      $('.form-control').prop('disabled',true);
      $('#pw-toggle').prop('checked',false);
      $('#pw-toggle').prop('disabled',true);
      $('#change').attr('value','変更');
    }
    else{
      location.href = '#';
    }
    
  }

})

// Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Use of open data sources
// List of regional disaster prevention bases in Yokohama

// <shelter>
  // <home.html>
    // <Generate map>

      function initMap() {

        let letlng = new google.maps.LatLng(35.495675, 139.67078);

        var opts = {
          zoom: 16,
          center: letlng
        };

        var map = new google.maps.Map(document.getElementById("map"), opts);

        let marker = new google.maps.Marker({
          position: letlng,
          map: map
        });

        let infowindow = new google.maps.InfoWindow({
          content: 
          '<h3>生麦小学校</h3>'+
          '<p>生麦小学校</p>',
          position: letlng
        });

        infowindow.open(map);

      };

    // </Generate map>
  // </home.html>
  // <info.html>
      
  // </info.html>
// </shelter>

// support-team/users
// Sorting
window.onload(

  function (){

    // Get all sort keys at once
    let val = document.getElementsByClassName('Skeys');

  }

)