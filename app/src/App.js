import React, { Component } from 'react'
import Header from './components/header/Header'
import CampaignStatusTab from './components/tabs/CampaignStatusTab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import { HashRouter, Route } from "react-router-dom"
import CampaignDetail from './components/campaigns/CampaignDetail'

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiToolbar: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiB: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, ##092943 30%, #196EB1 90%)',
      },
    },
  },
  palette: {
    primary: {
      main: '#2196F3',
    },
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
          <Route path="/:id" component={CampaignDetail} />
        </MuiThemeProvider>
      </HashRouter>
    )
  }
}

export default App
