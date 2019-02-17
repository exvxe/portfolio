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
    color =             d3.scaleLinear()
                        .domain([1,100])
                        .interpolate(d3.interpolateHcl)
                        .range([d3.rgb("#393E41"), d3.rgb('#FF0707')]),
    arcGenerator =      d3.arc()
                        .innerRadius(50)
                        .outerRadius(100);

arcData = d3.pie()
            .value(function(d) { return d.value; })
            (arcData);

d3.select('g')
.selectAll('path')
.data(arcData)
.enter()
.append('path')
.attr("fill", function(d) { return color(d.value*14) })
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
.data(arcData)
.enter().append("text")
.attr("class", "skillsText")
.append("textPath")
.attr("startOffset","50%")
.style("text-anchor","middle")
.attr("xlink:href",function(d,i){return "#skillsArc"+i;})
.text(function(d){return d.data.label;});