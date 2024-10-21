function filtrarFormatos() {
    const input = document.getElementById('buscar');
    const filter = input.value.toLowerCase();
    const dropdown = document.getElementById('formatos');
    const links = dropdown.getElementsByTagName('a'); // Cambiado de 'li' a 'a'
    
    let hasMatches = false; // Variable para rastrear si hay coincidencias

    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent || links[i].innerText;
        
        // Verifica si el texto del enlace coincide con el filtro
        if (text.toLowerCase().includes(filter)) {
            links[i].style.display = ''; // Muestra el enlace
            hasMatches = true; // Hay al menos una coincidencia
        } else {
            links[i].style.display = 'none'; // Oculta el enlace
        }
    }

    // Muestra u oculta el menú según si hay coincidencias
    dropdown.classList.toggle('show', hasMatches);
}
