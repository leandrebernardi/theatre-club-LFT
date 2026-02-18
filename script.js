const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');
const musiqueZombie = document.getElementById('musique-zombie');

// Configuration des décors (Café et Zombie)
const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

/**
 * Fonction principale qui fait avancer l'histoire
 */
function avancerHistoire() {
    etape++;
    console.log("Action détectée - Étape : " + etape);

    // --- CYCLE 1 : ALLER (DU CAFÉ AU MONDE ZOMBIE) ---
    
    if (etape === 1) {
        // La machine arrive au café
        // On force le chargement de l'audio dès le premier clic pour éviter les erreurs
        musiqueZombie.load(); 
        machine.classList.add('machine-entree');
    } 
    
    else if (etape === 2) {
        // Le vortex s'allume
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    } 
    
    else if (etape === 3) {
        // FLASH + TÉLÉPORTATION VERS ZOMBIE
        
        // Tentative de lecture audio avec gestion d'erreur (Multi-sources)
        musiqueZombie.play().catch(err => {
            console.warn("L'audio n'a pas pu démarrer, tentative de secours...");
        });

        flash.classList.add('flash-animation');
        
        setTimeout(() => {
            // Changement de décor
            decor.style.backgroundImage = "url('" + listeImages[1] + "')";
            // On cache la machine et le vortex pour l'arrivée
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
            vortex.style.display = "none";
        }, 300); // Le changement se fait pendant que le flash est blanc

        // On retire la classe flash après l'animation (3s)
        setTimeout(() => {
            flash.classList.remove('flash-animation');
        }, 3000);
    }

    // --- CYCLE 2 : RETOUR (DU MONDE ZOMBIE AU CAFÉ) ---

    else if (etape === 4) {
        // La machine réapparaît dans la ville zombie
        machine.classList.add('machine-entree');
    }

    else if (etape === 5) {
        // Le vortex se rallume dans la ville zombie
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    }

    else if (etape === 6) {
        // FLASH FINAL + RETOUR AU CAFÉ
        flash.classList.add('flash-animation');
        
        setTimeout(() => {
            // On arrête la musique
            musiqueZombie.pause();
            musiqueZombie.currentTime = 0;
            
            // Retour au décor initial
            decor.style.backgroundImage = "url('" + listeImages[0] + "')";
            
            // Nettoyage final
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
            vortex.style.display = "none";
        }, 300);

        setTimeout(() => {
            flash.classList.remove('flash-animation');
            console.log("Fin de la séquence. Prêt à recommencer.");
            etape = 0; // Reset pour une nouvelle boucle si besoin
        }, 3000);
    }
}

/**
 * ÉCOUTEURS D'ÉVÉNEMENTS (INPUTS)
 */

// 1. Support Clavier (Espace)
window.addEventListener('keydown', function(event) {
    if (event.code === "Space" || event.key === " ") {
        event.preventDefault(); // Empêche le scroll de la page avec Espace
        avancerHistoire();
    }
});

// 2. Support Tactile et Souris
// On utilise 'mousedown' pour être plus rapide que 'click'
window.addEventListener('mousedown', function(event) {
    // Évite de déclencher deux fois si on touche un bouton spécifique
    avancerHistoire();
});
