import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import ListPage from "../../pages/ListPage";
import Hello from "../hello/Hello";
import Menu from "../menu/Menu";
import TaskDetails from "../taskDetails/TaskDetails";


function TeacherRouters(){
    // const {location} = useLocation();
const {path} = useRouteMatch()
// console.log('useLocation', useLocation())
console.log('useRoutematch ', useRouteMatch())
    return(
        <>
        <Menu />
            <Switch>
                
                <Route exact path={`${path}/tasks`}>
                    <ListPage />
                </Route>
                <Route exact path={`${path}/tasks/:id`}>
                    <TaskDetails />
                </Route>
                <Route exact path={`${path}/hello`} >
                    <Hello />
                </Route>
                
            </Switch>
        </>
    )
}

export default TeacherRouters