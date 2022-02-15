setTimeout(function() {
    $("#subscribeModal").modal("show")
}, 2e3);
var options = {
        chart: {
            height: 360,
            type: "bar",
            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "20px",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            name: "Series A",
            data: [44, 55, 41, 67, 22, 43, 36]
        }, {
            name: "Series B",
            data: [13, 23, 20, 8, 13, 27, 18]
        }, {
            name: "Series C",
            data: [11, 17, 15, 15, 21, 14, 11]
        }],
        xaxis: {
            categories: ["Sat", "Sun", "Mon", "Tuh", "Wed", "Thu", "Fri"]
        },
        colors: ["#556ee6", "#f1b44c", "#34c38f"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        }
    },
    chart = new ApexCharts(document.querySelector("#stacked-column-chart"), options);
chart.render();
options = {
    chart: {
        height: 200,
        type: "radialBar",
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: "13px",
                    color: void 0,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: "16px",
                    color: void 0,
                    formatter: function(e) {
                        return e + "%"
                    }
                }
            }
        }
    },
    colors: ["#556ee6"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            shadeIntensity: .15,
            inverseColors: !1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        }
    },
    stroke: {
        dashArray: 4
    },
    series: [67],
    labels: ["Series A"]
};
(chart = new ApexCharts(document.querySelector("#radialBar-chart"), options)).render();