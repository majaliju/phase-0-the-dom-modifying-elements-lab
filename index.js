const main = document.getElementById("main")
main.remove()


// need a cleaner way to do this
const newHeader = document.createElement("h1")
document.body.append(newHeader)

newHeader.setAttribute("id", "victory")