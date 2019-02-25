let resetScroll = () => {
    window.scrollTo(0, 0);
}

let splitter = () => {
    let headerText = document.querySelector('.header_wrapper > h1')
    
    let headerTextSplited = headerText.innerText.split(' ');
    headerText.innerHTML = headerTextSplited.map(function(x) {
        return "<span class='word'>" + x + "</span> ";
    }).join("");
    
    document.querySelector('.word:nth-of-type(1)').outerHTML += "<br>"
    
}

let mobileHeight = () => {
    let vh = window.innerHeight * 0.01;
    
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });    
}

let startFunction = () => {
    window.setTimeout(resetScroll, 1000);
    splitter();
    mobileHeight();
}
