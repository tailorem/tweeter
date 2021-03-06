// All functions called in this file are defined in helpers.js
$(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    var input = event.target.elements.text.value;

    if (input.length > 140) {
      swapError($("#error"), "Oops, that trumpet was too loud.");
      return;
    }
    if (input.trim().length < 1) {
      swapError($("#error"), "Oops, that trumpet wasn't loud enough.");
      return;
    }
    if ($("#error").text()) {
      $("#error").slideUp();
    }

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    })
    .done(function() {
      loadTweets();

      console.log($(".tweet").find("p"));

    });

    event.target.elements.text.value = "";
    $("span.counter").text(140);

  });

  loadTweets();

  $("#compose").on("click", function() {
    $("section.new-tweet").slideToggle(400, function() {
      $(".new-tweet textarea").focus();
    });
  });

});
