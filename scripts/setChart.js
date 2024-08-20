let category = ["19:00", "19:10", "19:20", "19:30", "19:40"];
var options = {
    chart: {
        type: "area",
        id: "myChart",
        fontFamily: "raleway",
    },
    series: [
        {
            name: "bitcoin",
            data: [10_000, 20_000, 30_000, 40_000, 50_000],
        },
    ],
    xaxis: {
        categories: category,
        axisBorder: {
            show: true,
            color: "#31353F",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {},
    dataLabels: {
        enabled: false,
    },
    colors: ["#3A6FF8"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.3,
            stops: [0, 100],
        },
    },
    grid: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart-BTC"), options);

const $ = document;
const chartDuration = $.querySelector(".chart__computing-duration");
const chartDurationSpan = $.querySelectorAll(".chart__computing-duration span");

const dat = {
    "1h": [70_000, 20_000, 34_000, 90_000, 50_000],
    "3h": [20_000, 67_000, 3_000, 45_000, 105_000],
    "1d": [90_000, 20_000, 23_000, 90_000, 60_000],
    "1w": [70_000, 10_000, 44_000, 130_000, 150_000],
    "1m": [45_000, 20_000, 34_000, 50_000, 50_000],
};
// console.log(chartDurationSpan)
const removeActiveBtn = () => {
    document
        .querySelector(".duration--active")
        .classList.remove("duration--active");
};
chartDuration?.addEventListener("click", (e) => {
    const { target } = e;

    if (target.tagName == "SPAN") {
        removeActiveBtn();
        target.classList.add("duration--active");

        ApexCharts.exec(
            "myChart",
            "updateSeries",
            [
                {
                    data: dat[target.innerHTML],
                },
            ],
            true
        );
    }
});

chart.render();
let themeLocalStorage = localStorage.getItem("theme");
let labelsColor = themeLocalStorage === "dark" ? "#9E9E9E" : "#353E4D";
console.log(themeLocalStorage, labelsColor);

ApexCharts.exec(
    "myChart",
    "updateOptions",
    {
        xaxis: {
            categories: category,
            labels: {
                style: {
                    colors: labelsColor,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: labelsColor,
                },
            },
        },
    },
    false,
    true,
    false
);
const ctx = document.getElementById("graph-1");
const ctx2 = document.getElementById("graph-2");
const ctx3 = document.getElementById("graph-3");

new Chart(ctx, {
    type: "bar",

    data: {
        labels: ["M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: "# of Votes",
                data: [5, 20, 40, 60, 20, 40],
                borderWidth: 0,
                backgroundColor: "#fff",
                borderRadius: 20,
                maxBarThickness: 10,
            },
        ],
    },
    options: {
        response:true,
        colors:'#fff',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                    color:'#fff',
                    font:{
                        size:12,
                        family:"raleway",
                        weight:400,
                    },
                },
               grid:{
                tickColor:false,
                color:'#fff',
                drawBorder:false,
                drawOnChartArea:true,
                drawTicks:false
               },
               border:{
                dash:[5,5]
               }
            },
            x:{
                ticks:{
                    color:'#fff',
                    font:{
                        size:12,
                        family:"raleway",
                        weight:400,
                    },
                },
                grid:{
                    tickColor:false,
                    color:'#fff',
                    drawBorder:false,
                    drawOnChartArea:true,
                    drawTicks:false
                   },
                   border:{
                    dash:[5,5]
                   }
            },
            
            
        },
        
    
    },
});

function setChart(ctx){
    new Chart(ctx, {
        type: "line",
    
        data: {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep",'Oct','Nov','Dec'],
            datasets: [
                {
                    label: "# of Votes",
                    data: [500, 200, 400, 600, 100, 300,150,210,340],
                    borderWidth: 4,
                    borderColor:'#fff',
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    maxBarThickness: 10,
                },
            ],
        },
        options: {
            response:true,
            colors:'#fff',
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks:{
                        color:'#fff',
                        font:{
                            size:12,
                            family:"raleway",
                            weight:400,
                            
                        },
                    },
                   grid:{
                    tickColor:false,
                    color:'#fff',
                    drawBorder:false,
                    drawOnChartArea:true,
                    drawTicks:false,
                   
                   },
                   border:{
                    dash:[5,5]
                   }
                },
                x:{
                    ticks:{
                        color:'#fff',
                        font:{
                            size:12,
                            family:"raleway",
                            weight:400,
                        },
                    },
                    grid:{
                        tickColor:false,
                        color:'#fff',
                        drawBorder:false,
                        drawOnChartArea:true,
                        drawTicks:false,
                        display:false
                       },
                       border:{
                        dash:[5,5]
                       }
                },
                
                
            },
            
        
        },
    });
}
setChart(ctx2)
setChart(ctx3)