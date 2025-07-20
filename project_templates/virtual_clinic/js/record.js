// Creating the medical data charts for the patient. When the chart display options are changed, or when the page is loaded for the first time, the charts are updated. The default display option is the past six visits.
document.addEventListener("DOMContentLoaded", updateChart());

const chartsopen = document.getElementById('chartsopen');
const consultsopen = document.getElementById('consultsopen');
const ptinfoopen = document.getElementById('ptinfoopen');
const chartsclose = document.getElementById('chartsclose');
const consultsclose = document.getElementById('consultsclose');
const ptinfoclose = document.getElementById('ptinfoclose');

chartsopen.addEventListener('click', (e) => {
    document.getElementById('charts').style.display = 'block';
    document.getElementById('chartsdrawer').style.display = 'none';
});
consultsopen.addEventListener('click', (e) => {
    document.getElementById('consults').style.display = 'block';
    document.getElementById('consultsdrawer').style.display = 'none';
});
ptinfoopen.addEventListener('click', (e) => {
    document.getElementById('ptinfo').style.display = 'block';
    document.getElementById('ptinfodrawer').style.display = 'none';
});

chartsclose.addEventListener('click', (e) => {
    document.getElementById('charts').style.display = 'none';
    document.getElementById('chartsdrawer').style.display = 'flex';
});
consultsclose.addEventListener('click', (e) => {
    document.getElementById('consults').style.display = 'none';
    document.getElementById('consultsdrawer').style.display = 'flex';
});
ptinfoclose.addEventListener('click', (e) => {
    document.getElementById('ptinfo').style.display = 'none';
    document.getElementById('ptinfodrawer').style.display = 'flex';
});
// Chart updates based on the number of consultations selected by the user
document.getElementById('displayno').addEventListener('change', (e) => {updateChart();})

function updateChart() {
    // Selected number of past consultations
    let displayNo = parseInt(document.getElementById("displayno").value);
    //Empty arrays and let them be replaced by the new set of data requested
    let bpsys = [120, 115, 117, 119, 120, 121, 123, 118, 110]; 
    let bpdia = [80, 75, 77, 79, 80, 81, 83, 78, 70]; 
    let spo2 = [97, 99, 97, 98, 94, 99, 92, 95, 98]; 
    let hr = [74, 72, 70, 73, 74, 78, 75, 78, 80]; 
    let glucose = []; 
    let weight = [65, 64, 66, 63, 66, 65, 64, 66, 65]; 
    let date = ['2025-07-18', '2025-01-15', '2024-06-18', '2023-09-04', '2021-01-09', '2020-12-03', '2020-11-24', '2020-11-19', '2020-05-09',];
    bpsys = bpsys.reverse();
    bpdia = bpdia.reverse();
    spo2 = spo2.reverse();
    hr = hr.reverse();
    weight = weight.reverse();
    date = date.reverse();
    // Cutting down arrays to the last 3, 6, or 9 data points. Only completes this action if the user has more consultations than the requested display value. if not, the chart displays all consultations.
    if (displayNo == 3) {
        bpsys = bpsys.slice(-3);
        bpdia = bpdia.slice(-3);
        spo2 = spo2.slice(-3);
        hr = hr.slice(-3);
        glucose = glucose.slice(-3);
        weight = weight.slice(-3);
        date = date.slice(-3);
    }
    else if (displayNo == 6) {
        bpsys = bpsys.slice(-6);
        bpdia = bpdia.slice(-6);
        spo2 = spo2.slice(-6);
        hr = hr.slice(-6);
        glucose = glucose.slice(-6);
        weight = weight.slice(-6);
        date = date.slice(-6);
    }
    else if (displayNo == 9) {
        bpsys = bpsys.slice(-9);
        bpdia = bpdia.slice(-9);
        spo2 = spo2.slice(-9);
        hr = hr.slice(-9);
        glucose = glucose.slice(-9);
        weight = weight.slice(-9);
        date = date.slice(-9);
    }

    // Removing old instances of charts, if they exist
    if (Chart.getChart('chart1') != undefined) {
        Chart.getChart('chart1').destroy();
    }
    if (Chart.getChart('chart2') != undefined) {
        Chart.getChart('chart2').destroy();
    }
    if (Chart.getChart('chart3') != undefined) {
        Chart.getChart('chart3').destroy();
    }
    if (Chart.getChart('chart4') != undefined) {
        Chart.getChart('chart4').destroy();
    }
    if (Chart.getChart('chart5') != undefined) {
        Chart.getChart('chart5').destroy();
    }
    // Creating new charts
    let ctx1 = document.getElementById("chart1").getContext("2d");
    let chart1 = new Chart(ctx1, {
        type: "line",
        data: {
        labels: date,
        datasets: [
            {
                label: "Blood Oxygen Level (%)",
                fill: false,
                borderColor: "#8d99ae",
                data: spo2,
            }
        ]
        },
        options: {
            title: {
                text: "Blood Oxygen Level",
                display: true
            },
            scales: {
                y: {
                    display: true,
                    ticks: {
                        suggestedMin: 80,
                        maxTicksLimit: 3,
                    }
                }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                    },
                    zoom: {
                        enabled: true,
                    }
                }
            },
        }
    });
    let ctx2 = document.getElementById("chart2").getContext("2d");
    let chart2 = new Chart(ctx2, {
        type: "line",
        data: {
        labels: date,
        datasets: [
            {
                label: "Heart Rate (bpm)",
                fill: false,
                borderColor: "#3f6c51",
                data: hr
            }
        ]
        },
        options: {
            title: {
                text: "Heart Rate",
                display: true
            },
            scales: {
                y: {
                    display: true,
                    ticks: {
                        suggestedMin: 80,
                        maxTicksLimit: 3,
                    }
                }
            },
        }
    });
    let ctx3 = document.getElementById("chart3").getContext("2d");
    let chart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: date,
            datasets: [
            {
                label: "SYS",
                fill: false,
                borderColor: "#af5d63",
                data: bpsys
            },
            {
                label: "DIA",
                fill: false,
                borderColor: "blue",
                data: bpdia
            }
        ]
        },
        options: {
            title: {
                text: "Blood Pressure",
                display: true
            },
            scales: {
                y: {
                    display: true,
                    ticks: {
                        suggestedMin: 80,
                        maxTicksLimit: 3,
                    }
                }
            },
        }
    });
    let ctx4 = document.getElementById("chart4").getContext("2d");
    let chart4 = new Chart(ctx4, {
        type: "line",
        data: {
        labels: date,
        datasets: [
            {
                label: "Glucose (mmol/L)",
                fill: false,
                borderColor: "#2b2d42",
                data: glucose
            }
        ]
        },
        options: {
            title: {
                text: "Glucose",
                display: true
            },
            scales: {
                y: {
                    display: true,
                    ticks: {
                        suggestedMin: 80,
                        maxTicksLimit: 3,
                    }
                }
            },
        }
    });
    let ctx5 = document.getElementById("chart5").getContext("2d");
    let chart5 = new Chart(ctx5, {
        type: "line",
        data: {
        labels: date,
        datasets: [
            {
                label: "Weight (kg)",
                fill: false,
                borderColor: "#FFA500",
                data: weight
            }
        ]
        },
        options: {
            title: {
                text: "Weight",
                display: true
            },
            scales: {
                y: {
                    display: true,
                    ticks: {
                        suggestedMin: 150,
                        maxTicksLimit: 3,
                    }
                }
            },
        }
    });
}