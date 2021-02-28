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
  // <home>
    // <Shelter map object+α generation>
      function initMap() {

        var opts = {
          zoom: 15,
          center: new google.maps.LatLng(35.378647, 139.529183)
        };

        var map = new google.maps.Map(document.getElementById("map"), opts);

        // let markers = new google.maps.Marker({
        //   map: map,
        //   position: new google.maps.LatLng(35.378647, 139.529183)
        // });

        // let infobox = document.createElement('div');

        // infobox.innerHTML = 
        //   '<div class="infobox">'+
        //     '<div class="inner">'+
        //       '<div class="header"><h3>生麦小学校</h3></div>'+
        //       '<div class="container">生麦四丁目15番1号</div>'+
        //       '<div class="footer"><button>Detail</button></div>'+
        //     '</div>'+
        //   '</div>'  
        // ;

        // let infoboxOp = {
        //   content: infobox,  //表示するHTML
        //   disableAutoPan: false,
        //   dixelOffset: new google.maps.Size(-150, -48), // オフセット値
        //   zIndex: null,
        //   alignBottom: true,
        //   boxClass: "infobox",
        //   enableEventPropagation: true,
        //   closeBoxMargin: "0px 0px -30px 0px",
        //   infoBoxClearance: new google.maps.Size(1, 1)
        // };

        // let infobox = new infobox(infoboxOp);

        // infobox.open(map,this);

      };
    // </Shelter map object+α generation>
  // </home>
// </shelter>

// support-team/users
// Sorting
window.onload(

  function (){

    // Get all sort keys at once
    let val = document.getElementsByClassName('Skeys');

  }

)