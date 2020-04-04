import React, { Component } from 'react';
import AddModal from '../../common/addModal';
import EditModal from '../../common/editModal';
import GnInput from '../../common/gnInput';

class BrandBox extends Component {
    state = {  }
    render() { 
        const {id, title, year} = this.props.inputVal;
        //const {id, title, year} = this.props.error;

        return ( 
            <React.Fragment>
                <button type="button" className="btn btn-primary btn-labeled" data-toggle="modal" data-target="#myModal">
                    <b><i className="icon-file-plus"></i></b> Add New Brand</button>

                {/* Add Modal */}
                <AddModal title="Add New Brand" link={this.props.onSubmit}> 
                    <GnInput label="ID" name="id" type="number" error={this.props.error.id} onChange={this.props.handleInputs} min="0" value={id} rq={true} />
                    <GnInput label="Title" name="title" type="text" error={this.props.error.title} onChange={this.props.handleInputs} value={title} rq={true} />
                    <GnInput label="Year" name="year" type="number" error={this.props.error.year} onChange={this.props.handleInputs} value={year} min="0" rq={true} />
                </AddModal>
                {/* /Add Modal */}


                {/* Edit Modal */}
                <EditModal title="Edit Brand"> 
                    <GnInput label="Brand Name" name="name" type="text" rq={true} />
                </EditModal>
                {/* /Edit Modal */}
            
            </React.Fragment>
        );
    }
}
 
export default BrandBox;