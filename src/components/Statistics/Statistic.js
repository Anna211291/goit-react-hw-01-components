import {Container, StatisticWrapper, StatisticItems } from '../Statistics/Statistic.styled'

export const Statistic = ({title, stats}) => {
return (<Container>
  <h2 >{title}</h2>

  <StatisticWrapper >
    {stats.map(stat => (<StatisticItems  key={stat.id} label={stat.label}>
      <span >{stat.label}</span>
      <span ><b>{stat.percentage}%</b></span>
    </StatisticItems>)
    )}
  </StatisticWrapper>
</Container>)
} 