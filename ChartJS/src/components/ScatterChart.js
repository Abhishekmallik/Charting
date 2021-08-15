import React from 'react'
import {age} from '../data/age.js'
import {age_ethnic} from '../data/age ethnic.js'
import Chart from 'chart.js/auto';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';

export default class ScatterChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        Chart.register(zoomPlugin);
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'scatter',
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
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 100
                            }
                        }
                    ]
                }
            },
            data: {
                labels: age["boys"]["labels"],
                datasets: [
                          {
                              label: "Data1",
                              data: age_ethnic.data1,
                              backgroundColor: 'green',
                              borderColor: 'blue',
                              borderWidth: 1
                          },
                          {
                              label: "Data2",
                              data: age_ethnic.data2,
                              backgroundColor: 'red',
                              borderColor: 'orange',
                              borderWidth: 1
                          }
                        ]
            }
        });
    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}