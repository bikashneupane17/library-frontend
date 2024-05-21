# Frontend-- library management

1. send login details to server-----receve tokens (access and refresh)
2. store tokens in browser sessions-----access in sessionStorage and refresh in localStorage
3. use accessJWT to request the user object from server
4. store the user obj in redux store
5. in login form, read the user from the redux store
   - if userObj exist: redirect user to dashboard

<!-- Auth middleware for server -->

1. receive jwt via authorization header
2. verify jwt is valid (not expired, secretkey) by decoding jwt
3. Check if the token exist in the DB, session table
4. Extract email from the decoded jwt obj
5. Get user by email
6. If user exist, they are now authorised
