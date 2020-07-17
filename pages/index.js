import React from 'react';
import { withApollo } from '../libs/apollo';
// import { useQuery } from '@apollo/react-hooks';
// import { ALL_CHARACTERS } from '../gql/allCharacters';
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
	// const { loading, error, data } = useQuery(ALL_CHARACTERS);
	// if (error) return <h1>Error</h1>;
	// if (loading) return <h1>Loading...</h1>;
	return (
	<>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
	</>
	);
};

export default withApollo({ ssr: true })(IndexPage);