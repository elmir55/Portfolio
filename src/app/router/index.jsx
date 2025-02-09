import React from 'react';
import { useRoutes } from 'react-router-dom';
// import {Hero} from '../../pages/Hero';
import { Layout } from '../../widgets/Layout';
import Home from '../../pages/Home'

export default function MyRoutes() {
  const myRouter = useRoutes([
    {
      path: '/',
      element: <Layout />, 
      children: [
        // {
        //   index: true, 
        //   element: <Hero />
        // }, 
        { 
          path: '/',
          element: <Home />
        },
     
      ]
    }
  ]);

  return myRouter;
}
