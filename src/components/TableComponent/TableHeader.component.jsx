import React from 'react';
import TableHeaderFilter from './components/TableHeaderFilter';
import TableHeaderText from './components/TableHeaderText';

const TableHeader = (props) => {
    const components = {
        TableHeaderFilter: TableHeaderFilter,
        TableHeaderText: TableHeaderText,
      };

    return (
        <div className='tableHeader'>
            { React.createElement(components[props.component], {...props.data}) }
        </div>
    )
}

export default TableHeader;