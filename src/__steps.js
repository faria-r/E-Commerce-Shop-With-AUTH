/**
 * ******************Auth set up****************************
 *create firebaase project
 enable web
 *enable sign in method
 install firebase
 get firebase config in firebase.config.js file
 export it from firebase file

 *****************Auth Integrate**************************
 *create userCOntext (Auth-COntext): userCOntext --> component userContext provides AuthCOntxt.
 * create auth context
 * set AuthContext.Provider
 * make sure use children
 *export auth  to be used inside useCOntext hook./
 *get form data
 getAuth in the user context
  ****************Firebase Hosting **********************
  //on first time for each computer
  1.npm install -g firebase-tools
  2.firebase login
  3.firebase init
  make sure for public directory select build


  for every deploy 
  npm run build
  firebase deploy
 */