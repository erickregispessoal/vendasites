let clients = JSON.parse(localStorage.getItem('clients')) || [];

function addClient() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const template = document.getElementById('clientTemplate').value;

    if (!name || !email || !template) {
        alert('Por favor, preencha nome, e-mail e selecione um template.');
        return;
    }

    const client = {
        id: Date.now(),
        name,
        email,
        phone,
        template,
        date: new Date().toLocaleDateString('pt-BR')
    };

    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
    renderClients();
    clearForm();
}

function renderClients() {
    const list = document.getElementById('clientList');
    list.innerHTML = clients.map(client => `
        <div class="client-item">
            <strong>${client.name}</strong><br>
            <small>${client.email} | ${client.phone || 'Sem telefone'}</small><br>
            <small>Template: ${client.template} | Data: ${client.date}</small>
            <button onclick="removeClient(${client.id})" style="float:right;background:#e74c3c;color:white;border:none;padding:5px 10px;cursor:pointer;border-radius:3px;">Remover</button>
        </div>
    `).join('');
}

function removeClient(id) {
    if (confirm('Remover este cliente?')) {
        clients = clients.filter(c => c.id !== id);
        localStorage.setItem('clients', JSON.stringify(clients));
        renderClients();
    }
}

function clearForm() {
    document.getElementById('clientName').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientTemplate').value = '';
}

function showDetails(type) {
    const details = {
        lanchonete: 'Template Lanchonete: Design moderno com cardÃ¡pio digital, galeria de fotos, WhatsApp integrado e mapa de localizaÃ§Ã£o.',
        barbearia: 'Template Barbearia: Layout elegante com sistema de agendamento online, galeria de trabalhos e preÃ§os.'
    };
    alert(details[type]);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const type = document.getElementById('contactType').value;
    const message = this.querySelector('textarea').value;
    
    let whatsappMessage = `OlÃ¡! Vim pelo site e quero um orÃ§amento.\n\n`;
    whatsappMessage += `*Nome:* ${name}\n`;
    whatsappMessage += `*E-mail:* ${email}\n`;
    if (phone) whatsappMessage += `*Telefone:* ${phone}\n`;
    if (type) whatsappMessage += `*Tipo de NegÃ³cio:* ${type}\n`;
    whatsappMessage += `*Mensagem:* ${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5547996451567?text=${encodedMessage}`, '_blank');
    
    this.reset();
});

function sendWhatsApp(templateType) {
    const messages = {
        lanchonete: 'OlÃ¡! Tenho interesse no template Lanchonete Gourmet. Quero saber mais!',
        barbearia: 'OlÃ¡! Tenho interesse no template Barbearia Style. Quero saber mais!'
    };
    
    const message = encodeURIComponent(messages[templateType]);
    window.open(`https://wa.me/5547996451567?text=${message}`, '_blank');
}

renderClients();