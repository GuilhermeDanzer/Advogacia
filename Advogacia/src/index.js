import React from "react";
import ReactDOM from "react-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import { Provider as ArticleProvider } from '../src/reducers/ArticleContext'
import { Provider as AuthProvider } from '../src/reducers/AuthContext'
import { Provider as TeamProvider } from '../src/reducers/TeamContext'
import { Provider as EmailProvider } from '../src/reducers/EmailContext'
import Contact from '../src/screens/Contact'
import About from '../src/screens/About'
import Sites from '../src/screens/Sites'
import Team from '../src/screens/Team'
import Expertise from '../src/screens/Expertise'
import Article from '../src/screens/Article'
import Login from '../src/screens/Login'
import Main from '../src/containers/layouts/Main'
import MainAdmin from '../src/containers/layouts/MainAdmin'
import Admin from '../src/screens/Admin'
import TeamCreation from '../src/screens/TeamCreation'
import ArticleCreation from '../src/screens/ArticleCreation'
import './global.css'

const routing = (
  <AuthProvider>
    <TeamProvider>
      <ArticleProvider>

        <EmailProvider>
          <Router>
            <div>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path='/admin' component={Admin}>
                  <MainAdmin>
                    <Switch>
                      <Route path="/login" component={Login} />
                      <Route path="/admin/artigo" component={ArticleCreation} />
                      <Route path="/admin/equipe" component={TeamCreation} />
                    </Switch>
                  </MainAdmin>
                </Route>
                <Route>
                  <Main>
                    <Switch>
                      <Route exact={true} path='/' component={App} />
                      <Route path='/contato' component={Contact} />
                      <Route path='/sites' component={Sites} />
                      <Route path="/sobre" exact={true} component={About} />
                      <Route path="/equipe" component={Team} />
                      <Route path="/areas-de-atuacao" component={Expertise} />
                      <Route path="/artigos" component={Article} />
                    </Switch>
                  </Main>
                </Route>
              </Switch>
            </div>
          </Router>
        </EmailProvider>
      </ArticleProvider>
    </TeamProvider>
  </AuthProvider>
);

ReactDOM.render(routing, document.getElementById("root"));