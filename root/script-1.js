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

// <user>
  // <home.html>
    // <Generate map>
      function initMap() {

        let data = "../data/map-json.js";

        // <Generate map>
          let letlng = new google.maps.LatLng(35.495675, 139.67078);

          var opts = {
            zoom: 16,
            center: letlng
          };

          var map = new google.maps.Map(document.getElementById("map"), opts);
        // </Generate map>

        let letlng = new google.maps.LatLng(data[0]["shelter"][0]);

        // <Generate marker>
          let marker = new google.maps.Marker({
            position: letlng,
            map: map
          });
        // </Generate marker>

        // <Generate infowindow when clicking marker>
          let infowindow = new google.maps.InfoWindow({
            position: letlng,
            content:
            '<table class="table">'+
              '<tr>'+
                '<th scope="row">名前</th>'+
                '<td>生麦小学校</td>'+
              '</tr>'+
              '<tr>'+
                '<th scope="row">住所</th>'+
                '<td>生麦四丁目15番1号</td>'+
              '</tr>'+
            '</table>'+
            '<a href="shelter.html" class="btn btn-primary">避難所の詳細</a>'
          });

          google.maps.event.addListener(marker,'click',function(){

            infowindow.open(map);
  
          });
        // </Generate infowindow when clicking marker>
        
      };
    // </Generate map>
  // </home.html>
// </user>

// support-team/users
// Sorting
window.onload(

  function (){

    // Get all sort keys at once
    let val = document.getElementsByClassName('Skeys');

  }

)