const revealImages = (scrollPosition, sectionContainer, image, scrollOffsetReveal, scrollOffsetHide) => {
  let trainerSections = document.querySelectorAll(sectionContainer);
  console.log(trainerSections);
  trainerSections.forEach(section => {
    
        //checking if the image is already revealed
        const revealed = Object.values(
          section.querySelector(image).classList
        ).find(el => el === "revealed");

        if (
          section.offsetTop <= scrollPosition + scrollOffsetReveal &&
          section.offsetTop + section.offsetHeight > scrollPosition + scrollOffsetHide
        ) {
          section.querySelector(image).classList.add("revealed");
        } else if (revealed) {
          section.querySelector(image).classList.remove("revealed");
        }
  });
};

export default revealImages;
