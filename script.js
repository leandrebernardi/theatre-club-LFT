const decor = document.getElementById('decor');
const machine = document.getElementById('machine');

const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://i.ytimg.com/vi/HQMrFOIGBls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgVgWAUtUFEAKCJpNPxd-Hqqf5AA",
    "https://i.pinimg.com/736x/27/2d/56/272d56698720250225df2645eb5fafe2.jpg"
];

let etape = 0; 

document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        etape++;

        if (etape === 1) {
            // La machine glisse depuis la droite sur l'image 1
            machine.classList.add('machine-entree');
        } 
        else if (etape === 2) {
            // L'image 1 devient l'image 2 ET la machine devient invisible
            decor.style.backgroundImage = "url('" + listeImages[1] + "')";
            machine.classList.add('machine-cachee'); 
        } 
        else if (etape === 3) {
            // Passage à l'image 3
            decor.style.backgroundImage = "url('" + listeImages[2] + "')";
        }
    }
});
