document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-bar a");
  const navItems = document.querySelectorAll(".nav-bar li");
  const sections = document.querySelectorAll(".sections > div");

  // default state
  document.getElementById("home").classList.add("active");
  const defaultLink = document.querySelector('.nav-bar a[href="#home"]');
  defaultLink.classList.add("active");
  defaultLink.parentElement.classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      // remove active from all sections
      sections.forEach(section => {
        section.classList.remove("active");
      });

      // remove active from all nav items + links
      links.forEach(l => l.classList.remove("active"));
      navItems.forEach(item => item.classList.remove("active"));

      // activate selected section
      document.getElementById(targetId).classList.add("active");

      // activate selected nav link + its <li>
      link.classList.add("active");
      link.parentElement.classList.add("active");
    });
  });
});
