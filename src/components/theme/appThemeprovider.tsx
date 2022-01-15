import React, { FC, Props, PropsWithChildren } from 'react';
import {
  createStyles,
  ThemeProvider,
  withStyles,
  Theme,
  WithStyles,
} from '@material-ui/core/styles';

import { themeOverride } from './theme';
const styles = createStyles({

});

export interface PaperbaseProps extends WithStyles<typeof styles> { }

const AppThemeProvider: React.FC = (props) => {
  return (
    <ThemeProvider theme={themeOverride}>
      {props.children}
    </ThemeProvider>
  );
}

export default withStyles(styles)(AppThemeProvider);