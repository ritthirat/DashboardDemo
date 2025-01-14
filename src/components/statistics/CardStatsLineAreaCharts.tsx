// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports

import type { CardStatsWithAreaChartProps } from '@/types/widgetTypes'
import CardStatsWithAreaChart from './card-statistics/StatsWithAreaChart'

// Component Imports

type GridSizeProps = {
  xs?: number
  sm?: number
  md?: number
}

type CardStatsLineAreaChartsProps = {
  data: CardStatsWithAreaChartProps[]
  gridSizes?: GridSizeProps
}

const CardStatsLineAreaCharts = ({ data, gridSizes = { xs: 12, sm: 6, md: 3 } }: CardStatsLineAreaChartsProps) => {
  const renderData = data.map((item, index) => (
    <Grid item key={index} {...gridSizes}>
      <CardStatsWithAreaChart {...item} />
    </Grid>
  ))

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatsLineAreaCharts
