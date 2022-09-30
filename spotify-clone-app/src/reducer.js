export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing - set token:null
    // token: 'BQDQkIhgSNGOY3UiX6T5bP_2Ww6cjKn3QTnP34crwnw5Su-s2i3vPacVxJPyDmKOsUeZm17IhBH0VrzYhO-jPEhrqUArMZK-ZknTiogB0XtZgaA0ViLB8v3XeoXgPa9ftAAU7G4C6G-NWXk2JrqXZIz2eoxLCv6CBv-Wydj5r6zZeXFQ6n6GxTdM7exJcH6KdvWL'
};
// Reducer is idle and listens to actions
const reducer = (state, action) => {
    // debugging tool - to see the action being called
    console.log(action);
    // Action -> type, [payload] - payload can be anything
    // keeps the state as the logged in user
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        // stores playlist state into data layer
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        // populates discover weekly info inside of the data layer
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;

    // this Reducer.js file is necessary to use ContextAPI 