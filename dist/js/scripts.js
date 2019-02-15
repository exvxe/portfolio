let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);

var json = [
    { "name": "Cezary", "age": 25 },
    { "name": "Franek", "age": 11 },
    { "name": "Bartek", "age": 29 },
];

var pi = Math.PI;
    
let arc = (d) => {
    d3.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(0 * (pi/180)) //converting from degs to radians
    .endAngle(d.age * (pi/180)) //just radians
}
    
    
    

d3.select(".techs")
.attr("width", "400")
.attr("height", "400")
.append("svg")
.data(json)
.enter()
.append("path")
.arc()
.attr("fill", "red")
.attr("transform", "translate(200,200)");