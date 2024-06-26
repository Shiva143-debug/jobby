// import {Link, withRouter} from 'react-router-dom'

// import Cookies from 'js-cookie'
// import './index.css'

// const Header = props => {
//   const onClickLogout = () => {
//     const {history} = props
//     Cookies.remove('jwt_token')
//     history.replace('/login')
//   }

//   return (
//     <div className="Header-container">
//       <div className="Header-container">
//         <ul className="nav-menu">
//           <li>
//             <Link to="/">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
//                 alt="website logo"
//                 className="Header-web-image"
//               />
//             </Link>
//           </li>

//           <li className="nav-menu-item">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>

//           <li className="nav-menu-item">
//             <Link to="/jobs" className="nav-link">
//               Jobs
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="logout-desktop-btn"
//           onClick={onClickLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }

// export default withRouter(Header)


import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };

  return (
    <div className="Header-container">
      <div className="Header-container">
        <ul className="nav-menu">
          <li>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
                className="Header-web-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
