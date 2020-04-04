import React, { Component } from 'react';
import AddModal from '../../common/addModal';
import EditModal from '../../common/editModal';
import GnInput from '../../common/gnInput';

class BrandBox extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <button type="button" className="btn btn-primary btn-labeled" data-toggle="modal" data-target="#myModal"><b><i className="icon-file-plus"></i></b> New Expense</button>

                {/* Add Modal */}
                <AddModal title="Add Brand"> 
                    <GnInput label="Brand Name" name="name" type="text" rq={true} />
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