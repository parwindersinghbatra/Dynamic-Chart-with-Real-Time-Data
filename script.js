  const ctx = document.getElementById('myChart');

// const resultarray = arr.push(Array.from({length: 6}, () => Math.floor(Math.random() * 6)))


const labels = [];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};


let chart = new Chart(ctx, config)

// console.log(chart.data.labels)
// chart.data.labels.push("Parwinder") 
// chart.data.datasets[0].data.push(70)

// chart.data.labels.push("Ishmeet") 
// chart.data.datasets[0].data.push(80)

// chart.data.labels.push("Maninder") 
// chart.data.datasets[0].data.push(50)

function chartUpdate(){
chart.data.labels.push(chart.data.labels.length+1) 
chart.data.datasets[0].data.push(Math.random()*100)
chart.update()
}

setInterval(chartUpdate,1000)