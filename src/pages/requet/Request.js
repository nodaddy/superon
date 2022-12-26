import { LoginOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { FlexBox } from '../../components/Containers';
import Loader from '../../components/Loader';
import { getRequest } from '../../services';
import { sessionStorageUserInfoKey } from '../../utility';
import Catalogue from './Catalogue';
import Sample from './Sample';

function Request(props) {

    const [ requests, setRequests ] = useState(null);
    const tabTypes = ['sample', 'catalogue'];
    const [ currentTab, setCurrentTab ] = useState(tabTypes[0]);

    const userInfo = JSON.parse(sessionStorage.getItem(sessionStorageUserInfoKey));

    const getData = () => {
        getRequest('/requests/all').then(res => {
            setRequests(res.data);
        })
    }
    useEffect(()=>{
        getData();
    }, [])

    return (
        requests == null ? <Loader /> :
        <div>
            <Row>
            <Col span={6} align="center" style={{padding:'20px'}}>
                <FlexBox style={{backgroundColor: 'white', color: 'black', alignItems: 'center', padding: '10px 0px'}}>
                    <img src={userInfo.profileImage} style={{height: '40px', width: '40px', borderRadius: '50%'}}/>
                    <span align="left" style={{marginLeft: '30px'}}>{userInfo.fullName}<br/>{userInfo.mobileNumber}</span>

                </FlexBox>
                <br/>
                <FlexBox justifyContent='space-between' style={{ padding: '20px 40px',backgroundColor: currentTab === tabTypes[0] ? '#FBF2EA': 'white', color: 'black', alignItems: 'center'}} onClick={()=>{
                    setCurrentTab(tabTypes[0]);
                }}>
                    <span><LoginOutlined /> &nbsp;Sample</span>
                    <RightOutlined />
                </FlexBox>
                <FlexBox justifyContent='space-between' style={{ padding: '20px 40px',backgroundColor: currentTab === tabTypes[1] ? '#FBF2EA': 'white', color: 'black', alignItems: 'center'}} onClick={()=>{
                    setCurrentTab(tabTypes[1]);
                }}>
                    <span><LoginOutlined /> &nbsp; Catalogue</span>
                    <RightOutlined />
                </FlexBox>
            </Col>
            <Col span={18} align="center" style={{padding: '20px'}}>
                {
                    currentTab === tabTypes[0] ? <Sample getAllData={getData} data={requests.sample} /> : currentTab === tabTypes[1] ? <Catalogue getAllData={getData}  data={requests.catalogue} /> : null
                }
            </Col>
            </Row>
        </div>
    );
}

export default Request;