import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Insight from './insight/Insight'
import styles from './SectionInsightsStyles'
/**
 * Section of the dashboard that presents the insights data. Including impressions, clicks,
 * website visits, nanos score, cost per click, click through rate and advanceds kip 1/2
 */
const SectionInsights = ({ insights, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.headline}>INSIGHTS</Typography>
      <Divider light />
      {typeof(insights.impressions) === 'number' && <Insight icon="md-barcode" value={insights.impressions} label="Impressions"/>}
      {typeof(insights.clicks) === 'number' && <Insight icon="md-barcode" value={insights.clicks} label="Clicks"/>}
      {typeof(insights.website_visits) === 'number' && <Insight value={insights.website_visits} label="Website Visits"/>}
      {typeof(insights.nanos_score) === 'number'&& <Insight value={insights.nanos_score} label="Nanos Score"/>}
      {typeof(insights.cost_per_click) === 'number' && <Insight value={insights.cost_per_click} label="Cost per Click"/>}
      {typeof(insights.click_through_rate) === 'number'&& <Insight value={insights.click_through_rate} label="Click Through Rate"/>}
      {typeof(insights.advanced_kpi_1) === 'number' && <Insight value={insights.advanced_kpi_1} label="Advanced KPI 1"/>}
      {typeof(insights.advanced_kpi_2) === 'number' && <Insight value={insights.advanced_kpi_2} label="Advanced KPI 2"/>}
    </Paper>
  )
}

SectionInsights.propTypes = {
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * The campaign's insights
   */
  insights: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionInsights))