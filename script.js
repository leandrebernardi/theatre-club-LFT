const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');

// Récupération des sons
const sonVortex = document.getElementById('son-vortex');
const sonFlash = document.getElementById('son-flash');
const sonMachine = document.getElementById('son-machine');

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

function avancerHistoire() {
    etape++;

    if (etape === 1) {
        sonMachine.play(); // SON ARRIVÉE MACHINE
        machine.style.display = "block";
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2) {
        sonVortex.play(); // SON ACTIVATION VORTEX
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    } 
    else if (etape === 3) {
        sonFlash.play(); // SON FLASH/TÉLÉPORTATION
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + listeImages[1] + "')"; 
            machine.style.display = "none";
            machine.classList.remove('machine-entree'); 
            vortex.classList.remove('vortex-visible');
            vortex.style.display = "none";
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    else if (etape === 4) {
        sonMachine.play();
        machine.style.display = "block"; 
        setTimeout(() => machine.classList.add('machine-entree'), 50);
    }
    else if (etape === 5) {
        sonVortex.play();
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 6) {
        sonFlash.play();
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + listeImages[0] + "')"; 
            machine.style.display = "none";
            vortex.style.display = "none";
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
}

document.addEventListener('keydown', (e) => { if(e.key === " ") avancerHistoire(); });
document.addEventListener('click', () => { avancerHistoire(); });
