document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/5599999999999';
    });
});



document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Pegue os valores dos campos
    const fromName = document.querySelector("input[type='text']").value;  // Nome
    const fromEmail = document.querySelector("input[type='email']").value;  // Email
    const phone = document.querySelector("input[type='phone']").value;  // Telefone
    const message = document.querySelector("#mensagem").value;  // Mensagem
  
    // Parâmetros a serem enviados ao EmailJS
    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      phone: phone,
      message: message,
      to_name: "Lucas", // Seu nome ou nome do destinatário
    };
  
    // Enviar email usando o EmailJS
    emailjs.send("service_lb27oq4", "template_id", templateParams)
      .then(function(response) {
        alert("Mensagem enviada com sucesso!");
      }, function(error) {
        console.error("Erro ao enviar:", error);
        alert("Falha ao enviar mensagem. Tente novamente.");
      });
  });
  