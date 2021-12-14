import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListPage from "./pages/ListPage";
import  Hello from "./components/hello/Hello";

export default function App() {
  return (
    <Router>
        <Switch>
          
          <Route path="/tasks">
            <ListPage />
          </Route>
          <Route path="/hello">
            <Hello />
          </Route>
        </Switch>
    
    </Router>
  );
}
