console.log("app.js linked.");

$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: 'https://api.github.com/users/margarh1/repos',
    success: onSuccess,
    error: onError,
    complete: console.log('Complete')
  })

  function onSuccess(json) {
    var projectSource = $('#project-template').html();
    var projectTemplate = Handlebars.compile(projectSource);
    var projectHtml = projectTemplate({ repos: json });
    // console.log(projectHtml);
    $('.works').append(projectHtml);
  }

  function onError(xhr, status, errorThrown) {
    alert('Sorry, there was a problem!');
    console.log('Error: ' + errorThrown);
    console.log('Status: ' + status);
    console.dir(xhr);
  }
})