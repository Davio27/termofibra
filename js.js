// <!-- Swiper JS -->
src="https://unpkg.com/swiper/swiper-bundle.min.js">

// <!-- Seu script JS personalizado -->

// Inicialize o Swiper
document.addEventListener("DOMContentLoaded", function() {
    const openButtons = document.querySelectorAll(".button");
    const modals = document.querySelectorAll(".modal");
    const closeButton = document.querySelectorAll(".close-button");

    openButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            modals[index].style.display = "block";
        });

        closeButton[index].addEventListener("click", function() {
            modals[index].style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modals[index]) {
                modals[index].style.display = "none";
            }
        });
    });
});

function ampliar(img) {
    img.classList.toggle('ampliado');
}


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-collection img');

    // Adiciona o evento de clique para cada imagem
    images.forEach(image => {
        image.addEventListener('click', function () {
            // Adiciona a classe 'ampliada' à imagem clicada
            this.classList.add('ampliada');

            // Fecha a imagem quando o usuário clicar fora dela
            document.addEventListener('click', function closeImage(event) {
                if (!event.target.closest('.image-collection img')) {
                    images.forEach(image => {
                        image.classList.remove('ampliada');
                    });
                    document.removeEventListener('click', closeImage);
                }
            });
        });
    });
});

window.onscroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-xx');
    navbar.classList.remove('active');
};

document.addEventListener('click', (e) => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

// envio do email

function enviarEmail() {
    // Capturar os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var fone = document.getElementById('fone').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verificar se todos os campos estão preenchidos
    if (nome === "" || email === "" || fone === "" || assunto === "" || mensagem === "") {
        document.getElementById('mensagemErro').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('mensagemErro').style.display = 'none';
        }, 3000);
        return;
    } else {
        document.getElementById('mensagemErro').style.display = 'none';
    }

    // Montar o link de e-mail com os dados preenchidos
    var linkEmail = "mailto:TermoFibra@outlook.com.br" +
                    "?subject=" + encodeURIComponent(assunto) +
                    "&body=" + encodeURIComponent("Nome: " + nome + "\nE-mail: " + email + "\nTelefone: " + fone + "\n\n" + mensagem);

    // Abrir o cliente de e-mail padrão do usuário
    window.location.href = linkEmail;
}

// correção do bug no safira para rotação do cartão
function rotateCard(card) {
    // Obtenha a caixa que contém o conteúdo do cartão
    const box = card.querySelector(".Competencias-box");
  
    // Obtenha a direção atual da rotação
    const rotation = box.style.transform.split("(")[1].split(")")[0];
  
    // Se o cartão estiver virado para a frente, gire-o para trás
    if (rotation === "0deg" || rotation === "") {
      box.style.transform = "rotateY(180deg)";
    } else {
      // Se o cartão estiver virado para trás, gire-o para frente
      box.style.transform = "rotateY(0deg)";
    }
}


