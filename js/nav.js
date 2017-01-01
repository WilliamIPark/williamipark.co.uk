$(document).ready(function(){
  //Sidebar toggle - Hamburger
  $('#nav-toggle-wrap').on('click', function(event) {
    event.preventDefault();
    $('#sidebar').toggleClass("slide-sidebar");
    $('#main-container').toggleClass("slide-content");
    $('#main-footer').toggleClass("hide-footer");
  });

  //Sidebar Toggle - Back Button
  $('#sidebar-back').on('click', function(event) {
    event.preventDefault();
    $('#sidebar').toggleClass("slide-sidebar");
    $('#main-container').toggleClass("slide-content");
    $('#main-footer').toggleClass("hide-footer");
  });

});
