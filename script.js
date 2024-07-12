document.addEventListener("DOMContentLoaded", function() {
    const question = document.querySelector(".question");
    const h2Elements = document.querySelectorAll("h2");
    const h3 = document.querySelector("h3");
    const gif = document.querySelector(".gif");
    const btnGroup = document.querySelector(".btn-group");
    const yesBtns = document.querySelectorAll(".yes-btn");
    const noBtns = document.querySelectorAll(".no-btn");

    yesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar elementos al presionar Yes
            question.style.display = "none";
            h2Elements.forEach(h2 => {
                h2.style.display = "none";
            });
            h3.style.display = "none";
            gif.style.display = "none";
            btnGroup.style.display = "none";

            // Mostrar sección de canción
            document.querySelector(".song-section").style.display = "block";

            // Reproducir audio
            const audio = document.getElementById("myAudio");
            audio.play();
        });
    });

    noBtns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            const noBtnRect = btn.getBoundingClientRect();
            const maxX = window.innerWidth - noBtnRect.width;
            const maxY = window.innerHeight - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            btn.style.left = randomX + "px";
            btn.style.top = randomY + "px";
        });
    });

    // Segundo conjunto de botones para la sección de propuesta
    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const proposalNoBtns = document.querySelectorAll(".proposal-section .no-btn");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Mostrar sección de amor y ocultar otras secciones
            document.querySelector(".love-section").style.display = "block";
            document.querySelector(".proposal-section").style.display = "none";
        });
    });

    proposalNoBtns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            const noBtnRect = btn.getBoundingClientRect();
            const maxX = window.innerWidth - noBtnRect.width;
            const maxY = window.innerHeight - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            btn.style.left = randomX + "px";
            btn.style.top = randomY + "px";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const NUM_HEARTS = 150; // Número de corazones que quieres mostrar
    const heartsContainer = document.querySelector(".hearts-container");
    const hearts = []; // Arreglo para almacenar referencias a los corazones creados

    // Generación de corazones
    for (let i = 0; i < NUM_HEARTS; i++) {
        const heart = document.createElement("img");
        heart.src = "https://i.gifer.com/origin/56/5695ab0186b7ed8fd0a1ece35842139b_w200.gif"; // Ruta a tu imagen de corazón
        heart.className = "floating-heart";
        heart.style.width = `${Math.random() * 400 }px`; // Tamaño aleatorio entre 10px y 110px
        heart.style.left = `${Math.random() * window.innerWidth}px`; // Posición aleatoria horizontalmente
        heart.style.top = `${Math.random() * window.innerHeight}px`; // Posición aleatoria verticalmente
        heart.style.animationDelay = `${Math.random() * 1}s`; // Retraso de animación aleatorio

        heartsContainer.appendChild(heart);
        hearts.push(heart); // Agregar corazón al arreglo

        // Programar la eliminación del corazón después de 5 segundos
        setTimeout(() => {
            heart.remove(); // Eliminar el corazón del DOM
            hearts.splice(hearts.indexOf(heart), 1); // Eliminar el corazón del arreglo
        }, 4000);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const yesBtns = document.querySelectorAll(".yes-btn");

    yesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar elementos al presionar Yes
            const question = document.querySelector(".question");
            const h2Elements = document.querySelectorAll("h2");
            const h3 = document.querySelector("h3");
            const gif = document.querySelector(".gif");
            const btnGroup = document.querySelector(".btn-group");

            question.style.display = "none";
            h2Elements.forEach(h2 => {
                h2.style.display = "none";
            });
            h3.style.display = "none";
            gif.style.display = "none";
            btnGroup.style.display = "none";

            // Mostrar texto y reproductor de YouTube
            const songSection = document.querySelector(".song-section");
            songSection.style.display = "block";
           

            const songText = document.querySelector(".song-text");
           
            

            const iframe = document.createElement("iframe");
            iframe.src = "https://www.buenamusica.com/cancion/magic_no-regrets";
            iframe.width = "560";
            iframe.height = "315";
            iframe.allowFullscreen = true;
            iframe.frameBorder = "0";

            songText.appendChild(iframe);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const yesBtns = document.querySelectorAll(".yes-btn");

    yesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar elementos al presionar Yes
            const question = document.querySelector(".question");
            const h2Elements = document.querySelectorAll("h2");
            const h3 = document.querySelector("h3");
            const gif = document.querySelector(".gif");
            const btnGroup = document.querySelector(".btn-group");

            question.style.display = "none";
            h2Elements.forEach(h2 => {
                h2.style.display = "none";
            });
            h3.style.display = "none";
            gif.style.display = "none";
            btnGroup.style.display = "none";

            // Mostrar texto y reproductor de YouTube
            const songSection = document.querySelector(".song-section");
            songSection.style.display = "block";

            const songText = document.querySelector(".song-text");
            songText.innerHTML = "<h2>Escucha \"No Regrets - Magic!\"</h2>";

            const iframe = document.createElement("iframe");
            iframe.src = "https://www.buenamusica.com/cancion/magic_no-regrets";
            iframe.width = "560";
            iframe.height = "315";
            iframe.allowFullscreen = true;
            iframe.frameBorder = "0";

            songText.appendChild(iframe);

            // Mostrar sección de propuesta
            document.querySelector(".proposal-section").style.display = "block";
        });
    });

    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const proposalNoBtns = document.querySelectorAll(".proposal-section .no-btn");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Mostrar sección de amor y ocultar otras secciones
            document.querySelector(".love-section").style.display = "block";
            document.querySelector(".proposal-section").style.display = "none";
        });
    });

    proposalNoBtns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            const noBtnRect = btn.getBoundingClientRect();
            const maxX = window.innerWidth - noBtnRect.width;
            const maxY = window.innerHeight - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            btn.style.left = randomX + "px";
            btn.style.top = randomY + "px";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const songYesBtn = document.querySelector(".song-section .yes-btn");

    songYesBtn.addEventListener("click", () => {
        // Ocultar todos los elementos de la página excepto la tarjeta
        const elementsToHide = document.querySelectorAll("body > *:not(.card-section)");
        elementsToHide.forEach(element => {
            element.style.display = "none";
        });

        // Mostrar la tarjeta
        document.querySelector(".card-section").style.display = "flex";
    });
});

