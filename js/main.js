document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = this.querySelector('input[type="text"]').value;
    var email = this.querySelector('input[type="email"]').value;
    var phone = this.querySelector('input[type="tel"]').value;
    var type = document.getElementById('contactType').value;
    var message = this.querySelector('textarea').value;

    var whatsappMessage = 'Olá! Vim pelo site e quero um orçamento.\n\n';
    whatsappMessage += 'Nome: ' + name + '\n';
    whatsappMessage += 'E-mail: ' + email + '\n';
    if (phone) whatsappMessage += 'Telefone: ' + phone + '\n';
    if (type) whatsappMessage += 'Tipo de Negócio: ' + type + '\n';
    whatsappMessage += 'Mensagem: ' + message;

    var encodedMessage = encodeURIComponent(whatsappMessage);
    window.open('https://wa.me/5547996451567?text=' + encodedMessage, '_blank');

    this.reset();
});