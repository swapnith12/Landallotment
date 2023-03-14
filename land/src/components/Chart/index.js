import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"



const Chart = (props) => {
  return (
    <ResponsiveContainer width="40%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={props.data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name={props.data[0].language} fill="#fecba6" />
          <Cell name={props.data[1].language} fill="#b3d23f" />
          <Cell name={props.data[2].language} fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Chart