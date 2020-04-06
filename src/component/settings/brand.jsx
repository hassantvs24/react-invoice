import React from 'react';
import Joi from 'joi-browser';
import {toast} from 'react-toastify';
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
        {name: <i className="icon-menu-open2"></i>, cell: row => <RowAction editPopulate={() => this.editModalPopulate(row.id) } onClick={() => this.delData(row.id)} />, right: true, allowOverflow:true}
    ];

    editModalPopulate = (id) => {
        const originalData = this.state.data;

        const val = originalData.find((val) => {
            return val.id === id;
          });

        this.setState({errors: {}, inputFiled: this.mapToViewModal(val)});

    }

    addModalReset= () => {
         this.setState({errors: {}, inputFiled:  this.mapToResetModal()});
     }


    doSubmit = () => {
        //Call Server
        const {inputFiled, data: originalData} = this.state;

        const i = originalData.findIndex((val) => {
            return val.id === Number(inputFiled.id);
          });

          if(i === -1){
            const setData = [...originalData, this.mapToViewModal(inputFiled)];
            this.setState({data: setData, inputFiled: this.mapToResetModal()});
            this.handleCloseModal();
            toast.success(config.edit);

          }else{
            originalData[i] =  this.mapToViewModal(inputFiled);
            const setData = originalData;
            this.setState({data: setData, inputFiled: this.mapToResetModal()});
            this.handleCloseModal();
            toast.success(config.edit);
          }
        
    }

    mapToViewModal(input){
        return {
            id: Number(input.id), 
            title: input.title, 
            year: input.year
        }
    }

    mapToResetModal(){
        return {
            id: '', 
            title: '', 
            year: '',
        }
    }

    render() { 
        const {filtered: data} = this.getPageData();
        const {inputFiled,  errors} = this.state;
        return ( 
            <React.Fragment>
                <Main title="Brands" header="Brands">

                <BrandBox 
                    disableSubmit={this.validate()} 
                    modalReset={this.addModalReset} 
                    inputVal={inputFiled} 
                    error={errors} 
                    handleInputs={this.handleInput} 
                    onSubmit={this.handleSubmit} 
                />

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