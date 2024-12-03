import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts'

const CustomerBarChart = ({ data, themeColor }: any) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis tickFormatter={value => `${value} คน`} />
        <Tooltip />
        <Bar dataKey='total' fill={themeColor.palette.primary.main} barSize={50} radius={[4, 4, 0, 0]}>
          {data.map((entry: any, index: number) => (
            <Cell key={index} fill={entry.total > 10 ? themeColor.palette.primary.main : '#E53935'} />
          ))}
          <LabelList dataKey='total' formatter={(value: number) => `${value} คน`} position='top' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomerBarChart
