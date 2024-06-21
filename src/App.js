
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


// import './App.css'
// import LoginForm from './LoginForm'
// import Home from './Home'
// import Jobs from './Jobs'
// import NotFound from './NotFound'
// import JobItemDetails from './JobItemDetails'
// import ProtectedRoute from './ProtectedRoute'

// const App = () => (
//   <Switch>
    // <Route exact path="/login" component={LoginForm} />
    // <ProtectedRoute exact path="/" component={Home} />
    // <ProtectedRoute exact path="/jobs" component={Jobs} />
    // <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    // <Route path="/not-found" component={NotFound} />
//     <Redirect to="not-found" />
//   </Switch>
// )

// export default App
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import Jobs from './Jobs';
// import JobItemDetails from './JobItemDetails';
// import NotFound from './NotFound';
// // import ProtectedRoute from './ProtectedRoute';
// import Cookie from 'js-cookie';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const token = Cookie.get('jwt_token');
//   return token ? <Route {...rest} element={<Component />} /> : <Navigate to="/login" />;
// };

// const App = () => (

//   <Router>
//     <Routes>
//     <Route exact path="/login" component={LoginForm} />
//     <ProtectedRoute exact path="/" component={Home} />
//     <ProtectedRoute exact path="/jobs" component={Jobs} />
//     <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
//     <Route path="/not-found" component={NotFound} />
//     </Routes>
//   </Router>
// );

// export default App;


// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/" element={<ProtectedRoute component={Home} />} />
//       <Route path="/jobs" element={<ProtectedRoute component={Jobs} />} />
//       <Route path="/jobs/:id" element={<ProtectedRoute component={JobItemDetails} />} />
//       <Route path="/not-found" element={<NotFound />} />
//       <Route path="*" element={<Navigate to="/not-found" />} />
//     </Routes>
//   </Router>
// );

// export default App;

// App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Jobs from './Jobs';
import JobItemDetails from './JobItemDetails';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <ProtectedRoute path="/" element={<Home />} />
    <ProtectedRoute path="/jobs" element={<Jobs />} />
    <ProtectedRoute path="/jobs/:id" element={<JobItemDetails />} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" />} />
  </Routes>
);

export default App;


