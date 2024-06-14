document.addEventListener('DOMContentLoaded', function() {
    // Select the container div
    const container = d3.select('#container');

    // Define data points (for simplicity, let's create 10 divs)
    const data = Array.from({ length: 10 }, (_, i) => i + 1);

    // Create div elements for the data points
    container.selectAll('.data-point')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'data-point')
        .text(d => d)  // Display the data point value in the div
        .on('mouseover', function() {
            // Change background color on hover
            d3.select(this).style('background-color', 'firebrick');
         })
        .on('mouseout', function() {
             // Revert background color when mouse leaves
            d3.select(this).style('background-color', 'lightblue');
         });
 });