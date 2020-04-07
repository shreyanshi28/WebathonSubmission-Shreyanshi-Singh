
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".modal-wrapper");
const closeButton = document.querySelector(".close-modal");

const showModal = () => {
  signupModal.style.display = "block";
};

const closeModal = () => {
  signupModal.style.display = "none";
};

signup.addEventListener("click", () => {
  showModal();
});
closeButton.addEventListener("click", () => {
  closeModal();
});
