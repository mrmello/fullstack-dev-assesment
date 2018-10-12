import React, { Component } from 'react'
import Campaings from './components/campaigns/Campaigns'
import Header from './components/header/Header'
import CampaignStatusTab from './components/tabs/CampaignStatusTab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

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
      <MuiThemeProvider theme={theme} >
        <Header />
        <CampaignStatusTab />
        <Campaings />
      </MuiThemeProvider>
    )
  }
}

export default App
