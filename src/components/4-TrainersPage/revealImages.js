const revealImages = scrollPosition => {
  let trainerSections = document.querySelectorAll(".trainer-section-container");

  trainerSections.forEach(section => {
    //checking if the image is already revealed
    const revealed = Object.values(
      section.querySelector(".trainer-image").classList
    ).find(el => el === "revealed");

    if (
      section.offsetTop <= scrollPosition + 400 &&
      section.offsetTop + section.offsetHeight > scrollPosition + 400
    ) {
      section.querySelector(".trainer-image").classList.add("revealed");
    } else if (revealed) {
      section.querySelector(".trainer-image").classList.remove("revealed");
    }
  });
};

export default revealImages;
