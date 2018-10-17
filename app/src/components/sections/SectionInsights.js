import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Insight from '../insight/Insight'

const styles = () => ({
  root: {
    textAlign: 'center',
    padding: 10,
  },
  headline: {
    textAlign: 'left',
    fontFamily: 'Roboto',
    color: 'rgba(58, 56, 56, 0.87)',
    fontSize: 11,
    fontWeight: 'bold',
    paddingBottom: 5,
    top: 0,
    position: 'relative'
  },
  description: {

  },
})

const SectionInsights = ({ insights, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.headline}>INSIGHTS</Typography>
      <Divider light />
      {typeof(insights.impressions) === 'number' && <Insight icon="md-barcode" value={insights.impressions} label="Impressions"/>}
      {typeof(insights.clicks) === 'number' && <Insight icon="md-barcode" value={insights.clicks} label="Clicks"/>}
      {typeof(insights.impreswebsite_visitssions) === 'number' && <Insight value={insights.website_visits} label="Website Visits"/>}
      {typeof(insights.nanos_score) === 'number'&& <Insight value={insights.nanos_score} label="Nanos Score"/>}
      {typeof(insights.cost_per_click) === 'number' && <Insight value={insights.cost_per_click} label="Cost per Click"/>}
      {typeof(insights.click_through_rate) === 'number'&& <Insight value={insights.click_through_rate} label="Click Through Rate"/>}
      {typeof(insights.advanced_kpi_1) === 'number' && <Insight value={insights.advanced_kpi_1} label="Advanced KPI 1"/>}
      {typeof(insights.advanced_kpi_2) === 'number' && <Insight value={insights.advanced_kpi_2} label="Advanced KPI 2"/>}
    </Paper>
  )
}

SectionInsights.propTypes = {
  classes: PropTypes.object.isRequired,
  insights: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionInsights))