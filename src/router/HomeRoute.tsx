import React from 'react'

import { Home } from "../components/pages/Hone";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/404";

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />
  },
  {
    path: '/setting',
    exact: true,
    children: <Setting />
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />
  }
]