import React from "react";
import Chart from 'chart.js/auto';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';

export default class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        Chart.register(zoomPlugin);
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'doughnut',
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
                maintainAspectRatio: false
            },
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }]
            }
        });

    }


    render() {
        return <canvas ref={this.canvasRef} />;
    }
}