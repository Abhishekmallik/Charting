import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        Chart.register(zoomPlugin);
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            options: {
                plugins: {
                    zoom: {
                        zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                        }
                    }
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'week'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 5
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map(d => d.time),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        });
    }
    render() {
        return <>
            <canvas ref={this.canvasRef} />
            {/* <button onClick = {resetZoom(this.myChart)}>Reset</button> */}
        </>
    }
}

// export default class LineChart extends Component {
//     chartRef = React.createRef();
//     componentDidMount() {
//         const ctx = this.chartRef.current.getContext("2d");

//         new Chart(ctx, {
//             type: "line",
//             data: {
//                 labels: ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"],
//                 datasets: [{
//                     data: [86, 114, 106, 106, 107, 111, 133],
//                     label: "Total",
//                     borderColor: "#3e95cd",
//                     backgroundColor: "#7bb6dd",
//                     fill: false,
//                 }, {
//                     data: [70, 90, 44, 60, 83, 90, 100],
//                     label: "Accepted",
//                     borderColor: "#3cba9f",
//                     backgroundColor: "#71d1bd",
//                     fill: false,
//                 }, {
//                     data: [10, 21, 60, 44, 17, 21, 17],
//                     label: "Pending",
//                     borderColor: "#ffa500",
//                     backgroundColor: "#ffc04d",
//                     fill: false
//                 }, {
//                     data: [6, 3, 2, 2, 7, 0, 16],
//                     label: "Rejected",
//                     borderColor: "#c45850",
//                     backgroundColor: "#d78f89",
//                     fill: false
//                 }
//                 ]
//             }
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <canvas
//                     id="myChart"
//                     ref={this.chartRef}
//                 />
//             </div>
//         )
//     }
// }