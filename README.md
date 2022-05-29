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
ADMIN can CREATE books(already functioning), UPDATE or DELETE. Both update and delete are planned to be working in the second stage of this project. However you could delete a book adding the param "/id" in Postman. You could get the id watching redux devtools.
- Requests are made to this endpoint: https://crudcrud.com/api/22923a258ece4eba9cb17a0dd9a9f854/unicorns
- This external api doesn't let us to send headers with the token for authentication, so it will be implementented in the next stage of this project, in conjunction with backend services, looking like: 

    `
    {
        headers: {
         authorization: `Bearer ${token}`
          }
    }
    `

### About Token security
The only way to protect tokens from being accessed by any malicious code is to keep them away from the browser. Right now, because this stage was only a frontend project, we stored the Token in `localStorage`.
On next the stages of the project we should look at the posibility of using a BFF (Backend for Frontend) aproach. 
As stated in this article: 
> > Using this approach, all communication from the SPA to the Authorization Server goes via an OAuth Agent component, and tokens will not reach the SPA at all.
> > As the code for the OAuth Agent is running outside of the browser, it can act as a confidential client for the SPA, further increasing the security of token
> > issuance. The client will now use some form of authentication (client secret, Mutual TLS, etc.) to retrieve tokens from the Authorization Server.
> > https://curity.io/resources/learn/the-token-handler-pattern/

### About form validations
Form validations were made really simple due to lack of time. They should be improved in the next stage of the project.
- Login and register, both check that the email provided is, in fact, an email. 
- Name, password, and every other field checks that the input isnt made of ' ' and also length is greater than 0.

### Cart functionality
- You can add any number of items of the products you like. Then, in the cart, you can remove one product or remove all of them.
- If you are logged in, you'll see the Ckeckout button.
- If you are not logged in, you will see the Login button. Once you authenticate and return to Home, you will see that cart keeps the products you have added.
