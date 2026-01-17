// On récupère l'élément du décor
const decor = document.getElementById('decor');

// Le lien de la nouvelle image (ton lien YouTube)
const nouvelleImage = "https://i.ytimg.com/vi/HQMrFOIGBls/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgVgWAUtUFEAKCJpNPxd-Hqqf5AA";

// On écoute les touches du clavier
document.addEventListener('keydown', function(event) {
    // Si la touche pressée est "Espace" (nommée " ")
    if (event.key === " ") {
        // On change l'image de fond du décor
        decor.style.backgroundImage = "url('" + nouvelleImage + "')";
        console.log("Changement de décor effectué !");
    }
});