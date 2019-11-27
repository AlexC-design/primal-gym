const revealImages = (scrollPosition) => {
  let trainerSections = document.querySelectorAll(".trainer-section-container");

  trainerSections.forEach(section => {
    if (
      section.offsetTop <= scrollPosition + 400 &&
      section.offsetTop + section.offsetHeight > scrollPosition + 400
    ) {
      section.querySelector(".trainer-image").classList.add("revealed");
      console.log(`revealed ${section.id}`);
    } else {
      section.querySelector(".trainer-image").classList.remove("revealed");
      console.log(`hid ${section.id}`);
    }
  });
};

export default revealImages;
