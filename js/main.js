$('#modalIMG').on('show.bs.modal', function (event) {
    console.log("hi");
    var button = $(event.relatedTarget); // Button that triggered the modal
    var src = button.data('src');
    var caption= button.data('caption');
    console.log(button);
    console.log(src);
    console.log(caption);// Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-footer p').text(caption);
    modal.find('.modal-body img').attr('src', src);
  });

  console.log("hi");