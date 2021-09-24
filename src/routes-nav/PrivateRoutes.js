import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../components/auth/UserContext';

/** "Higher order component" for private routes. 
 * 
 * In routing component, use these instead of <Route ..>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user present, redirects to login form.
*/

const PrivateRoute = ({ exact, path, children }) => {
  const { currentUser } = useContext(UserContext);

  console.debug('PrivateRoute', 'exact=', exact, 'path=', path, 'currentUser', currentUser);

  if (!currentUser) {
    return <Redirect to="/signin" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
