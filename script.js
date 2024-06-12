
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
            tileElement.addEventListener("click", () => moveTile(index));
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

    // fonction qui defini le deplacement valide

    function moveTile(index) {
        // stocker trouver l'index de la case vide
        const emptyIndex = cases.indexOf("");
        const validMoves = [
            index - 1,    // gauche
            index + 1,    // droite
            index - puzzleSize, // haut
            index + puzzleSize  // bas
        ];

        if (validMoves.includes(emptyIndex)) {
            [cases[index], cases[emptyIndex]] = [cases[emptyIndex], cases[index]];
            updatePuzzle();
            Winner();
        }
    }
    // mettre a jour la position apres un deplacement valide

    function updatePuzzle() {
        const tileElements = puzzleContainer.children;
        cases.forEach((tile, index) => {
            tileElements[index].textContent = tile;
            tileElements[index].className = "puzzle-tile";
            if (tile === "") {
                tileElements[index].classList.add("empty");
            }
        }); 
    }

    function Winner(){
        var a = 0;
        cases.forEach((tile, index) => {
            console.log("Tile : " + tile);
            console.log("Index : " + (index+1));
            if(tile == index+1){
                a++;
            }
            if(a==8){
                messageGagnant.classList.add('active')
                return;
            }
        });
    }
    createPuzzle();
});
