import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
  return 
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/shows" component={Shows} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}
}

export default App;
