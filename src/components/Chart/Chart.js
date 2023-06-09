import ChartBar from './ChartBar'
import "./Chart.css"
const Chart = (props) => {
    const values=props.dataPoints.map((dataPoint)=>dataPoint.value)
    const maxAmount=Math.max(...values)
  return (<div className='chart'>
    { props.dataPoints.map((dataPoint)=>(
            <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxAmount} label={dataPoint.label}/>
    ))}
  </div>
  )
}

export default Chart;