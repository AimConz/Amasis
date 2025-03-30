document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const text = "Website that made condo easier to find.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            textElement.innerHTML = text.substring(0, index++);
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Attendre 2 secondes avant d'effacer
                return;
            }
        } else {
            textElement.innerHTML = text.substring(0, index--);
            if (index === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeEffect, 100);
    }

    typeEffect();
});
