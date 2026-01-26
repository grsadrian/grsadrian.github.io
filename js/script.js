const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("click", openModal);
});

function openModal(event) {
  const modalElement = document.querySelector(".modal-container");
  document.body.classList.add("no-scroll");
  modalElement
    .querySelector("#project-btn")
    .setAttribute("href", event.currentTarget.dataset.livePreview);
  modalElement
    .querySelector("#repo-btn")
    .setAttribute("href", event.currentTarget.dataset.repository);
  modalElement.classList.add("active");
  modalElement;

  modalElement.addEventListener("click", closeModal);
}

function closeModal(event) {
  if (event.target === this) {
    this.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
}
