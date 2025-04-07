// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Grazie per averci contattato, ' + name + '! Ti risponderemo presto.');
    } else {
        alert('Per favore, completa tutti i campi del form.');
    }
});
