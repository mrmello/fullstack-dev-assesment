const styles = theme => ({
  root: {
    margin: 10,
    background: '#f1f1f1',
    padding: 10,
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      margin: 10,
      padding: 10,
      minWidth: '100px',
      background: '#f1f1f1',
      textAlign: 'center',
    },
  },
  description: {
    color: '#2196F3',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 11,
  }
})

export default styles