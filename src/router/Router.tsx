import React from "react"
import { Route, Switch } from "react-router-dom"

import { Login } from "../components/pages/Login"
import { homeRoutes } from '../router/HomeRoute'
import { Page404 } from "../components/pages/404"
import { HeaderLayout } from "../components/templates/HeaderLayout"
import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";

export const Router = () => {
  return (
    // routerの分岐を定義
    /*
    * このへんの書き方意味不明なので後々理解していく
    *
    * */
    <Switch>
       <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map(route => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}