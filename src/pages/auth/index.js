import React, { useState } from 'react';
import CreateyourProfile from './CreateyourProfile';
import OtpAuthDesktop from './OtpAuthDesktop';
import { Row, Col } from 'antd';
import { Routes, Route, useRouteMatch } from 'react-router-dom';
import { FlexBox } from '../../components/Containers';
import { logo, logoText } from '../../assets';

function Auth(props) {

    const [ showPersoanlInfoForm, setShowPersonalInfoForm ] = useState(false);

    return (
        <Row>
            <Col span={12}
                style={{
                    height: '100vh',
                    background: 'linear-gradient(359.45deg, #FF971A 0.45%, #F26401 117.23%)'
                }}
            >
        <FlexBox style={{ height: '100%', flexDirection: 'column', alignContent: 'center', color: 'white' }}>
        
            <h1 style={{background: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '100px 0px', position: 'absolute', top:'100px', width: '100%'}}>
                <img src={logoText} style={{margin: 'auto'}} />
            </h1>
            <div style={{position: 'absolute', bottom: '100px', width: '100%'}} align="center">
            <span>Powered by</span>
            <h2>SUPERON</h2>
            </div>
                 </FlexBox>
            </Col>
            <Col span={12}
                style={{
                    height: '100vh',
                }}
            > 
            {
                showPersoanlInfoForm ? <CreateyourProfile /> : <OtpAuthDesktop proceed={()=>{
                    setShowPersonalInfoForm(true);
                }}/>
            }
            
            </Col>
        </Row>
    );
}

export default Auth;