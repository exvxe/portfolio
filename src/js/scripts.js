let resetScroll = () => {
    window.scrollTo(0, 0);
}

window.setTimeout(resetScroll, 1000);


let arcData = [
                {label: 'HTML5', value: 7},
                {label: 'CSS3', value: 9},
                {label: 'Stylus', value: 8},
                {label: 'D3.js', value: 4},
                {label: 'Photoshop', value: 10}
            ],
    color = [ 'F2806A', '#F17259', 'F06449', 'DB5B43', '#C5D4AF', '#BECFA5', '#B7CA9B', '#B0C592']
    arcGenerator =      d3.arc()
                        .innerRadius(120)
                        .outerRadius(160);

arcData = d3.pie()
            .value(function(d) { return d.value; })
            (arcData);

d3.select('g')
.selectAll('path')
.data(arcData)
.enter()
.append('path')
.attr("fill", function(d) { return color[d.value] })
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