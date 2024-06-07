// Toggle class active
const NavbarNav = document.querySelector(".Navbar-Nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
  feather.replace(); // Perbarui icon Feather Icons setelah toggle
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove('active');
  };
});
