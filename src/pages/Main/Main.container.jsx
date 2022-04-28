import React from "react";
import Table from '../../components/TableComponent/TableComponent';
import TableUserColumn from "../../components/TableComponent/TableUserNameColumn";
import TableDateAdvtColumn from "../../components/TableComponent/TableDateAdvtColumn";
import TableCountCoinColumn from "../../components/TableComponent/TableCountCoinColumn"; 
import TableRateCoinColumn from "../../components/TableComponent/TableRateCoinColumn";

const Main = (props) => {
    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
            col3: 'lol',
            col4: 'lol'
          },
          {
            col1: 'react-table',
            col2: 'rocks',
            col3: 'lol',
            col4: 'lol'

          },
          {
            col1: 'whatever',
            col2: 'you want',
            col3: 'lol',
            col4: 'lol'
          },
          {
            col1: 'whatever',
            col2: 'you want',
            col3: 'lol'

          },
        ],
        []
      )
    const columns = React.useMemo(
        () => [
            {
              Header: () => TableUserColumn(),
              accessor: 'col1', // accessor is the "key" in the data
            },
            {
              Header: () => TableDateAdvtColumn(),
              accessor: 'col2',
            },
            {
              Header: () => TableCountCoinColumn(),
              accessor: 'col3',
            },
            {
              Header: () => TableRateCoinColumn(),
              accessor: 'col4',
            },
          ],
          []
      )
    return (
        <div className="main">
            <Table columns={columns} data={data} />
        </div>
    )
}

export default Main;
