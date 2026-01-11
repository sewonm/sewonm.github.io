const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.target;

    // hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // remove active state from links
    links.forEach(l => l.classList.remove("active"));

    // show selected page
    document.getElementById(target).classList.add("active");
    link.classList.add("active");
  });
});
