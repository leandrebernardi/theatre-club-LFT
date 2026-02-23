const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');
const musique = document.getElementById('musique-zombie');
const sonPersonnage = document.getElementById('son-personnage');

const images = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=", 
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg",
    "1.png", 
    "2.png"
];

let etape = 0;

function avancer() {
    etape++;
    console.log("Étape actuelle : " + etape);

    try {
        if (etape === 1) {
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            vortex.style.display = "block";
            setTimeout(() => vortex.classList.add('vortex-visible'), 50);
        } 
        else if (etape === 3) {
            // FLASH + ARRIVÉE ZOMBIE
            musique.play().catch(e => console.log("Audio de fond bloqué"));
            flash.classList.add('flash-animation');
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + images[1] + "')";
                machine.classList.remove('machine-entree');
                vortex.classList.remove('vortex-visible');
            }, 500);
            setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        }
        else if (etape === 4) {
            decor.style.backgroundImage = "url('" + images[2] + "')"; // 1.png
        }
        else if (etape === 5) {
            decor.style.backgroundImage = "url('" + images[3] + "')"; // 2.png
        }
        else if (etape === 6) {
            // DIALOGUE DU PERSONNAGE
            sonPersonnage.play().catch(e => console.log("Son personnage absent"));
            musique.volume = 0.2; // On baisse le fond
        }
        else if (etape === 7) {
            // FIN DIALOGUE
            musique.volume = 1.0;
            sonPersonnage.pause();
            decor.style.backgroundImage = "url('" + images[1] + "')"; // Retour décor zombie
        }
        else if (etape === 8) {
            machine.classList.add('machine-entree');
        }
        else if (etape === 9) {
            vortex.classList.add('vortex-visible');
        }
        else if (etape === 10) {
            flash.classList.add('flash-animation');
            setTimeout(() => {
                musique.pause();
                decor.style.backgroundImage = "url('" + images[0] + "')"; // Retour Café
                machine.classList.remove('machine-entree');
                vortex.classList.remove('vortex-visible');
            }, 500);
            setTimeout(() => {
                flash.classList.remove('flash-animation');
                etape = 0;
            }, 3000);
        }
    } catch (err) {
        console.error("Erreur dans le script : ", err);
    }
}

window.onclick = avancer;
window.onkeydown = (e) => { if(e.code === "Space") avancer(); };
