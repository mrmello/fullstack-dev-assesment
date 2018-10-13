import React, { Component } from 'react'
import Header from './components/header/Header'
import CampaignStatusTab from './components/tabs/CampaignStatusTab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { HashRouter, Route } from "react-router-dom"
import Campaigns from './components/campaigns/Campaigns'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
})

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider theme={theme} >
          <Header />
          <Route exact path="/" component={CampaignStatusTab} />
          <Route path="/:id" component={Campaigns} />
        </MuiThemeProvider>
      </HashRouter>
    )
  }
}

export default App
