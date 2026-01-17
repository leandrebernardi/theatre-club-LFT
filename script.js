const decor = document.getElementById('decor');
const machine = document.getElementById('machine');
const vortex = document.getElementById('vortex'); // Assure-toi d'avoir id="vortex" dans ton HTML

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://i.ytimg.com/vi/HQMrFOIGBls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgVgWAUtUFEAKCJpNPxd-Hqqf5AA",
    "https://i.pinimg.com/736x/27/2d/56/272d56698720250225df2645eb5fafe2.jpg"
];

let etape = 0; 

document.addEventListener('keydown', function(event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault(); 
        etape++;

        if (etape === 1) {
            // ÉTAPE 1 : La machine entre
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            // ÉTAPE 2 : Le vortex apparaît sur la machine
            vortex.classList.add('vortex-visible');
        } 
        else if (etape === 3) {
            // ÉTAPE 3 : La machine et le vortex disparaissent, le décor change
            decor.style.backgroundImage = "url('" + listeImages[1] + "')";
            machine.style.display = "none";
            vortex.style.display = "none";
        }
        else if (etape === 4) {
            // ÉTAPE 4 : Image suivante (le chiffre 3)
            decor.style.backgroundImage = "url('" + listeImages[2] + "')";
        }
    }
});
