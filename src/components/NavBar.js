import React from 'react';

import AppNavLink, {AppDropDownNavLink} from './AppNavLink';
// import {isAuthenticated, logout} from '../reducers/staff';

class DropDownMenu extends React.Component {
  render() {
    return <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      {this.props.children}
    </ul>
  }
}

class NavBar extends React.Component {
  // handleLogin = () => {
  //   this.props.history.push('/login');
  // };
  //
  // handleLogout = () => {
  //   logout(() => {
  //     this.props.history.push('/');
  //   })
  // };

  render() {
    return <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <a className="navbar-brand" href="/">TLBB Web Toolkit</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <AppNavLink to="/">Home</AppNavLink>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Tiện ích
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <AppDropDownNavLink to="/player">Tính số lượng Kim Tinh Thạch thăng cấp tinh thông trang bị</AppDropDownNavLink>
              <AppDropDownNavLink to="/logplayer">Tính hiệu quả Chân Nguyên</AppDropDownNavLink>
            </div>
          </li>



        </ul>
      </div>

      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <AppNavLink to="/about">Tác giả</AppNavLink>
        {/*<li>*/}
          {/*{isAuthenticated()*/}
            {/*? <button className="btn btn-sm btn-outline-warning my-2 my-sm-0" type="submit"*/}
                      {/*onClick={this.handleLogout}>Logout</button>*/}
            {/*: <button className="btn btn-sm btn-success my-2 my-sm-0" onClick={this.handleLogin}>Login</button>}*/}
        {/*</li>*/}
      </ul>
    </nav>
  }
}

export default NavBar;