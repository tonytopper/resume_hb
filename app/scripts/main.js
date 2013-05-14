var jobsTemplate = this["resume"]["Templates"]["resume/templates/jobs"];
  $.getJSON('resume.json')
    .done( function(data) {
      $('#jobs').html(jobsTemplate(data));
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ', ' + error;
      console.log( "Request Failed: " + err);
    });

