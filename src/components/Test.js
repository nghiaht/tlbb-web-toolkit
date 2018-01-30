import React from 'react';
import {getStatsActiveUser, getStatsCentralBank} from '../reducers/stats';
import {logger} from '../utils'
import ComboChart from './ComboChart';
import moment from 'moment';

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentWillMount() {
    const today = moment();
    const yesterday = moment().subtract(1, "d");
    const lastWeek = moment().subtract(1, "w");

    getStatsCentralBank().then(data => {
      const series = [];
      const targetKeyword = "issuedGem";

      if (data.sum[targetKeyword]) {
        series.push({
          name: "SUM " + targetKeyword,
          data: data.sum[targetKeyword],
          type: "spline"
        })
      }

      // Object.keys(data.sum).forEach(sumName => {
      //
      //   const aData = data.sum[sumName];
      //   series.push({
      //     name: "SUM " + sumName,
      //     data: aData,
      //     type: "spline"
      //   })
      //
      // });

      Object.keys(data.sumByAction).forEach(actionName => {

        const aData = data.sumByAction[actionName];

        if (aData[targetKeyword]) {
          series.push({
            name: "SUM " + actionName + "." + targetKeyword,
            data: aData[targetKeyword],
            type: "spline"
          })
        }

        // Object.keys(aData).forEach(sumName => {
        //   series.push({
        //     name: "SUM " + actionName + "." +sumName,
        //     data: aData[sumName],
        //     type: "spline"
        //   })
        // })

      });

      logger.debug("series", series);
      this.setState({data: {
        series: series,
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%e/%m/%Y}'
          },
          title: {
            text: 'Date'
          }
        },
      }})

    });
  }

  render() {
    return <div>
      This is test component inside the app
      <ComboChart chartId="testChart" data={this.state.data}/>
    </div>
  }
}