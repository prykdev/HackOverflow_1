import React, { Component } from 'react';

import TableRow from '../TableRow/TableRow';
import ToSortHeader from '../ToSortHeader/ToSortHeader';
import './Table.css';

const url = `https://fcctop100.herokuapp.com/api/fccusers/top/`;

const sortByMapping = [
  { type: 'past30Days', heading: 'Points in past 30 days' },
  { type: 'allTime', heading: 'All time points' },
];

class Table extends Component {
  constructor() {
    super();

    this.state = {
      defaultData: [],
      recentData: [],
      allTimeData: [],
      recentDataDesc: true,
      allTimeDataDesc: false,
    };
  }

  urlGenerator(slug) {
    return url + slug;
  }

  componentDidMount() {
    this.fetchData(this.urlGenerator('recent'), 'recent');
    this.fetchData(this.urlGenerator('alltime'), 'allTime');
  }

  fetchData(url, type) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (type === 'recent') {
          this.setState({
            defaultData: data,
            recentData: data,
          });
        } else if (type === 'allTime') {
          this.setState({
            allTimeData: data,
          });
        }
      })
      .catch((err) => console.err('err::', err))
  }

  handleSort = (sortType) => {
    if (sortType === 'past30Days') {
      this.sortRowsRecentData();
    }

    else if (sortType === 'allTime') {
      this.sortAllTimeData();
    }
  }

  sortRowsRecentData() {
    const { recentData, recentDataDesc } = this.state;

    const sortedRecentData = recentDataDesc ? recentData.sort((a, b) => a.recent - b.recent) : recentData.sort((a, b) => b.recent - a.recent);
    this.setState({
      defaultData: sortedRecentData,
      recentDataDesc: !this.state.recentDataDesc,
    });
  }

  sortAllTimeData() {
    const { allTimeData, allTimeDataDesc } = this.state;

    const sortedAllTimeData = allTimeDataDesc ? allTimeData.sort((a, b) => a.alltime - b.alltime) : allTimeData.sort((a, b) => b.alltime - a.alltime);
    this.setState({
      defaultData: sortedAllTimeData,
      allTimeDataDesc: !this.state.allTimeDataDesc,
    });
  }

  render() {
    const rows = this.state.defaultData.map((rowData, i) => {
      return <TableRow key={i} id={i + 1} rowData={rowData} />
    });

    const sorters = sortByMapping.map((toSortBy, i) => {
      return <ToSortHeader key={i} sortBy={toSortBy.type} heading={toSortBy.heading} onClick={this.handleSort} />
    });

    return (
      <table>
        <tbody>
          <tr>
            <th scope="col">#Rank</th>
            <th scope="col">Username</th>
            {sorters}
          </tr>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Table;