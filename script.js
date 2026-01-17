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

        if (etape === 1) {
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            vortex.classList.add('vortex-visible');
        } 
        else if (etape === 3) {
            // Déclenche le flash de 3s
            flash.classList.add('flash-animation');
            
            // On change le décor quand le flash est au plus fort (0.3s)
            setTimeout(() => {
                decor.style.backgroundImage = "url('" + listeImages[1] + "')";
                machine.style.display = "none";
                vortex.style.display = "none";
            }, 300);

            // On retire la classe après les 3s pour pouvoir recommencer
            setTimeout(() => {
                flash.classList.remove('flash-animation');
            }, 3000);
        }
        else if (etape === 4) {
            decor.style.backgroundImage = "url('" + listeImages[2] + "')";
        }
    }
});
