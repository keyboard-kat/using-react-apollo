import gql from 'graphql-tag';

export const MENU_ITEMS = gql`
    query menuItems {
        characters {
            results {
                id
                name
            }
        }
    }
`;