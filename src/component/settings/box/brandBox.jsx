import React, { Component } from 'react';
import AddModal from '../../common/addModal';
import EditModal from '../../common/editModal';
import GnInput from '../../common/gnInput';

class BrandBox extends Component {
    state = {  }
    render() { 
        const {id, title, year} = this.props.inputVal;
        const {id: errID, title: errTitle, year: errYear} = this.props.error;
        const {disableSubmit, onSubmit, handleInputs} = this.props;

        return ( 
            <React.Fragment>
                <button type="button" className="btn btn-primary btn-labeled" data-toggle="modal" data-target="#myModal">
                    <b><i className="icon-file-plus"></i></b> Add New Brand</button>

                {/* Add Modal */}
                <AddModal title="Add New Brand" validate={disableSubmit} link={onSubmit}> 
                    <GnInput label="ID" name="id" type="number" error={errID} onChange={handleInputs} min="0" value={id} rq={true} autocomplete="off" />
                    <GnInput label="Title" name="title" type="text" error={errTitle} onChange={handleInputs} value={title} rq={true} autocomplete="off" />
                    <GnInput label="Year" name="year" type="number" error={errYear} onChange={handleInputs} value={year} min="0" rq={true} autocomplete="off" />
                </AddModal>
                {/* /Add Modal */}


                {/* Edit Modal */}
                <EditModal title="Edit Brand" validate={disableSubmit} link={onSubmit}> 
                    <GnInput label="ID" name="id" type="number" error={errID} onChange={handleInputs} min="0" value={id} rq={true} autocomplete="off" />
                    <GnInput label="Title" name="title" type="text" error={errTitle} onChange={handleInputs} value={title} rq={true} autocomplete="off" />
                    <GnInput label="Year" name="year" type="number" error={errYear} onChange={handleInputs} value={year} min="0" rq={true} autocomplete="off" />
                </EditModal>
                {/* /Edit Modal */}
            
            </React.Fragment>
        );
    }
}
 
export default BrandBox;