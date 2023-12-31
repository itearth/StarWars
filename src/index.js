import React from 'react';
import ReactDOM from 'react-dom/client';
import './root.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
//import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* //<GoogleOAuthProvider clientId='783895236363-j9bo6fhob0in50e8gmoek1iten9caltv.apps.googleusercontent.com'> */}
     <Provider store={store}>
    <App />
    </Provider>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

