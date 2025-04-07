// Funzione per lo scroll smooth alla sezione quando si clicca su un link di navigazione
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Esegui uno scroll morbido verso la sezione target
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset per evitare che la sezione si nasconda sotto la navbar
            behavior: 'smooth'
        });
    });
});

// Funzione per la gestione della validazione del form di contatto
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impedisce l'invio del form finché non è convalidato
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verifica che i campi non siano vuoti
    if (name && email && message) {
        alert("Grazie per averci contattato, " + name + "! Ti risponderemo il prima possibile.");
        this.reset(); // Pulisce il form dopo l'invio
    } else {
        alert("Per favore, compila tutti i campi!");
    }
});

