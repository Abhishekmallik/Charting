import React from 'react';
import {Bar, Doughnut, Line, Pie, Scatter} from 'react-chartjs-2'
import {age} from '../data/age.js'
import {age_ethnic} from '../data/age ethnic.js'
import * as zoom from 'chartjs-plugin-zoom'

const Zoom = () => {
  return <div>
              <Bar 
                  data = {{
                    labels: age["boys"]["labels"],
                      datasets: [
                          {
                            label: "Boys",
                            data: age["boys"]["data"],
                            backgroundColor: 'red',
                            borderColor: 'orange',
                            borderWidth: 1
                          },
                          {
                            label: "Girls",
                            data: age["girls"]["data"],
                            backgroundColor: 'blue',
                            borderColor: 'green',
                            borderWidth: 1
                          }
                        ]
                      }}
                      height = {400}
                      width = {600}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false, 
                          plugins: {
                            title: {
                                display: true,
                                text: 'Bar Plot'
                            },
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
                        }
                      }}
                  />
                  {/* <Scatter 
                  data = {{
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
                      }}
                      height = {400}
                      width = {600}
                      options = {{
                          maintainAspectRatio: false,
                          responsive: false,
                          plugins: {
                            title: {
                                display: true,
                                text: 'Scatter Plot'
                            }
                        }
                      }}
                  /> */}
  </div>
}

export default Zoom
