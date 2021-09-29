import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './components/home'

function App() {
  return (
    <div className="flex flex-col w-full h-screen p-6 bg-gray-200 dark:bg-gray-700 ">
      <NavBar />

      <h1 className="flex justify-center py-8 text-4xl font-medium">App</h1>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
