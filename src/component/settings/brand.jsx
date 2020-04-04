import React from 'react';
import Joi from 'joi-browser';
import bandModal from './../../model/brandModel';
import Main from '../common/main';
import DataTable from 'react-data-table-component';
import TableHeader from './../common/tablHeader';
import config from './../../config/index';
import BrandBox from './box/brandBox';
import Pages from './../common/pages';
import RowAction from './../common/rowAction';


 
class Brands extends Pages {
    state = { 
        data:[],
        bulkDelete: [],
        selectColumn: "title",
        inputFiled: {
            id: '',
            title: '',
            year: ''
        },
        errors: {}
     }

 componentDidMount() {
    const data = bandModal.brandData();
    this.setState({data})
 }

    schema = {
        id: Joi.number().integer().label('ID'),
        title: Joi.string().required().min(3).label('Movie Title'),
        year: Joi.number().integer().min(1900).max(2020)
    }

    tblTemplate = [
        {name: 'Title', selector: 'title', sortable: true, isExport: true, isFilter: true},
        {name: 'Year', selector: 'year', sortable: true, isExport: true, isFilter: true},
        {name: <i className="icon-menu-open2"></i>, cell: row => <RowAction onClick={() => this.delData(row.id)} />, right: true, allowOverflow:true}
    ];




    doSubmit = () => {
        //Call Server
        console.log('Submitted');
    }

    render() { 
        const {filtered: data} = this.getPageData();
        const {inputFiled,  errors} = this.state;
        return ( 
            <React.Fragment>
                <Main title="Brands" header="Brands">

                <BrandBox disableSubmit={this.validate()} inputVal={inputFiled} error={errors} handleInputs={this.handleInput} onSubmit={this.handleSubmit} />

                <DataTable 
                    actions={<TableHeader 
                            tableData={data} 
                            reportName="Brand Name" 
                            tableHeaderData={this.getExportData()} 
                            selectColumn={this.searchColumn} 
                            isExport={true} bulkDelete={this.handleBulkDelete} 
                            filterColumns={this.filterColumn()} 
                            onChange={this.handleSearch} 
                        />}
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