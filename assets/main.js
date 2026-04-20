// Dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var dropdown = btn.closest('.dropdown');
    var isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(function (d) {
      d.classList.remove('open');
    });
    if (!isOpen) dropdown.classList.add('open');
  });
});

// Hamburger toggle
var hamburger = document.querySelector('.nav-hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('open');
  });
}

// Close nav links close the mobile menu
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    var nav = document.querySelector('nav');
    if (nav) nav.classList.remove('open');
  });
});

// Close dropdowns and nav when clicking outside
document.addEventListener('click', function (e) {
  document.querySelectorAll('.dropdown.open').forEach(function (d) {
    if (!d.contains(e.target)) d.classList.remove('open');
  });
  var nav = document.querySelector('nav');
  if (nav && !nav.contains(e.target)) nav.classList.remove('open');
});
