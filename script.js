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

        // ÉTAPE 1 : Machine arrive au café
        if (etape === 1) {
            machine.classList.add('machine-entree');
        } 
        // ÉTAPE 2 : Vortex s'allume
        else if (etape === 2) {
            vortex.classList.add('vortex-visible');
        } 
        // ÉTAPE 3 : FLASH -> Vers Ville Zombie
        else if (etape === 3) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[1] + "')";
                
                // ON CACHE TOUT ET ON RESET LA POSITION
                machine.style.display = "none";
                machine.classList.remove('machine-entree'); // Elle retourne à droite (cachée)
                
                vortex.classList.remove('vortex-visible');
                vortex.style.display = "none";
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }
        // ÉTAPE 4 : La machine revient (mais elle est à droite, cachée)
        else if (etape === 4) {
            machine.style.display = "block"; 
            // On déclenche l'entrée (elle va glisser depuis le côté)
            setTimeout(() => machine.classList.add('machine-entree'), 50);
        }
        // ÉTAPE 5 : Le vortex se rallume
        else if (etape === 5) {
            vortex.style.display = "block";
            vortex.classList.add('vortex-visible');
        }
        // ÉTAPE 6 : FLASH -> Retour Café
        else if (etape === 6) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[0] + "')";
                machine.style.display = "none";
                vortex.style.display = "none";
            }, 300);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }
        // ÉTAPE 7 : Image finale (Le 3)
        else if (etape === 7) {
            decor.style.backgroundImage = "url('" + listeImages[2] + "')";
        }
    }
});
