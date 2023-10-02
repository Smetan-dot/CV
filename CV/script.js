const hardSkillsChart = document.getElementById('hard-skills-chart');
const softSkillsChart = document.getElementById('soft-skills-chart');
console.clear();

const hardData = {
    labels: ['HTML', 'CSS/SCSS', 'JS/TS', 'GitHub', 'Eslint/Prettier', 'Webpack', 'Figma'],
    datasets: [{
        data: [75, 75, 85, 90, 70, 65, 60],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}

const softData = {
    labels: ['Team work', 'Learning ability', 'Communication', 'Emotional intellect', 'Self-organization', 'Planning', 'Critical thinking'],
    datasets: [{
        data: [80, 90, 50, 60, 90, 85, 80],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}

function craeteChart(container, data) {
    new Chart(container, {
        type: 'radar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    
                    ticks: {
                        count: 10,
                        stepSize: 10,
                        display: false
                    },
                    grid: {
                        color: 'rgb(25, 200, 125)'
                    },
                }
            },
            elements: {
                line: {
                  borderWidth: 3
                }
            }
        }
    });
}

craeteChart(hardSkillsChart, hardData);
craeteChart(softSkillsChart, softData);