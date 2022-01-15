import { createMuiTheme } from "@material-ui/core";

export const AppTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#11CE74',
        // main: '#009be5',
        main:"#5A09BC",
        dark: '#0f098d',
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 4,
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
   
  });
  


  export const themeOverride = {
    ...AppTheme,
    overrides: {
      
      MuiDrawer: {
        paper: {
          backgroundColor:'#eaeff1'
        },

      },
      MuiButton: {
        label: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      
      },
      MuiTabs: {
        root: {
          marginLeft: AppTheme.spacing(1),
        },
        indicator: {
         // backgroundColor: AppTheme.palette.primary,
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [AppTheme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
      MuiIconButton: {
        root: {
          padding: AppTheme.spacing(1),
        },
      },
      MuiTooltip: {
        tooltip: {
          borderRadius: 4,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: '#c5c5c5',
        },
      },
      MuiListItemText: {
        primary: {
          fontWeight: AppTheme.typography.fontWeightMedium,
        },
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
      MuiAvatar: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  };