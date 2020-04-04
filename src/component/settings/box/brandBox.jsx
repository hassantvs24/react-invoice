import React, { Component } from 'react';

class BrandBox extends Component {
    state = {  }
    render() { 
        return ( 
                <React.Fragment>
                    <button type="button" className="btn btn-primary btn-labeled" data-toggle="modal" data-target="#myModal"><b><i className="icon-file-plus"></i></b> New Expense</button>
                    {/* Add Modal */}
                    <div id="myModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h5 className="modal-title"><i className="icon-file-plus"></i> New Modal</h5>
                                </div>

                                <form action="#/" method="post" encType="multipart/form-data">
                
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label">Cash In Amount:</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" name="amount" placeholder="Cash In Amount" type="number" step="any" value="0"  min="0" required />
                                            </div>
                                        </div><br />
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i className="icon-cancel-circle2"></i> Close</button>
                                        <button type="submit" id="submit-all" className="btn btn-primary"><i className="icon-checkmark4"></i> Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* /Add Modal */}


                    {/* Edit Modal */}
                    <div id="ediModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h5 className="modal-title"><i className="icon-file-plus"></i> Edit Modal</h5>
                                </div>

                                <form action="#/" method="post" encType="multipart/form-data">
                
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label">Cash In Amount:</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" name="amount" placeholder="Cash In Amount" type="number" step="any" value="0"  min="0" required />
                                            </div>
                                        </div><br />
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i className="icon-cancel-circle2"></i> Close</button>
                                        <button type="submit" id="submit-all" className="btn btn-primary"><i className="icon-checkmark4"></i> Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* /Edit Modal */}
            </React.Fragment>
         );
    }
}
 
export default BrandBox;