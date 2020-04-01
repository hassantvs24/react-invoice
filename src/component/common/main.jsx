import React from 'react';
import { Title } from './title';

const Main = ({title, header, children}) => {
    return ( 
        <React.Fragment>
            {title && <Title title={title}/>}
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat border-top-success">
                        {header && <div className="panel-heading"><h6 className="panel-title">{header}</h6></div>}
        
                        <div className="panel-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Main;