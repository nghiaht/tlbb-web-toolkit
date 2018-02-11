import React from 'react';
import KimTinhThachPage from './KimTinhThachPage';
import GameServerPage from './GameServerPage';
class DashBoardPage extends React.Component {

  render() {

    return <div>
      <h2>Dashboard</h2>

      <GameServerPage/>
      <KimTinhThachPage/>


    </div>
  }
}

export default DashBoardPage;