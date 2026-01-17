// On récupère l'élément du décor
const decor = document.getElementById('decor');

// On crée la liste de tes images dans l'ordre
const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=", // Image 1 (Café)
    "https://i.ytimg.com/vi/HQMrFOIGBls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgVgWAUtUFEAKCJpNPxd-Hqqf5AA", // Image 2
    "https://i.pinimg.com/736x/27/2d/56/272d56698720250225df2645eb5fafe2.jpg" // Image 3
];

let indexActuel = 0; // On commence à la première image

// On écoute la barre d'espace
document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        // On passe à l'image suivante
        indexActuel = indexActuel + 1;

        // Si on dépasse la dernière image, on peut revenir au début ou rester sur la dernière
        if (indexActuel < listeImages.length) {
            decor.style.backgroundImage = "url('" + listeImages[indexActuel] + "')";
            console.log("Décor suivant affiché !");
        } else {
            console.log("Fin des décors prévus.");
            // Optionnel : décommente la ligne suivante pour revenir au début :
            // indexActuel = 0; decor.style.backgroundImage = "url('" + listeImages[0] + "')";
        }
    }
});
