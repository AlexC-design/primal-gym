const navItemsHighlight = scrollPosition => {
  let mainNavLinks = document.querySelectorAll("ul li a");

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section !== null) {
      if (
        section.offsetTop <= scrollPosition + 300 &&
        section.offsetTop + section.offsetHeight - 300 > scrollPosition
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    }
  });
};

export default navItemsHighlight;
