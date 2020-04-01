import React, { Component } from 'react';
import Main from '../common/main';
import DataTable from 'react-data-table-component';

class Brands extends Component {
    state = { 
        data:[
            { id: 1, title: 'Conan the Barbarian', year: '1982' },
            { id: 2, title: 'Conan the Barbarian', year: '2007' },
            { id: 3, title: 'Conan the Barbarian', year: '2050' },
            { id: 4, title: 'Conan the Barbarian', year: '2005' },
            { id: 5, title: 'Conan the Barbarian', year: '1957' },
            { id: 6, title: 'Conan the Barbarian', year: '1965' },
            { id: 7, title: 'Conan the Barbarian2', year: '1971' }
        ],
        columns:[
            {
                name: 'Title',
                selector: 'title',
                sortable: true,
              },
              {
                name: 'Year',
                selector: 'year',
                sortable: true,
                right: true,
              },
        ]
     }

     handleChange = state  => {
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', state.selectedRows);
      };
    render() { 
        const {columns,  data} = this.state;
        return ( 
            <React.Fragment>
                <Main title="Brands" header="Brands">
                    
                <DataTable title="Arnold Movies" columns={columns} data={data} selectableRows onSelectedRowsChange={this.handleChange} />
                    
                </Main>
            </React.Fragment>
         );
    }
}
 
export default Brands;