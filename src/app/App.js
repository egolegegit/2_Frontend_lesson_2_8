import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Dashboard from './components/dashboard'
import Posts from './components/posts'
import Login from './components/login'
import Home from './components/home'
import Stats from './components/stats'
import NotFound from './components/not-found'

function App() {
  return (
    <div className="flex flex-col w-full h-screen p-6 bg-gray-200 dark:bg-gray-700 dark:text-white">
      <NavBar />

      <h1 className="flex justify-center py-6 text-4xl dark:text-white">App</h1>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
