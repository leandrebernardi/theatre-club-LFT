const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
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
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2) {
        // Apparition du Portail
        vortex.style.display = "block";
        setTimeout(() => vortex.classList.add('vortex-visible'), 50);
    } 
    else if (etape === 3) {
        // FLASH + MUSIQUE
        musique.play().catch(() => console.log("Musique bloquée ou 404"));
        
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + images[1] + "')";
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
        }, 500);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    else if (etape === 4) {
        machine.classList.add('machine-entree');
    }
    else if (etape === 5) {
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 6) {
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
}

window.onclick = avancer;
window.onkeydown = (e) => { if(e.code === "Space") avancer(); };
