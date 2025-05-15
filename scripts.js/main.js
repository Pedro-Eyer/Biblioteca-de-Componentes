
// Modais 
document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector(".open-modal");
    const closeModalButton = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");

    // Abrir o modal
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    // Fechar o modal
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Fechar o modal ao clicar no overlay
    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const openModal2Button = document.querySelector(".open-modal-2");
    const closeModal2Button = document.querySelector(".close-modal-2");
    const modal2 = document.querySelector(".modal-2");
    const overlay2 = document.querySelector(".modal-overlay-2");

    // Abrir o Modal 2
    openModal2Button.addEventListener("click", () => {
        modal2.style.display = "block";
        overlay2.style.display = "block";
    });

    // Fechar o Modal 2
    closeModal2Button.addEventListener("click", () => {
        modal2.style.display = "none";
        overlay2.style.display = "none";
    });

    // Fechar o Modal 2 ao clicar no overlay
    overlay2.addEventListener("click", () => {
        modal2.style.display = "none";
        overlay2.style.display = "none";
    });
});
