import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Tours = lazy(() => import('./list'));
const AddTour = lazy(() => import('./add'));
const ViewTour = lazy(() => import('./view'));

const TourAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/tour-managerment',
      element: <Tours />,
    },
    {
      path: 'apps/tour-managerment/:idTour',
      element: <ViewTour />,
    },
    {
      path: 'apps/tour-managerment/add',
      element: <AddTour />,
    },
    // {
    //   path: 'apps/tour-managerment/orders',
    //   element: <Orders />,
    // },
    // {
    //   path: 'apps/tour-managerment/orders/:orderId',
    //   element: <Order />,
    // },
    {
      path: 'apps/tour-managerment',
      element: <Navigate to="tours" />,
    },
  ],
};

export default TourAppConfig;
