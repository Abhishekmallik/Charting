import React from 'react';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BarChart = () => {
  return <div>
              <Bar 
                  data = {{
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [
                          {
                              label: "# of votes",
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: 'blue',
                              borderColor: 'green',
                              borderWidth: 1
                          },
                          {label: "Quantity",
                          data: [10, 14, 6, 5, 9, 5],
                          backgroundColor: "orange",
                          borderColor: 'red'}
                        ]
                      }}
                      height = {window.innerHeight/3}
                      width = {window.innerWidth/3}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false
                      }}
                  />
                  <Line 
                  data = {{
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [
                          {
                              label: "# of votes",
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: 'blue',
                              borderColor: 'green',
                              borderWidth: 1
                          },
                          {label: "Quantity",
                          data: [10, 14, 6, 5, 9, 5],
                          backgroundColor: "orange",
                          borderColor: 'red'}
                        ]
                      }}
                      height = {window.innerHeight/3}
                      width = {window.innerWidth/3}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false
                      }}
                  />
                  <Doughnut 
                  data = {{
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [
                          // {
                          //     label: "# of votes",
                          //     data: [12, 19, 3, 5, 2, 3],
                          //     backgroundColor: 'blue',
                          //     borderColor: 'green',
                          //     borderWidth: 1
                          // },
                          {label: "Quantity",
                          data: [10, 14, 6, 5, 9, 5],
                          backgroundColor: "orange",
                          borderColor: 'red'}
                        ]
                      }}
                      height = {window.innerHeight/3}
                      width = {window.innerWidth/3}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false
                      }}
                  />
                  <Pie 
                  data = {{
                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                      datasets: [
                          {
                              label: "# of votes",
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: 'blue',
                              borderColor: 'green',
                              borderWidth: 1
                          },
                          // {label: "Quantity",
                          // data: [10, 14, 6, 5, 9, 5],
                          // backgroundColor: "orange",
                          // borderColor: 'red'}
                        ]
                      }}
                      height = {window.innerHeight/3}
                      width = {window.innerWidth/3}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false
                      }}
                  />
  </div>
}

export default BarChart