console.log(¨Starting¨)

let etape = 0;

// On définit les images (liens directs pour éviter les 404)
const images = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=", 
    "https://thumbs.dreamstime.com/b/explorez-un-dessin-anim%C3%A9-zombie-city-urban-ruins-fond-d-%C3%A9cran-pour-une-aventure-passionnante-plongez-dans-monde-et-dynamique-373526362.jpg",
    "1.png", 
    "2.png"
];

function avancer() {
    etape++;
    console.log("Clic ! Étape : " + etape);

    // On récupère les éléments à CHAQUE clic pour être sûr qu'ils existent
    const decor = document.getElementById('decor');
    const machine = document.getElementById('machine');
    const vortex = document.getElementById('vortex');
    const flash = document.getElementById('flash');
    const musique = document.getElementById('musique-zombie');
    const sonPersonnage = document.getElementById('son-personnage');

    if (etape === 1 && machine) {
        machine.classList.add('machine-entree');
    } 
    else if (etape === 2 && vortex) {
        vortex.style.display = "block";
        setTimeout(() => vortex.classList.add('vortex-visible'), 50);
    } 
    else if (etape === 3) {
        if (musique) musique.play().catch(e => console.log("Audio bloqué"));
        if (flash) flash.classList.add('flash-animation');
        setTimeout(() => {
            if (decor) decor.style.backgroundImage = "url('" + images[1] + "')";
            if (machine) machine.classList.remove('machine-entree');
            if (vortex) vortex.classList.remove('vortex-visible');
        }, 500);
        setTimeout(() => flash.classList.remove('flash-animation'), 3000);
    }
    else if (etape === 4 && decor) {
        decor.style.backgroundImage = "url('" + images[2] + "')"; // 1.png
    }
    else if (etape === 5 && decor) {
        decor.style.backgroundImage = "url('" + images[3] + "')"; // 2.png
    }
    else if (etape === 6) {
        if (sonPersonnage) sonPersonnage.play();
        if (musique) musique.volume = 0.2;
    }
    else if (etape === 7) {
        if (musique) musique.volume = 1.0;
        if (sonPersonnage) sonPersonnage.pause();
        if (decor) decor.style.backgroundImage = "url('" + images[1] + "')";
    }
    else if (etape === 8 && machine) {
        machine.classList.add('machine-entree');
    }
    else if (etape === 9 && vortex) {
        vortex.classList.add('vortex-visible');
    }
    else if (etape === 10) {
        if (flash) flash.classList.add('flash-animation');
        setTimeout(() => {
            if (musique) musique.pause();
            if (decor) decor.style.backgroundImage = "url('" + images[0] + "')";
            if (machine) machine.classList.remove('machine-entree');
            if (vortex) vortex.classList.remove('vortex-visible');
            etape = 0;
        }, 500);
    }
}

// Double sécurité pour les contrôles
window.onclick = avancer;
window.onkeydown = (e) => { if(e.code === "Space") avancer(); };
