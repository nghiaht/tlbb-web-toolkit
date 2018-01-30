import React from 'react';
import moment from 'moment';

export default class ComboChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerDiv = null;
  }

  draw = (data) => {
    if (data && this.props.chartId && this.containerDiv && window.Highcharts) {
      // console.log("Highcharts is ready", this.props.chartId, data);

      window.Highcharts.setOptions({
        global: {
          useUTC: false
        }
      });

      var options = {
        title: {
          text: data.titleText
        },
        subtitle: {
          text: data.subTitleText
        },



        series: data.series
      };

      options = Object.assign({}, options, data);

      window.Highcharts.chart(this.props.chartId, options);

    }
  };

  render() {
    return (
      <div>
        {!this.props.data && <p className="text-center"><em className="text-info">There is no data to display!</em></p>}
        <div ref={f => this.containerDiv = f} id={this.props.chartId} style={{width: '100%', height: 400}}
                do={this.draw(this.props.data)} />
      </div>
    )
  }
}