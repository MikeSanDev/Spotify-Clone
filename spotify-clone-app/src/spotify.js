// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


//  once you click the login button, all authentication is handled by spotify
export const authEndpoint =
    "https://accounts.spotify.com/authorize";

// redirected back to the local host - we chose this redirect in the spotify developer api dashboard
const redirectUri = "http://localhost:3000/";
// given to us from spotify developers api
const clientId = "b7aa9014f5244d28b784cba495e60988"
// gives the user a scope of what they can do in the app - there is no delete scope, so user cant delete objects
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
// sends to spotify to handle authentication, and it brings it back to us once we agree to terms
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=supersecretkey&name=michael
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});

}

// creates the url - % gives an ascii space, gives us the access token
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;