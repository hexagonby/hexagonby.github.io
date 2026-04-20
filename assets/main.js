document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var dropdown = btn.closest('.dropdown');
    var isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(function (d) {
      d.classList.remove('open');
    });
    if (!isOpen) dropdown.classList.add('open');
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown.open').forEach(function (d) {
    d.classList.remove('open');
  });
});
