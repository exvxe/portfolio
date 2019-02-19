let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);


let arcData = [
                {label: 'Research', value: 10},
                {label: 'HTML5', value: 7},
                {label: 'Javascript', value: 6},
                {label: 'jQuery', value: 4},
                {label: 'D3.js', value: 3},
                {label: 'CSS3', value: 9},
                {label: 'Stylus', value: 8},
                {label: 'Sass', value: 7},
                {label: 'Bootstrap', value: 6},
                {label: 'Photoshop', value: 10}
            ],
    color = [ '#D5A021', '#2F333C', '#181C26', '#010611', '#010610', '#C5D4AF', '#BECFA5', '#B7CA9B', '#B0C592']
    arcGenerator =      d3.arc()
                        .innerRadius(120)
                        .outerRadius(200);

arcData = d3.pie()
            .value(function(d) { return d.value; }).sort(null)
            (arcData);

d3.select('g')
.selectAll('path')
.data(arcData)
.enter()
.append('path')
.attr("fill", function(d) { return color[d.index] })
.attr('d', arcGenerator)
.attr("id", function(d,i) { return "skillsArcSlice_"+i; })
.each(function(d,i) {
    var firstArcSection = /(^.+?)L/;

    var newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];
    newArc = newArc.replace(/,/g , " ");
    d3.select('g').append("path")
        .attr("class", "hiddenSkillsArcs")
        .attr("id", "skillsArc"+i)
        .attr("d", newArc)
        .style("fill", "none");
});


d3.select('g')
.selectAll('hiddenSkillsArcs')
.data(arcData)
.enter()
.append("text")
.attr("dy","-5px")
.attr("dx","8px")
.append("textPath")
.attr("class", "skillsText")
.attr("xlink:href",function(d,i){return "#skillsArcSlice_"+i;})
.text(function(d){return d.data.label;});