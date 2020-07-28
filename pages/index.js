import React from 'react';
import { withApollo } from '../libs/apollo';
import App from '../components/App.jsx';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000b1c',
      },
      secondary: {
        main: '#cccccc',
      },
    }
});
  


const IndexPage = () => {
	
	return (
	<>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
	</>
	);
};

export default withApollo({ ssr: true })(IndexPage);