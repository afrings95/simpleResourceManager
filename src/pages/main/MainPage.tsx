import React from 'react';
import { Observer, observer } from 'mobx-react';
import { TranslatePage } from '../translate/TranslatePage';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

interface MainPageProps {}
@observer
export class MainPage extends React.Component<MainPageProps> {
  render() {
    return (
      <Container className='main-page'>
        <AppBar position='static' className='main-page-header'>
          <Toolbar>
            <h1 className='main-page-header-text'>Simple resource manager</h1>
          </Toolbar>
        </AppBar>
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={(routeProps) => (
                <Observer>{() => <TranslatePage {...routeProps} />}</Observer>
              )}
            />
            <Route
              path='/'
              render={(routeProps) => (
                <Observer>
                  {/* {() => <JoinComponent onAdminIdChange={this.handleAdminIdChange} {...routeProps} />} */}
                </Observer>
              )}
            />
          </Switch>
        </Router>
      </Container>
    );
  }
}
