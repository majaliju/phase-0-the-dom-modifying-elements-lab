const main = document.getElementById("main")
main.remove()


// need a cleaner way to do this
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
newHeader.textContent = "MAJLIND is the champion"
document.body.append(newHeader)

