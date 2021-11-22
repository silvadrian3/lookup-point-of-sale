import React from 'react';
import { Redirect, useLocation } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifyForgotPassword } from '@aws-amplify/ui-react';
import { I18n } from "aws-amplify";
import { AuthState, onAuthUIStateChange, Translations } from '@aws-amplify/ui-components';
import '../../assets/styles/Auth.css'
import { AuthFields } from '../../constants/AuthFields'
import { AuthLabels } from '../../constants/AuthLabels'
import { AppRoutes } from '../../constants/AppRoutes';
import {LoginBanner} from './LoginBanner'

I18n.setLanguage('en-AU');
I18n.putVocabulariesForLanguage("en-AU", {
  [Translations.CONFIRM_SIGN_UP_CODE_LABEL]: AuthLabels.CONFIRM_SIGN_UP_CODE_LABEL,
  [Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: AuthLabels.CONFIRM_SIGN_UP_CODE_PLACEHOLDER,
  [Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: AuthLabels.CONFIRM_SIGN_UP_HEADER_TEXT,
  [Translations.CONFIRM_SIGN_UP_LOST_CODE]: AuthLabels.CONFIRM_SIGN_UP_LOST_CODE,
  [Translations.BACK_TO_SIGN_IN]: AuthLabels.BACK_TO_SIGN_IN,
  [Translations.SIGN_IN_ACTION]: AuthLabels.SIGN_IN_ACTION,
  [Translations.SIGN_IN_TEXT]: AuthLabels.SIGN_IN_TEXT,
  [Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: AuthLabels.SIGN_UP_SUBMIT_BUTTON_TEXT
});

const Authentication = () => {
    const [authState, setAuthState] = React.useState(AuthState.SignIn);
    const [user, setUser] = React.useState();
    
    // const routeLocation = useLocation();
    // React.useEffect(()=>{
    //   let hashLoc = routeLocation.hash;
    //   console.log('Location changed ', routeLocation);
    //   if(hashLoc === '#signup'){
    //     setAuthState(AuthState.SignUp);
    //   }

    // }, [routeLocation]);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Redirect to={AppRoutes.DASHBOARD} />  
  ) : (
    <div className="grid grid-cols-2 gap-4">
      <div className="welcome-message">
        
        <h2><img src="https://s3.ap-southeast-1.amazonaws.com/lookup.ph/assets/website/lookup-logo.png" alt="lookup logo" class="pb-4"/>A cloud-based business management system designed for online sellers to organize products, track deliveries, create sales invoices and expense claims, manage customers and suppliers' information — all in one go.</h2>
      </div>

      <div className="authcontainer">
      <AmplifyAuthenticator usernameAlias="email">
      
        <AmplifySignIn 
          usernameAlias="email"
          slot="sign-in" 
          headerText="Login to your account"
          formFields={AuthFields.login}
        />
        <AmplifySignUp
          usernameAlias="email"
          slot="sign-up"
          formFields={AuthFields.signup}
          autoComplete="off"
          headerText="Start your free Pro trial"
        />

        <AmplifyForgotPassword 
          usernameAlias="email"
          slot="forgot-password"
          formFields={AuthFields.forgotpassword}
          headerText="Forgot Password"
        />

      </AmplifyAuthenticator>
      </div>
    </div>
  );
}


export default Authentication;