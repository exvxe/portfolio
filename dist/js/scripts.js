let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);

let splitter = () => {
    let headerText = document.querySelector('.header_wrapper > h1')

    let headerTextSplited = headerText.innerText.split(' ');
    headerText.innerHTML = headerTextSplited.map(function(x) {
        return "<span class='word'>" + x + "</span> ";
    }).join("");
    
    document.querySelector('.word:nth-of-type(1)').outerHTML += "<br>"
    
    let headerLastWord = document.querySelector('.word:nth-last-of-type(1)')
    
    headerLastWord.innerHTML = "<a href='#techs'>" + headerLastWord.innerText + "</a>"
}

splitter()