function showNotes(cell) {
    const div = document.getElementById("notes")

    div.innerHTML = `<h2>${cell}</h2>` + cellsData[cell]["notes"]
}