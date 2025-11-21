// Sélection correcte des éléments
const joinBtn = document.getElementById('jag');      
const panelJag = document.getElementById('paneljag'); 

// Fonction toggle
function togglePanel() {
    if (panelJag.style.display === "none") {
        panelJag.style.display = "block";
    } else {
        panelJag.style.display = "none";
    }
}


joinBtn.addEventListener("click", togglePanel);

