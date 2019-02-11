let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);

let gridItems = document.getElementsByClassName("grid-item");


let gridClickHandler = (index) => {
    gridItems[index].classList.toggle("toggled");
}

for (let index = 0; index < gridItems.length; index++) {
    gridItems[index].addEventListener("click", () => {
        gridClickHandler(index)
    }, false)
    
}