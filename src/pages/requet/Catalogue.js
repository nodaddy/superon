import React, { useState } from 'react';
import { FileOutlined, GifOutlined, TagOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { primaryColor } from '../../App';
import Button from '../../components/Button';
import { FlexBox } from '../../components/Containers';
import Loader from '../../components/Loader';
import { postRequest } from '../../services';

function Catalogue(props) {
    const { data, getAllData } = props;
    const [ currentTab, setCurrentTab ] = useState('request');
    const [ sendingRequest, setSendingRequest ] = useState(false);

    const applyRequest = (item) => {
        setSendingRequest(true);
        postRequest('/request/apply', { item: item}).then((res) => {
            if(res.status == 200){
                setSendingRequest(false);
                getAllData();
            } else {
                alert('something went wrong');
            }
        })
    }

    return ( 
        data == null ? <Loader />
        :
        sendingRequest === false ? 
        <div style={{backgroundColor: 'white',  minHeight: '80vh'}}>
             <FlexBox justifyContent='start' style={{width: '90%'}}>
                <button onClick={()=>{
                    setCurrentTab('request');
                }} style={{cursor: 'pointer', padding: '20px 40px', border: '0px', color: currentTab === 'request' ? primaryColor : 'black', borderBottom: currentTab === 'request' ? `2px solid ${primaryColor}` : '0px', backgroundColor: 'white' }}>Request</button>
                <button onClick={()=>{
                    setCurrentTab('approval');
                }} style={{cursor: 'pointer',padding: '20px 40px', border: '0px', color: currentTab === 'approval' ? primaryColor : 'black',borderBottom: currentTab === 'approval' ? `2px solid ${primaryColor}` : '0px', backgroundColor: 'white' }}>Approvals</button>
            </FlexBox>
            <br/>
            {
                currentTab === 'request' ? data?.requests.map(row => {
                    return <><FlexBox justifyContent='space-around' style={{boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)' , width: '90%', alignItems: 'center', backgroundColor: 'white', padding: '10px 0px', marginBottom: '2px'}}>
                        <h3><TagOutlined /> &nbsp; Request for {row.item}</h3>
                        <span><b>{row.total}</b><br/>Total</span>
                        <span><b>{row.applied}</b><br/>Applied</span>
                        <Button style={{height: '100%'}} onClick={()=>{
                            applyRequest(row.item);
                        }}>Apply</Button>
                    </FlexBox><br/></>
                }) : null
            }
            {
                currentTab === 'approval' ? <>
                <Row>
                <Col span={24} align="center" style={{width: '90%'}}>
                    <FlexBox align='left' justifyContent='space-around' style={{ width: '90%', alignItems: 'center', backgroundColor: '#FBF2EA'}}>
                            <span align="left">
                                <h4 style={{color: ''}}>Date</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: ''}}>Sample</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: ''}}>Status</h4>
                            </span>
                    </FlexBox> 
                   
                    {
                    data?.approvals.map(row => {
                        return <>
                        <FlexBox align='left' justifyContent='space-around' style={{ width: '90%', alignItems: 'center'}}>
                            <span align="left">
                                <h4 style={{color: ''}}>{row.date}</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: ''}}>{row.sample}</h4>
                            </span> 
                            <span style={{
                                        color: row.status.toLowerCase() == 'pending' ? 'goldenrod' :
                                        row.status.toLowerCase() == 'approved' ? 'green':
                                        row.status.toLowerCase() == 'rejected' ? 'red' : 'black'
                                        }}>
                                            {row.status}
                                        </span>
                    </FlexBox>
                    <hr style={{width: '90%', border: '0px', borderBottom: '1px solid silver'}}/>

                    </>
                    })
                }
                </Col>
            </Row> 
                
                
                </> : null
            }
        </div> : <Loader />
    );
}

export default Catalogue;