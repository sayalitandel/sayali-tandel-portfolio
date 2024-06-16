import {
    Route,
   
  } from "react-router-dom";
const HashRoute = ({ component: Component, hash, ...routeProps }) => (
    <Route
      {...routeProps}
      component={({ location, ...props }) =>
        location.hash === hash && <Component {...props} />
      }
    />
  );
export default HashRoute;