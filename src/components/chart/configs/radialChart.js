const radialChart = {
    series: [95, 70, 30, 35], // Percentage values for radial bars
    options: {
        chart: {
            type: 'radialBar',
            height: 350,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '35%',    // Adjust the inner radius (hollow center)
                    background:'#f0f0f0',
                },
                track: {
                    background: '#fafafa', // Track background color
                    strokeWidth: '100%', // Width of the track (the path behind the bar)
                },
                dataLabels: {
                    show: false,   // Hide the percentage label inside the chart
                },
                
            },
        },
        labels: ['Fresh Self', 'Frozen Self', 'Fresh Donor', 'Frozen Donor'], // Labels for the radial bars
        fill: {
            colors: ['#37C577', '#3768C5', '#EC9D3E', '#C5B037'], // Customize the colors
        },
        stroke: {
            lineCap: 'round',  // This makes the ends of the bars rounded
          },
        legend: {
            show: false,
            position: 'top', // Position the legend at the top
        },
        tooltip: {
            enabled: false, // Disable tooltips
        },
    },
};

export default radialChart;
