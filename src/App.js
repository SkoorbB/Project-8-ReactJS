import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Movies } from './Movies';
import { Shows } from './Shows';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/shows" component={Shows} />
          </Switch>
        </Router>
        </Layout>
    </React.Fragment>
  );
}
}

export default App;
