const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');

// Sons
const sonMachine = document.getElementById('son-machine');
const sonVortex = document.getElementById('son-vortex');
const sonFlash = document.getElementById('son-flash');
const musiqueZombie = document.getElementById('musique-zombie');

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

function avancerHistoire() {
    etape++;

    if (etape === 1) { // Machine arrive au Café
        sonMachine.play();
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2) { // Vortex s'allume
        sonVortex.play();
        vortex.classList.add('vortex-visible');
    } 
    else if (etape === 3) { // FLASH -> Ville Zombie + Musique
        sonFlash.play();
        musiqueZombie.play(); 
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + listeImages[1] + "')";
            machine.style.display = "none";
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    else if (etape === 4) { // Machine revient chez les Zombies
        sonMachine.play();
        machine.style.display = "block";
        setTimeout(() => machine.classList.add('machine-entree'), 50);
    }
    else if (etape === 5) { // Vortex s'allume
        sonVortex.play();
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 6) { // FLASH -> Retour Café + Stop Musique
        sonFlash.play();
        flash.classList.add('flash-animation');
        setTimeout(() => {
            musiqueZombie.pause();
            musiqueZombie.currentTime = 0;
            decor.style.backgroundImage = "url('" + listeImages[0] + "')";
            machine.style.display = "none";
            vortex.classList.remove('vortex-visible');
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
}

// Clavier
document.addEventListener('keydown', (e) => {
    if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        avancerHistoire();
    }
});

// Tactile/Clic
document.addEventListener('click', avancerHistoire);
