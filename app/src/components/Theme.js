import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
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
      root: {
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
      root: {
        backgroundColor: '#f1f1f1',
      },
    },
  },
  palette: {
    primary: {
      main: '#2196F3',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme
