document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#aform1-8 form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      alert('Thank you! We have received your request.');
      form.reset();
    });
  }
});
