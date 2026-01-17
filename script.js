// 1. On cible l'élément HTML qui contient le décor
const decor = document.getElementById('decor');

// 2. Ta liste d'images (le café, puis les deux autres)
const listeImages = [
    "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I=",
    "https://i.ytimg.com/vi/HQMrFOIGBls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgVgWAUtUFEAKCJpNPxd-Hqqf5AA",
    "https://i.pinimg.com/736x/27/2d/56/272d56698720250225df2645eb5fafe2.jpg"
];

// 3. On commence à 0 (l'image du café qui est déjà affichée via le CSS)
let indexActuel = 0; 

// 4. La fonction qui écoute ton clavier
document.addEventListener('keydown', function(event) {
    
    // On vérifie si la touche est bien la barre d'espace
    if (event.key === " " || event.code === "Space") {
        
        // On augmente l'index pour passer à l'image suivante
        indexActuel = indexActuel + 1;

        // On vérifie qu'on n'a pas dépassé la fin de la liste
        if (indexActuel < listeImages.length) {
            // On change l'image de fond
            decor.style.backgroundImage = "url('" + listeImages[indexActuel] + "')";
            console.log("Changement vers l'image n°" + (indexActuel + 1));
        } else {
            // Si on est à la fin, on peut décider de revenir au début (facultatif)
            console.log("Fin de la séquence de décors.");
            
            /* DECOMMENTE LES 2 LIGNES CI-DESSOUS POUR RECOMMENCER EN BOUCLE : */
            // indexActuel = 0;
            // decor.style.backgroundImage = "url('" + listeImages[0] + "')";
        }
    }
});
