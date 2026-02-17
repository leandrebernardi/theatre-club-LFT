const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex');
const flash = document.getElementById('flash');
const musiqueZombie = document.getElementById('musique-zombie');

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg"
];

let etape = 0;

function avancerHistoire() {
    etape++;
    
    // SÉCURITÉ AUDIO : On essaie de débloquer le son au premier clic
    if (etape === 1) {
        musiqueZombie.play().then(() => {
            musiqueZombie.pause(); // On le lance et on le coupe direct juste pour "l'activer"
            console.log("Audio activé et prêt !");
        }).catch(error => console.log("L'audio attend un clic utilisateur"));
    }

    if (etape === 1) {
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2) {
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    } 
    else if (etape === 3) {
        // ICI LE SON SE LANCE POUR DE VRAI
        musiqueZombie.currentTime = 0;
        musiqueZombie.play(); 
        
        flash.classList.add('flash-animation');
        setTimeout(() => {
            decor.style.backgroundImage = "url('" + listeImages[1] + "')";
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
            vortex.style.display = "none";
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    else if (etape === 4) {
        machine.classList.add('machine-entree');
    }
    else if (etape === 5) {
        vortex.style.display = "block";
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 6) {
        flash.classList.add('flash-animation');
        setTimeout(() => {
            musiqueZombie.pause(); // STOP LA MUSIQUE
            decor.style.backgroundImage = "url('" + listeImages[0] + "')";
            machine.classList.remove('machine-entree');
            vortex.classList.remove('vortex-visible');
            vortex.style.display = "none";
        }, 300);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
        etape = 0; 
    }
}

// Support Clavier
window.addEventListener('keydown', function(e) {
    if (e.code === "Space") {
        e.preventDefault();
        avancerHistoire();
    }
});

// Support Clic
window.addEventListener('mousedown', function() {
    avancerHistoire();
});
