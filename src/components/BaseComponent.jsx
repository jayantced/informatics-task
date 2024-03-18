import React from 'react'
import Card from './UI/Card'
import Title from './Title'
import Description from './Description'
import Chart from './Chart'

export default function BaseComponent(props) {
  return (
    <Card>
        <Title title={props.title} />
        <Description description={props.description} />
        <Chart type={props.type} />
    </Card>
  )
}
