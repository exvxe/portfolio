let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);

    
var json = [
    { "name": "Cezary", "age": 25 },
    { "name": "Franek", "age": 11 },
    { "name": "Bartek", "age": 29 },
];

function createAList(data) {
    d3.select(".techs")
    .append("ul")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function (d) {
        return d.name + ": " + d.age;
    })
}

function changeList() {
    d3.selectAll("li")
        .style("font-weight", function (d) {

            if (d.age < 21) {
                return "normal";
            } else {
                return "bold";
            }
    })
}

createAList(json);