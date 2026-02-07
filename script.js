const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');

// On ne garde que le Café et la Ville Zombie
const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        etape++;

        // --- ALLER : DU CAFÉ VERS ZOMBIE ---
        if (etape === 1) {
            machine.style.display = "block";
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            vortex.style.display = "block";
            vortex.classList.add('vortex-visible');
        } 
        else if (etape === 3) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[1] + "')"; // Ville Zombie
                machine.style.display = "none";
                machine.classList.remove('machine-entree'); // Reset position
                vortex.classList.remove('vortex-visible');
                vortex.style.display = "none";
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }

        // --- RETOUR : DE ZOMBIE VERS CAFÉ ---
        else if (etape === 4) {
            machine.style.display = "block"; 
            setTimeout(() => machine.classList.add('machine-entree'), 50);
        }
        else if (etape === 5) {
            vortex.style.display = "block";
            vortex.classList.add('vortex-visible');
        }
        else if (etape === 6) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[0] + "')"; // Retour au Café
                machine.style.display = "none";
                vortex.style.display = "none";
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }
    }
});