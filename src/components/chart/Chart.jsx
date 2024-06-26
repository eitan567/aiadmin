import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () => {

    const data = [
        {
          name: 'January',
          Total: 1200
        },        
        {
          name: 'February',
          Total: 2100
        },        
        {
          name: 'March',
          Total: 800
        },        
        {
          name: 'April',
          Total: 1600
        },        
        {
          name: 'May',
          Total: 900
        },        
        {
          name: 'June',
          Total: 1700
        },        
      ];

  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" height="87%" className="chart-body">
        <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6439ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>                
            </defs>
            <XAxis dataKey="name" fontSize="small"/>
            <YAxis fontSize="small" label={{ value: 'Amount in dollars', angle: -90, position: 'insideLeft' }}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />            
            <Area type="monotone" dataKey="Total" stroke="#6439ff" fillOpacity={1} fill="url(#total)" />            
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart