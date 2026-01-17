const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg",
    "https://i.pinimg.com/736x/27/2d/56/272d56698720250225df2645eb5fafe2.jpg"
];

let etape = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
        etape++;

        // --- ALLER VERS VILLE ZOMBIE ---
        if (etape === 1) {
            machine.style.display = "block"; // On s'assure qu'elle est visible
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            vortex.classList.add('vortex-visible');
        } 
        else if (etape === 3) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[1] + "')"; // Ville Zombie
                machine.style.display = "none";
                vortex.style.display = "none";
                vortex.classList.remove('vortex-visible'); // Reset pour plus tard
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }

        // --- RETOUR VERS LE CAFÉ ---
        else if (etape === 4) {
            // La machine réapparaît dans la ville zombie
            machine.style.display = "block";
            console.log("Machine de retour");
        }
        else if (etape === 5) {
            // Le vortex se rallume
            vortex.classList.add('vortex-visible');
            console.log("Vortex de retour");
        }
        else if (etape === 6) {
            // FLASH FINAL ET RETOUR AU CAFÉ
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[0] + "')"; // Retour au Café
                machine.style.display = "none";
                vortex.style.display = "none";
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }
        else if (etape === 7) {
            // Image bonus (le 3)
            decor.style.backgroundImage = "url('" + listeImages[2] + "')";
        }
    }
});