function openCard() {
    const cardCover = document.querySelector(".card-cover");
    const cardContent = document.querySelector(".card-content");
    const responseText = document.querySelector(".card + h2");
    const whatsappLink = document.querySelector(".whatsapp-link");

    cardCover.style.display = "none";
    cardContent.style.display = "flex";
    responseText.style.display = "block";
    whatsappLink.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const cardSection = document.querySelector(".card-section");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar la sección de propuesta al presionar Yes
            document.querySelector(".proposal-section").style.display = "none";

            // Mostrar la sección de la tarjeta
            cardSection.style.display = "flex"; // Ajusta esto según tus estilos CSS para la tarjeta
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const cardSection = document.querySelector(".card-section");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar la sección de propuesta al presionar Yes
            document.querySelector(".proposal-section").style.display = "none";

            // Mostrar la sección de la tarjeta
            cardSection.style.display = "flex"; // Ajusta esto según tus estilos CSS para la tarjeta
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const cardSection = document.querySelector(".card-section");
    const songSection = document.querySelector(".song-section");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar la sección de la canción
            songSection.style.display = "none";

            // Mostrar la sección de la tarjeta
            cardSection.style.display = "flex";

            // Ocultar todos los elementos de la página excepto la tarjeta y el link de WhatsApp
            const elementsToHide = document.querySelectorAll("body > *:not(.card-section):not(.whatsapp-link)");
            elementsToHide.forEach(element => {
                element.style.display = "none";
            });

            // Mostrar el link de WhatsApp
            const whatsappLink = document.querySelector(".whatsapp-link");
            whatsappLink.style.display = "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const proposalYesBtns = document.querySelectorAll(".proposal-section .yes-btn");
    const cardSection = document.querySelector(".card-section");
    const songSection = document.querySelector(".song-section");

    proposalYesBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ocultar la sección de la canción
            songSection.style.display = "none";

            // Mostrar la sección de la tarjeta
            cardSection.style.display = "flex";

            // Ocultar todos los elementos de la página excepto la tarjeta y el link de WhatsApp
            const elementsToHide = document.querySelectorAll("body > *:not(.card-section):not(.whatsapp-link)");
            elementsToHide.forEach(element => {
                element.style.display = "none";
            });

            // Mostrar el link de WhatsApp
            const whatsappLink = document.querySelector(".whatsapp-link");
            whatsappLink.style.display = "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const songYesBtn = document.querySelector(".song-section .yes-btn");

    songYesBtn.addEventListener("click", () => {
        // Ocultar todos los elementos de la página excepto la tarjeta
        const elementsToHide = document.querySelectorAll("body > *:not(.card-section)");
        elementsToHide.forEach(element => {
            element.style.display = "none";
        });

        // Mostrar la tarjeta
        document.querySelector(".card-section").style.display = "flex";
    });
});

function openCard() {
    const cardCover = document.querySelector(".card-cover");
    const cardContent = document.querySelector(".card-content");
    const responseText = document.querySelector(".response-text");
    const whatsappLink = document.querySelector(".whatsapp-link");

    cardCover.style.display = "none";
    cardContent.style.display = "flex";
    responseText.style.display = "block";
    whatsappLink.style.display = "block";
}

