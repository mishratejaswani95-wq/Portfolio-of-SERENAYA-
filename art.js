/* ==========================================
FILTER ARTWORKS
========================================== */

const filterButtons = document.querySelectorAll(".filter");
const frames = document.querySelectorAll(".frame");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter.active")
        .classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        frames.forEach(frame => {

            if (
                filter === "all" ||
                frame.classList.contains(filter)
            ) {

                frame.style.display = "flex";

                setTimeout(() => {

                    frame.style.opacity = "1";
                    frame.style.transform = "scale(1)";

                }, 50);

            }

            else {

                frame.style.opacity = "0";
                frame.style.transform = "scale(.9)";

                setTimeout(() => {

                    frame.style.display = "none";

                }, 300);

            }

        });

    });

});

/* ==========================================
POPUP
========================================== */

const popup = document.getElementById("artPopup");

const popupImage =
document.getElementById("popupImage");

const popupTitle =
document.getElementById("popupTitle");

const popupDescription =
document.getElementById("popupDescription");

const close =
document.querySelector(".close");

function openArtwork(image, title, description){

    popup.classList.add("show");

    popupImage.src = image.src;

    popupTitle.textContent = title;

    popupDescription.textContent = description;

    document.body.style.overflow = "hidden";

}

close.onclick = function(){

    popup.classList.remove("show");

    document.body.style.overflow = "auto";

}

popup.onclick = function(e){

    if(e.target === popup){

        popup.classList.remove("show");

        document.body.style.overflow = "auto";

    }

}

