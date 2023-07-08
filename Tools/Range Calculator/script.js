// Get the form and result elements
const calculatorForm = document.getElementById('calculatorForm');
const resultsSection = document.getElementById('results');
const resultValues = document.getElementById('resultValues');

// ...

// Add event listener to the form for calculation
calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // ...

  // Update the result elements
  timeToMaxElevation.textContent = `Time to reach max. elevation (s): ${timeToMax.toFixed(2)}`;
  totalFlightTime.textContent = `Time for total flight (s): ${totalTime.toFixed(2)}`;
  maxElevation.textContent = `Max. elevation (m): ${maxElev.toFixed(2)}`;
  flightDistance.textContent = `Flight distance (m): ${flightDist.toFixed(2)}`;

  resultsSection.style.display = 'block'; // Show the results section
});

// ...

// Chart.js configuration
const chartConfig = {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Projectile Path',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        type: 'linear',
        position: 'left'
      }
    }
  }
};

// Chart.js instance
const chartCanvas = document.getElementById('chartCanvas');
const chartContext = chartCanvas.getContext('2d');
let projectileChart; // Declare the chart variable

// Add event listener to the form for calculation
calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
  const initialAngle = parseFloat(document.getElementById('initialAngle').value);

  // Calculate the time to reach maximum elevation
  const timeToMax = initialVelocity * Math.sin(degreesToRadians(initialAngle)) / 9.8;

  // Calculate the total flight time
  const totalTime = 2 * timeToMax;

  // Calculate the maximum elevation
  const maxElev = Math.pow(initialVelocity, 2) * Math.pow(Math.sin(degreesToRadians(initialAngle)), 2) / (2 * 9.8);

  // Calculate the flight distance
  const flightDist = Math.pow(initialVelocity, 2) * Math.sin(degreesToRadians(2 * initialAngle)) / 9.8;

  // Update the result elements
  timeToMaxElevation.textContent = `Time to reach max. elevation (s): ${timeToMax.toFixed(2)}`;
  totalFlightTime.textContent = `Time for total flight (s): ${totalTime.toFixed(2)}`;
  maxElevation.textContent = `Max. elevation (m): ${maxElev.toFixed(2)}`;
  flightDistance.textContent = `Flight distance (m): ${flightDist.toFixed(2)}`;

  if (!projectileChart) {
    // Create the chart if it doesn't exist
    projectileChart = new Chart(chartContext, chartConfig);
  }

  // Generate data points for the projectile's path
  const dataPoints = generatePathData(initialVelocity, initialAngle, totalTime, 100);

  // Update the chart data
  projectileChart.data.labels = dataPoints.map((point, index) => index * (totalTime / 100));
  projectileChart.data.datasets[0].data = dataPoints;

  // Update the chart
  projectileChart.update();

  resultsSection.style.display = 'block'; // Show the results and chart
});

// Helper function to convert degrees to radians
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Helper function to generate data points for the projectile's path
function generatePathData(initialVelocity, initialAngle, totalTime, numPoints) {
  const dataPoints = [];
  const timeInterval = totalTime / numPoints;

  for (let t = 0; t <= totalTime; t += timeInterval) {
    const x = initialVelocity * Math.cos(degreesToRadians(initialAngle)) * t;
    const y = initialVelocity * Math.sin(degreesToRadians(initialAngle)) * t - 0.5 * 9.8 * Math.pow(t, 2);

    dataPoints.push({ x, y });
  }

  return dataPoints;
}

