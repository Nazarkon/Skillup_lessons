$(document).ready(function(){
  $('.btn').on('click',function(){
    $('#myModal').modal('show');

  })
  $(function(){
    $(window).resize(function(){

      $(window).resize(function() {
        if($(this).width() < 768) {
          $('#myModal').modal('show');
        }else{
          $('#myModal').modal('hide');
        }
      })
    })
  })
});