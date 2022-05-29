<p align='left'>
    <img src='https://media-exp1.licdn.com/dms/image/C4D0BAQHNsZgUyxwI0w/company-logo_200_200/0/1618588184953?e=2147483647&v=beta&t=43jVmumra31on9vIUOUo6iOyiBVT6yZzB8FQq3usXrI' </img>
</p>

# ECommerce Challenge
### Desktop Screen Shot
<p align="left">
  <img height="150" src="./desktopMobile.png" />
</p>

### How to run the project locally.
- clone this repo.
- go to https://reqres.in/
- click on the POST - Login (succesfull) option and copy the response Token string.
- create a .env file and store that Token in a REACT_APP_ACCESS_TOKEN var.
- run command `npm start` and you should be up and running


### About users
- The user with the token from the previous step will be the admin. Every 24 hs https://reqres.in/ change the password (which is the same for all users), so you should check it before singnin in.
- All the other emails (remember, same password) belong to NON-Admin users.

### ADMIN
ADMIN can CREATE books(already functioning), UPDATE or DELETE. Both update and delete are planned to be working in the second stage of this project.
- Requests are made to this endpoint: https://crudcrud.com/api/22923a258ece4eba9cb17a0dd9a9f854/unicorns
- This external api doesn't let us to send headers with the token for authentication, so it will be implementented in the next stage of this project, in conjunction with backend services, lokking like: 

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
