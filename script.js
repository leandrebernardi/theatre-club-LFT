const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex'); 
const flash = document.getElementById('flash');
const musique = document.getElementById('musique-zombie');
const sonPersonnage = document.getElementById('son-personnage');

// Liste des décors dans l'ordre
const images = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=", // 0: Café
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg", // 1: Ville Zombie
    "1.png", // 2: Nouvelle image 1
    "2.png"  // 3: Nouvelle image 2
];

let etape = 0;

function avancer() {
    etape++;
    console.log("Étape : " + etape);

    // --- PHASE CAFE ---
    if (etape === 1) {
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2) {
        vortex.style.display = "block";
        setTimeout(() => vortex.classList.add('vortex-visible'), 50);
    } 
    // --- ARRIVÉE ZOMBIE ---
    else if (etape === 3) {
        musique.play().catch(e => console.log("Audio play failed"));
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + images[1] + "')"; // Image zombie standard
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
        }, 500);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    // --- NAVIGATION DANS LE MONDE ZOMBIE (TES SVG) ---
    else if (etape === 4) {
        decor.style.backgroundImage = "url('" + images[2] + "')"; // Affiche 1.svg
    }
    else if (etape === 5) {
        // Affiche 2.png (Le personnage va commencer à parler au prochain clic)
        decor.style.backgroundImage = "url('" + images[3] + "')";
    }
    else if (etape === 6) {
        // ÉTAPE DIALOGUE : Le personnage parle, on reste sur 2.png
        console.log("Le personnage parle...");
        sonPersonnage.play().catch(e => console.log("Fichier parole.mp3 introuvable"));
        
        // Optionnel : on peut baisser un peu la musique de fond pour mieux entendre
        musique.volume = 0.3; 
    }
    else if (etape === 7) {
        // FIN DU DIALOGUE : On remonte le son de la musique et on prépare le retour
        musique.volume = 1.0;
        sonPersonnage.pause(); // Au cas où on clique avant la fin des 2 min
        
        decor.style.backgroundImage = "url('" + images[1] + "')"; // Retour ville zombie
        console.log("Le dialogue est fini, retour ville zombie");
    }
    else if (etape === 8) {
        // La machine revient
        machine.classList.add('machine-entree');
    }
    else if (etape === 9) {
        // Le vortex/docteur revient
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 10) {
        // FLASH FINAL + RETOUR CAFÉ
        flash.classList.add('flash-animation');
        setTimeout(() => {
            musique.pause();
            decor.style.backgroundImage = "url('" + images[0] + "')";
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
        }, 500);
        setTimeout(() => {
            flash.classList.remove('flash-animation');
            etape = 0;
        }, 3000);
    }
