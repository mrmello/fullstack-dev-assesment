import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Graph from '../graphs/Graph'

const styles = () => ({
  root: {
    background: 'blue',
    padding: 10,
  },
  description: {

  },
})

const SectionInsights = ({ insights, classes }) => {
  return (
    <Paper className={classes.root}>
      {typeof(insights.impressions) === 'number' && <Graph total={insights.impressions} remaining={insights.impressions} label="Impressions"/>}
      {typeof(insights.clicks) === 'number' && <Graph total={insights.clicks} remaining={insights.clicks} label="Clicks"/>}
      {typeof(insights.impreswebsite_visitssions) === 'number' && <Graph total={insights.website_visits} remaining={insights.website_visits} label="Website Visits"/>}
      {typeof(insights.nanos_score) === 'number'&& <Graph total={insights.nanos_score} remaining={insights.nanos_score} label="Nanos Score"/>}
      {typeof(insights.cost_per_click) === 'number' && <Graph total={insights.cost_per_click} remaining={insights.cost_per_click} label="Cost per Click"/>}
      {typeof(insights.click_through_rate) === 'number'&& <Graph total={insights.click_through_rate} remaining={insights.click_through_rate} label="Click Through Rate"/>}
      {typeof(insights.advanced_kpi_1) === 'number' && <Graph total={insights.advanced_kpi_1} remaining={insights.advanced_kpi_1} label="Advanced KPI 1"/>}
      {typeof(insights.advanced_kpi_2) === 'number' && <Graph total={insights.advanced_kpi_2} remaining={insights.advanced_kpi_2} label="Advanced KPI 2"/>}
    </Paper>
  )
}

SectionInsights.propTypes = {
  classes: PropTypes.object.isRequired,
  insights: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionInsights))