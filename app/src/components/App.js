import React, { Component } from 'react'
import Header from './header/Header'
import CampaignTab from './campaignTab/CampaignTab'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { HashRouter, Route } from "react-router-dom"
import CampaignDetail from './campaignDetail/CampaignDetail'
import Error from './error/Error'
import theme from './Theme'

/**
 * The most parent component. Composed by the Header, CampaignTab and CampaignDetail
 * routes and the error screen.
 */
class App extends Component {
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider theme={theme} >
          <Header title="NANOCORP AG"/>
          <Error />
          <Route exact path="/" component={CampaignTab} />
          <Route path="/:id" component={CampaignDetail} />
        </MuiThemeProvider>
      </HashRouter>
    )
  }
}

export default App
