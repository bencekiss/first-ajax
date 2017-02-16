$(document).ready(function () {

  /* Your code goes here */
  var home = 'Europe/Budapest';
  $('#first2').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      dataType: "html"
    }).done(function (responseData){

    });

  });
  $('#three456').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "GET",
      dataType: "text"
    }).done(function(responseData){
      console.log(responseData);
      var p = document.createElement('p');
      $(p).text(responseData);
      $('#step3456').append(p);
    }).fail(function(){
      var p = document.createElement('p');
      $(p).text("Next time use should try harder.");
      $('#step3456').append(p);
    }).always(function(){
      console.log("Hellobellojello! Request is finished!");
    });
  });

  $('#seven').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      dataType: "text"
    }).done(function(responseData){
      var count = document.createElement('p');
      $(count).text(responseData);
      $('#step7').append(count);
    });
  });

  $('#eight').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      data: {
        timezone: home
      },
      dataType: "text"
    }).done(function(responseData){
      var time = document.createElement('p');
      $(time).text(responseData + " Home sweet home");
      $('#step8').append(time);
    });
  });

  $('#nine').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      dataType: "html"
    }).done(function(responseData){
      $('#carlist').append(responseData);
    });
  });

});
