    // Hamburger Menu Toggle
      const hamburger = document.getElementById("hamburgerButton");
      const mobileNav = document.getElementById("mobileNavMenu");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("open");
      });

      // Close mobile menu on link click
      mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          mobileNav.classList.remove("open");
        });
      });

      // Animation Logic
    const animationArea = document.getElementById('animationArea');
    const ship = document.getElementById('objShip');
    const plane = document.getElementById('objPlane');

    if (animationArea) {
        animationArea.addEventListener('mousemove', (e) => {
            const rect = animationArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Move os objetos levemente (efeito parallax)
            const xMove = (x / rect.width) * 30; // Move até 30px
            const yMove = (y / rect.height) * 20;

            if(ship) ship.style.transform = `translate(${xMove}px, ${yMove}px)`;
            if(plane) plane.style.transform = `translate(${-xMove}px, ${-yMove}px)`;
        });
    }

      // Add hover state to cursor (for buttons and links)
      document
        .querySelectorAll("a, button, .quick-card, .card, .hamburger")
        .forEach((el) => {
          el.addEventListener("mouseenter", () =>
            cursor.classList.add("hover-state")
          );
          el.addEventListener("mouseleave", () =>
            cursor.classList.remove("hover-state")
          );
        });

        /* ==================================
   HAFEN CONSOLIDATORS - MAIN SCRIPT
   ================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANO DINÂMICO NO RODAPÉ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. MENU MOBILE (HAMBÚRGUER)
    const hamburger = document.getElementById('hamburgerButton');
    
    // Precisamos garantir que existe um menu mobile no HTML
    // (Se não tiver, vamos criar a lógica de abrir/fechar a nav desktop transformada)
    // Para simplificar, vou assumir que você tem a estrutura padrão.
    // Se não tiver a div .mobile-menu, adicione ela no HTML.
    
    // Nota: O HTML do passo do Header não incluiu a div .mobile-menu explícita
    // Vamos adicionar um listener simples que adiciona a classe 'active'
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Alterna a visibilidade do menu
            const nav = document.querySelector('.desktop-nav');
            if (nav) {
                // Em mobile, transformamos a desktop-nav em menu flutuante via CSS
                // Ou alternamos uma classe .open
                nav.classList.toggle('mobile-open');
                hamburger.classList.toggle('active');
            }
        });
    }
});