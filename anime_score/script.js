for (elt of animeData) {
    const animeCheckbox = document.createElement("input")
    animeCheckbox.setAttribute("class", "checkbox-input")
    animeCheckbox.setAttribute("type", "checkbox")
    animeCheckbox.setAttribute("id", elt.id)
    animeCheckbox.setAttribute("name", elt.id)

    animeCheckbox.addEventListener("change", updateScore)

    const animeLabel = document.createElement("label");
    const animeLabelText = document.createTextNode(elt.fullName);
    animeLabel.appendChild(animeLabelText);

    const checkboxBlock = document.createElement("div")
    checkboxBlock.appendChild(animeCheckbox)
    checkboxBlock.appendChild(animeLabel)

    document.getElementById("animeList").appendChild(checkboxBlock);
}

function updateScore() {
    score = Array.from(
        document.getElementsByClassName("checkbox-input")
    ).map(
        checkbox => checkbox.checked
    ).reduce((partialSum, b) => partialSum + b, 0)

    document.getElementById("score").innerHTML = score
}