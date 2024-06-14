const ctx = document.getElementById('realTimeChart').getContext('2d');
let chart;

// Initial data
const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
    }],
};

// Chart configuration
const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
                grid: {
                    color: 'blue', // Change gridline color for x-axis
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
                grid: {
                    color: 'blue', // Change gridline color for x-axis
                },
            },
        },
        animation: false,
    },
};

// Initialize the chart
chart = new Chart(ctx, chartConfig);

// Function to add random data
function addData() {
    const newData = Math.random() * 100; // Generate random data
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update(); // Update the chart
}

chartConfig.data.datasets[0].borderColor = 'black';
// Add data at regular intervals (e.g., every 1 second)
setInterval(addData, 1000);