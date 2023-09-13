// import React from 'react';
// //import { Link } from 'react-router-dom';
// import styles from '../LoginPage/login.module.scss';
// import { GoogleLogin } from 'react-google-login';

// const Login = () => {
//   const responseGoogle = (response) => {
//     try {
//       // Handle the Google Sign-In response here
//       console.log(response);
//     } catch (error) {
//       console.error('Error during Google Sign-In:', error);
//     }
//   };
  

  

//   return (
//     <div className={styles.container}>
//       {/* <Link to="/people" className={styles.button}>
//         People
//       </Link>
//       <Link to="/movie" className={styles.button1}>
//         Movie
//       </Link> */}
//       <div>
       
//         <GoogleLogin
//           clientId="783895236363-j9bo6fhob0in50e8gmoek1iten9caltv.apps.googleusercontent.com" 
//           buttonText="Continue with Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           cookiePolicy={'single_host_origin'}
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;





















import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LoginPage/login.module.scss';


const Login = () => {
  return (
    <div className={styles.container}>
      <Link to="/people" className={styles.button}>People</Link>
      <Link to="/movie" className={styles.button1}>Movie</Link>
    </div>
  );


 };

export default Login;
