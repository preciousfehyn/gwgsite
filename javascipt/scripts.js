/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar1',
  offset: 55
});

/* enable gallery modals */
$('#galleryModal').on('show.bs.modal', function (e) {
   $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
});
