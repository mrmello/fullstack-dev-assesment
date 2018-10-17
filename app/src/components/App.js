import React, { Component } from 'react'
import Header from './header/Header'
import CampaignTab from './campaignTab/CampaignTab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { HashRouter, Route } from "react-router-dom"
import CampaignDetail from './campaignDetail/CampaignDetail'

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiToolbar: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #2196F3 30%, #1bd3b4 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.12)',
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
        background: 'linear-gradient(45deg, #2196F3 30%, #1bd3b4 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiExpansionPanelDetails: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: '#f1f1f1',
      },
    },
  },
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#2196F3',
    },
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
          <Header title="NANOCORP AG"/>
          <Route exact path="/" component={CampaignTab} />
          <Route path="/:id" component={CampaignDetail} />
        </MuiThemeProvider>
      </HashRouter>
    )
  }
}

export default App
