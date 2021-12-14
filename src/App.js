import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import ListPage from "./pages/ListPage";
import  Hello from "./components/hello/Hello";
import  TaskDetails from "./components/taskDetails/TaskDetails";
import TeacherRouters from "./components/teacherRoutes/TeacherRouters";
import StudentRouters from "./components/studentRouters/StudentRouters";

export default function App() {
  return (
    <Router>
        <Switch>
        {/* <Route exact path="/">
            <Redirect to="/hello" />
          </Route>
          <Route exact path="/tasks">
            <ListPage />
          </Route>
          <Route exact path="/tasks/:id">
            <TaskDetails />
          </Route>
          <Route exact path="/hello">
            <Hello />
          </Route>
          <Route  path="/">
            <Hello />
          </Route> */}

<Route  path="/teacher">
            <TeacherRouters />
          </Route>
          <Route  path="/student">
            <StudentRouters />
          </Route>
        </Switch>
    
    </Router>
  );
}
