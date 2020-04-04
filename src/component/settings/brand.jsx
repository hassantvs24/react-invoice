import React, { Component } from 'react';
import Main from '../common/main';
import DataTable from 'react-data-table-component';
import TableHeader from './../common/tablHeader';
import {toast} from 'react-toastify';
import config from './../../config/index';
import BrandBox from './box/brandBox';

class Brands extends Component {
    state = { 
        data:[],
        searchQuery:"",
        selectColumn: "title",
        bulkDelete: []
     }

     componentDidMount() {
        const data = [
            { id: 1, title: 'Accountant', year: '1982' },
            { id: 2, title: 'Junior Technical Author', year: '2007' },
            { id: 3, title: 'Software Engineer', year: '2050' },
            { id: 4, title: 'Software Engineer', year: '2005' },
            { id: 5, title: 'Integration Specialist', year: '1957' },
            { id: 6, title: 'Software Engineer', year: '1988' },
            { id: 7, title: 'Pre-Sales Support', year: '1998' },
            { id: 8, title: 'Sales Assistant', year: '1995' },
            { id: 9, title: 'Brenden Wagner', year: '1947' },
            { id: 10, title: 'Brielle Williamson', year: '1968' },
            { id: 11, title: 'Accountant', year: '1965' },
            { id: 12, title: 'Chief Executive Officer', year: '1977' },
            { id: 13, title: 'Javascript Developer', year: '2020' },
            { id: 14, title: 'Marketing Designer', year: '1965' },
            { id: 15, title: 'Support Engineer', year: '1923' },
            { id: 16, title: 'Developer', year: '1978' },
            { id: 17, title: 'Regional Director', year: '1996' },
            { id: 18, title: 'Technical Author', year: '1993' },
            { id: 19, title: 'Regional Director', year: '1971' }
        ]

        this.setState({data})
     }


     tblTemplate = [
         {
            name: 'Title',
            selector: 'title',
            sortable: true,
            isExport: true,
            isFilter: true
          },
          {
            name: 'Year',
            selector: 'year',
            sortable: true,
            isExport: true,
            isFilter: true
          },
          {
            name: <i class="icon-menu-open2"></i>,
            cell: row => 
                <React.Fragment>
                    <ul className="icons-list">
                        <li className="dropdown">
                            <a href="#/" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-menu9"></i>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#/" data-toggle="modal" data-target="#ediModal" ><i className="icon-pencil5"></i> Edit</a></li>
                                <li><a onClick={() => this.delData(row.id)}  href="#/" ><i className="icon-bin"></i> Delete</a></li>
                            </ul>
                        </li>
                    </ul>
                </React.Fragment>,
            right: true,
            allowOverflow:true
          }
    ]

    filterColumn = () => {
        let columns = this.tblTemplate;
         columns = this.tblTemplate.filter(e => {
            return e.isFilter === true;
          });

          let sendValue = columns.map( i => {
            return  {label: i.name, value: i.selector }
          });

          return sendValue;
    }

    getExportData = () => {

        let columns = this.tblTemplate;
         columns = this.tblTemplate.filter(e => {
            return e.isExport === true;
          });

          let sendValue = columns.map( i => {
            return  {label: i.name, value: i.selector }
          });

          return sendValue;
    }

    delData = id => {
       const originalData = this.state.data;
       const data = originalData.filter(m => m.id !== id);

       if(window.confirm(config.confirmDel)){
            this.setState({data});
            toast.success(config.del);
       }
       
     }

     handleBulkDelete = () => {
         const {bulkDelete, data} = this.state; 
         
         if(bulkDelete.length <= 0) return;
         
         let originalData = data;
         let setDatas = bulkDelete.map(id => {
            originalData = originalData.filter(m => m.id !== id);
            return originalData;
        });

        let setData = [];
        setDatas.forEach(el => {
            setData = el;
        });

        if(window.confirm(config.confirmDel)){
            this.setState({data: setData});
            toast.success(config.del);
        }
     }

    handleSearch = query => {
        this.setState({searchQuery: query})
    }

    searchColumn = query => {
        this.setState({selectColumn: query})
    }

    handleChange = state  => {
        const selectedData = state.selectedRows;
        const selectedID = selectedData.map(m => {
           return m.id;
        });
        this.setState({bulkDelete: selectedID})
        //console.log(state.selectedRows);
      };

    
    getPageData = () => {
        const {searchQuery, data, selectColumn} = this.state;
        let filtered = data;
        if(searchQuery)
        filtered = data.filter(m => 
            m[selectColumn].toLowerCase().startsWith(searchQuery.toLowerCase())
        );

     return {filtered};

    }


    render() { 
        const {filtered: data} = this.getPageData();

        return ( 
            <React.Fragment>
                <Main title="Brands" header="Brands">
                <BrandBox />
                <DataTable 
                    actions={<TableHeader tableData={data} reportName="Brand Name" tableHeaderData={this.getExportData()} selectColumn={this.searchColumn} isExport={true} bulkDelete={this.handleBulkDelete} filterColumns={this.filterColumn()} onChange={this.handleSearch} />}
                    columns={this.tblTemplate} 
                    data={data} 
                    selectableRows 
                    onSelectedRowsChange={this.handleChange}   
                    pagination 
                    highlightOnHover
                    dense
                    striped
                    responsive
                    paginationPerPage={config.row_per_page}
                    paginationRowsPerPageOptions={config.pagination} />
                </Main>

            </React.Fragment>
         );
    }
}
 
export default Brands;