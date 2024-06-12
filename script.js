
document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.getElementById("puzzle");
    const messageGagnant = document.querySelector(".titre")
    const puzzleSize = 3; // Changer la taille du puzzle à 3
    let cases = [];

    function createPuzzle() {
        // Créer des cases avec les numéros 1 à 8 et une tuile vide
        for (let i = 1; i < puzzleSize * puzzleSize; i++) {
            cases.push(i);
        }
        cases.push(""); // Ajouter la case vide

        // Mélanger les cases
        melangeCases(cases);

        // Créer des éléments HTML pour chaque case 
        cases.forEach((tile, index) => {
            const tileElement = document.createElement("div");
            tileElement.className = "puzzle-tile";
            tileElement.textContent = tile;
            if (tile === "") {
                tileElement.classList.add("empty");
            }
            puzzleContainer.appendChild(tileElement);
        });
    }
// fonction pour melanger les cases
    function melangeCases(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // j est entre 1 et 3
            // on echange les valeurs des cases
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    createPuzzle();
});
