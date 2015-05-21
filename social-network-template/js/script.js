$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function () {
  $('[data-hover="tooltip"]').tooltip()
}) 