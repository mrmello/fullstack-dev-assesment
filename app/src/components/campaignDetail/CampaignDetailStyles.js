const styles = theme => ({
  root: {
    felxGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    textTransform: 'uppercase'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '2fr 1fr',
    },
    gridGap: '1em',
    gridAutoRows: 'auto'
  },
  sectionCreative: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '3',
  },
  sectionStatus: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '3',
    gridRowEnd: '4',
    [theme.breakpoints.up('md')]: {
      gridColumnStart: '2',
      gridColumnEnd: '3',
      gridRowStart: '1',
      gridRowEnd: '2',
    },
  },
  sectionAudience: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '4',
    gridRowEnd: '5',
    [theme.breakpoints.up('md')]: {
      gridColumnStart: '2',
      gridColumnEnd: '3',
      gridRowStart: '2',
      gridRowEnd: '3',
    },
  },
  sectionInsights: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '6',
    gridRowEnd: '7',
    [theme.breakpoints.up('md')]: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      gridRowStart: '3',
      gridRowEnd: '3',
    },
  }
})

export default styles