import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

function Loader(props) {
    return (
        <div align="center" style={{paddingTop: '20%'}}>
            <LoadingOutlined style={{fontSize: '50px'}} />
        </div>
    );
}

export default Loader;