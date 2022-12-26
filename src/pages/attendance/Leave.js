import React, { useEffect, useState } from 'react';
import { primaryColor } from '../../App';
import Button from '../../components/Button';
import { FlexBox } from '../../components/Containers';
import Loader from '../../components/Loader';
import { getRequest } from '../../services';
import ApplyForLeave from './ApplyForLeave';
import LeaveApprovals from './LeaveApprovals';

function Leave(props) {

    const [ currentTab, setCurrentTab ] = useState('request');
    const [ leaveInfo, setLeaveInfo ] = useState(null);

    useEffect(()=>{
        getRequest('/attendance/leave-info').then(res => {
            setLeaveInfo(res.data);
        })
    })


    return (
        !leaveInfo ? <Loader /> :
        <div style={{backgroundColor: 'white', minHeight: '80vh'}}>
            <FlexBox justifyContent='start' style={{width: '90%'}}>
                <button onClick={()=>{
                    setCurrentTab('request');
                }} style={{cursor: 'pointer', padding: '20px 40px', border: '0px', borderBottom: currentTab === 'request' ? `2px solid ${primaryColor}` : '0px', color: currentTab === 'request' ? primaryColor : 'black', backgroundColor: 'white' }}>Request</button>
                <button onClick={()=>{
                    setCurrentTab('approval');
                }} style={{cursor: 'pointer',padding: '20px 40px', border: '0px', borderBottom: currentTab === 'approval' ? `2px solid ${primaryColor}` : '0px', color: currentTab === 'approval' ? primaryColor : 'black', backgroundColor: 'white' }}>Approvals</button>
            </FlexBox>

        <br/>
        {currentTab === 'request' ? <>

            <FlexBox justifyContent='space-around' style={{ boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)' , width: '90%', alignItems: 'center', backgroundColor: 'white', padding: '10px 0px', marginBottom: '2px'}}>
                <span align="center">
                    <h3>Loss Of Pay</h3>
                </span>
                <span align="left">
                    <h3 style={{margin: '5px'}}>{leaveInfo.lossOfPay.total}</h3>
                <span style={{color: 'grey'}}>Total</span>
                </span>
                <span align="left">
                <h3 style={{margin: '5px'}}>{leaveInfo.lossOfPay.credited}</h3>
                <span style={{color: 'grey'}}>Credited</span>
                </span>
                <span align="left">
                <h3 style={{margin: '5px'}}>{leaveInfo.lossOfPay.applied}</h3>
                <span style={{color: 'grey'}}>Applied</span>
                </span>
                <span align="left">
                <h3 style={{margin: '5px'}}>{leaveInfo.lossOfPay.penalty}</h3>
                <span style={{color: 'grey'}}>Penalty</span>
                </span>
                <span align="left">
                <Button onClick={()=>{
                    document.getElementById('lower').style.display = 'none';
                    document.getElementById('upper').style.display = 'block';
                }}>Apply</Button>
                </span>
            </FlexBox> 
        <div id='upper' style={{display: 'none'}}>
        <ApplyForLeave />

        </div>

        <br/>
        <FlexBox justifyContent='space-around' style={{ boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)' , width: '90%', alignItems: 'center', backgroundColor: 'white', padding: '10px 0px', marginBottom: '2px'}}>
            <span align="center">
                <h3>Casual Leaves</h3>
            </span>
            <span align="left">
                <h3 style={{margin: '5px'}}>{leaveInfo.casualLeaves.total}</h3>
            <span style={{color: 'grey'}}>Total</span>
            </span>
            <span align="left">
            <h3 style={{margin: '5px'}}>{leaveInfo.casualLeaves.credited}</h3>
            <span style={{color: 'grey'}}>Credited</span>
            </span>
            <span align="left">
            <h3 style={{margin: '5px'}}>{leaveInfo.casualLeaves.applied}</h3>
            <span style={{color: 'grey'}}>Applied</span>
            </span>
            <span align="left">
            <h3 style={{margin: '5px'}}>{leaveInfo.casualLeaves.penalty}</h3>
            <span style={{color: 'grey'}}>Penalty</span>
            </span>
            <span align="left">
                <Button onClick={()=>{
                    document.getElementById('lower').style.display = 'block';
                    document.getElementById('upper').style.display = 'none';
                }}>Apply</Button>
            </span>
        </FlexBox> 
        <div id='lower' style={{display: 'none'}}>
        <ApplyForLeave />

        </div>
        </> : <LeaveApprovals data={leaveInfo.approvals} />
        }
      
        </div>
    );
}

export default Leave;