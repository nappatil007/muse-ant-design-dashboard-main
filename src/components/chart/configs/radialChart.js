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
                    size: '35%', // Adjust the inner radius (hollow center)
                },
                track: {
                    background: '#fff', // Track background color
                    strokeWidth: '100%', // Width of the track (the path behind the bar)
                },
            },
        },
        labels: ['Fresh Self', 'Frozen Self', 'Fresh Donor', 'Frozen Donor'], // Labels for the radial bars
        fill: {
            colors: ['#37C577', '#3768C5', '#EC9D3E', '#C5B037'], // Customize the colors
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
