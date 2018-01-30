import React from 'react';

export default class Alert extends React.Component {
  invalidate = () => {
    if (this.props.invalidate) {
      this.props.invalidate();
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.invalidate();
    }, 3000);
  }

  render() {
    const {success, error, message} = this.props;

    return success ? <div className="alert alert-success" role="alert">
      {message}
    </div> : (error ? <div className="alert alert-danger" role="alert">
      {message}
    </div> : <div/>)
  }

}