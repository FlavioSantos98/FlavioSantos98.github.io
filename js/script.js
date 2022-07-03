// MUDAR EXPERIÊNCIAS

const menu = document.querySelectorAll("#menu li");
const descricao = document.querySelectorAll("#descricao section");

    if (menu.length && descricao.length) {
        menu[0].classList.add("ativo");
        descricao[0].classList.add("ativo");

    function abaAtiva(index) {
        descricao.forEach((section) => {
            section.classList.remove("ativo");
        });
        descricao[index].classList.add("ativo");

        menu.forEach((li) => {
            li.classList.remove("ativo");
        });
        menu[index].classList.add("ativo");
    }

    menu.forEach((item, index) => {
        item.addEventListener("click", () => {
            abaAtiva(index);
        });
    });
}

// FIM

// ANIMAÇÃO SCROLL 

const sections = document.querySelectorAll("[data-anime='scroll']");

function animaScroll() {
    sections.forEach((section) => {
        const halfSection = window.innerHeight * 0.6;
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfSection < 0;

        if(isSectionVisible) {
            section.classList.add('animation')
        }
    })
}

window.addEventListener('scroll', animaScroll);

// FIM

// ABRIR/FECHAR MENU LATERAL

const imagem = document.getElementById("menu");

function abrirMenu() {

    if (imagem.className === "inativo") { 
        imagem.className = "ativo";   
        imagem.src = "assets/icones/fechar.png";

        if (window.innerWidth > 760) {  
            document.getElementById("menuLateral").style.width = "150px";
            document.getElementById("main").style.marginLeft = "150px";
        } 

        if (window.innerWidth < 759) {
            document.getElementById("menuLateral").style.width = "400px";
            document.getElementById("main").style.marginLeft = "400px";
        }

    } else {
        imagem.className = "inativo"
        imagem.src = "assets/icones/menu.png"
        document.getElementById("menuLateral").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

// FIM

// MUDAR COR DO SITE

var cores = document.querySelector(':root');

function mudarTema(valor) {
    
    if (valor === "principal") {
        cores.style.setProperty('--cor1', '#1E295B');
        cores.style.setProperty('--cor2', '#DCD655');
        cores.style.setProperty('--cor3', '#D6D297');
        cores.style.setProperty('--cor4', '#322825');
        cores.style.setProperty('--cor5', '#79A49E');
        cores.style.setProperty('--cor6', 'rgb(35, 46, 96)');
        cores.style.setProperty('--cor7', 'rgb(55, 66, 116)');
        cores.style.setProperty('--bgPaleta', 'rgb(65, 76, 126)');
    }

    if (valor === "safari") {
        cores.style.setProperty('--cor1', '#5F310E');
        cores.style.setProperty('--cor2', '#54441B');
        cores.style.setProperty('--cor3', '#867D2C');
        cores.style.setProperty('--cor4', '#AE7F4D');
        cores.style.setProperty('--cor5', '#DCAA68');
        cores.style.setProperty('--cor6', 'rgb(100, 54, 19)');
        cores.style.setProperty('--cor7', 'rgb(120, 74, 39)');
        cores.style.setProperty('--bgPaleta', 'rgb(130, 84, 49)');
    }

    if (valor === "coral") {
        cores.style.setProperty('--cor1', '#EA7070');
        cores.style.setProperty('--cor2', '#2694AB');
        cores.style.setProperty('--cor3', '#4DBEDF');
        cores.style.setProperty('--cor4', '#E59572');
        cores.style.setProperty('--cor5', '#FDC4B6');
        cores.style.setProperty('--cor6', 'rgb(239, 117, 117)');
        cores.style.setProperty('--cor7', 'rgb(255, 137, 137)');
        cores.style.setProperty('--bgPaleta', 'rgb(255, 147, 147)');
    }

    if (valor === "cyberpunk") {
        cores.style.setProperty('--cor1', '#7A04EB');
        cores.style.setProperty('--cor2', '#FE75FE');
        cores.style.setProperty('--cor3', '#FF124F');
        cores.style.setProperty('--cor4', '#120458');
        cores.style.setProperty('--cor5', '#FF00A0');
        cores.style.setProperty('--cor6', 'rgb(127, 9, 240)');
        cores.style.setProperty('--cor7', 'rgb(147, 29, 255)');
        cores.style.setProperty('--bgPaleta', 'rgb(157, 39, 255)');
    }
}

// FIM