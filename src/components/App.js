import React, {Component} from 'react';
// import './App.css';
import NavBar from './NavBar';
import DashBoardPage from '../pages/DashBoardPage';

// import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
// import 'react-widgets/dist/css/react-widgets.css';

// import Moment from 'moment';
// import momentLocalizer from 'react-widgets-moment';
// Moment.locale('en');
// momentLocalizer();

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <main className="col-12 col-md-12 pt-3 bd-content" role="main">
              <DashBoardPage/>
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
