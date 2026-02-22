const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const flash = document.getElementById('flash');
const musique = document.getElementById('musique-zombie');

const images = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

function avancer() {
    etape++;
    console.log("Étape " + etape);

    if (etape === 1) {
        // 1. La machine arrive (lentement et saccadé)
        machine.classList.add('machine-entree');
        musique.load(); // On prépare la musique en silence
    } 
    else if (etape === 2) {
        // 2. FLASH + MUSIQUE + DÉCOR ZOMBIE
        musique.play().catch(e => console.log("L'audio nécessite un clic"));
        flash.classList.add('flash-animation');
        
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + images[1] + "')";
            machine.classList.remove('machine-entree'); // La machine disparaît pendant le flash
        }, 500);

        setTimeout(() => {
            flash.classList.remove('flash-animation');
        }, 3000);
    }
    else if (etape === 3) {
        // 3. La machine revient dans le monde zombie
        machine.classList.add('machine-entree');
    }
    else if (etape === 4) {
        // 4. FLASH FINAL + RETOUR CAFÉ + STOP MUSIQUE
        flash.classList.add('flash-animation');
        setTimeout(() => {
            musique.pause();
            musique.currentTime = 0;
            decor.style.backgroundImage = "url('" + images[0] + "')";
            machine.classList.remove('machine-entree');
        }, 500);
        
        setTimeout(() => {
            flash.classList.remove('flash-animation');
            etape = 0; // On recommence le cycle
        }, 3000);
    }
}

// Contrôles : Clic ou Touche Espace
window.onclick = avancer;
window.onkeydown = (e) => { if(e.code === "Space") avancer(); };
