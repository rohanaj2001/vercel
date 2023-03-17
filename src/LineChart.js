import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'No of Patients ',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 17],[5, 1], [6, 2], [7, 4], [8, 2], [9, 17]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  ) 
return(
  <>
  <div 
  style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop:'20px'

  }

  }>
    <div
      style={{
        width: '60vw',
        height: '60vh'
        
      }}
    >
      <Chart data={data} axes={axes} tooltip/>
    </div>
    </div>
    </>
)
}
export default MyChart;