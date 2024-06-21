// import {Redirect, Route} from 'react-router-dom'
// import Cookie from 'js-cookie'

// const ProtectedRoute = props => {
//   const token = Cookie.get('jwt_token')
//   if (token === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute

// ProtectedRoute.js
import { Route, Navigate } from 'react-router-dom';
import Cookie from 'js-cookie';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const token = Cookie.get('jwt_token');
//   return token ? <Route {...rest} element={<Component />} /> : <Navigate to="/login" />;
// };
const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return <Navigate {...props} />
}

export default ProtectedRoute;
