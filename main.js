document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery");
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal_image");
    const closeModalBtn = document.querySelector("[data-action='close-modal']");

    const galleryItems = [
        "./img/dylan-shaw-6_t8R-uCW3I-unsplash.jpg",
        "./img/erik-karits-kJT_lfheLgA-unsplash.jpg",
        "./img/eberhard-grossgasteiger-KpQb0cI-psA-unsplash.jpg",
    ];

    function renderGallery() {
        const galleryMarkup = galleryItems
            .map(
                (item, index) =>
                    `<div class="gallery_item"><a class="gallery_link" href="#" data-index="${index}"><img class="gallery_image" src="${item}" alt="" /></a></div>`
            )
            .join("");
        galleryContainer.innerHTML = galleryMarkup;
    }

    renderGallery();

    function openModal(index) {
        modal.classList.add("is-open");
        modalImage.src = galleryItems[index];
        modalImage.alt = "";
        document.addEventListener("keydown", handleKeyPress);
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modalImage.src = "";
        modalImage.alt = "";
        document.removeEventListener("keydown", handleKeyPress);
    }

    function GalleryClick(event) {
        event.preventDefault();
        const target = event.target.closest(".gallery_link");

        if (target) {
            const index = target.dataset.index;
            openModal(index);
        }
    }

    function CloseButton() {
        closeModal();
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", CloseButton);
    }
    galleryContainer.addEventListener("click", GalleryClick);
});