import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Graph from '../graphs/Graph'

const styles = () => ({
  root: {
    padding: 10,
  },
  description: {

  },
})

const SectionInsights = ({ insights, classes }) => {
  return (
    <Paper className={classes.root}>
      {insights.impressions && <Graph total={insights.impressions} remaining={insights.impressions} label="Impressions"/>}
      {insights.clicks && <Graph total={insights.clicks} remaining={insights.clicks} label="Clicks"/>}
      {insights.website_visits && <Graph total={insights.website_visits} remaining={insights.website_visits} label="Website Visits"/>}
      {insights.nanos_score && <Graph total={insights.nanos_score} remaining={insights.nanos_score} label="Nanos Score"/>}
      {insights.cost_per_click && <Graph total={insights.cost_per_click} remaining={insights.cost_per_click} label="Cost per Click"/>}
      {insights.click_through_rate && <Graph total={insights.click_through_rate} remaining={insights.click_through_rate} label="Click Through Rate"/>}
      {insights.advanced_kpi_1 && <Graph total={insights.advanced_kpi_1} remaining={insights.advanced_kpi_1} label="Advanced KPI 1"/>}
      {insights.advanced_kpi_2 && <Graph total={insights.advanced_kpi_2} remaining={insights.advanced_kpi_2} label="Advanced KPI 2"/>}
    </Paper>
  )
}

SectionInsights.propTypes = {
  classes: PropTypes.object.isRequired,
  insights: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionInsights))