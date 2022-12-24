import { DatePicker, Dropdown, Input } from 'antd';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { FlexBox } from '../../components/Containers';
import Loader from '../../components/Loader';
import { postRequest } from '../../services';

function ApplyForLeave(props) {

    const [ applyLeaveData, setApplyLeaveData ] = useState({});
    const [ sending, setSending ] = useState(false);

    const applyForLeave = () => {
        if(Object.keys(applyLeaveData).length < 5){
            alert('all values are required');
        } else {
            setSending(true);
            postRequest('/attendance/apply-for-leave', applyLeaveData).then((res) => {
                if(res.status == 200){
                    setSending(false);
                    alert('Leave application sent');
                } else {
                    alert('something went wrong!');
                }
            })
        }
       
    }

    return (
        sending == true ? <Loader /> :
        <div style={{width :'90%'}}>
            <h3 align="left">Apply for leave</h3>
            <FlexBox justifyContent='space-between'>
                <select onChange={e => {
                    setApplyLeaveData({...applyLeaveData, leaveType: e.target.value});
                }} style={{width: '37%', height: '45px', border: '1px solid #d9d9d9', padding: '10px', borderRadius: '4px'}}>
                <option value='select'>Select leave type</option>
                    <option value='casual'>Casual leave</option>
                    <option value='lossofpay'>Loss of pay</option>
                </select>
                <DatePicker placeholder='Start date' size='large' style={{borderRadius: '3px', width : '28%'}} onChange={(e)=>{
                            setApplyLeaveData({...applyLeaveData, startDate: e.$d.toString()});  
                        }} />
                <DatePicker placeholder='End date' size='large' style={{borderRadius: '3px',  width : '28%'}} onChange={(e)=>{
                            setApplyLeaveData({...applyLeaveData, endDate: e.$d.toString()});  
                }}/>
            </FlexBox>
            <br/>
            <div align="left">
                <input type='radio'
                onChange={e => {
                    if(e.target.checked == true) setApplyLeaveData({...applyLeaveData, timeoff: e.target.value});
                }} name='timeoff' value='fullday' /> Full day &nbsp;&nbsp;
                <input type='radio'
                onChange={e => {
                    if(e.target.checked == true) setApplyLeaveData({...applyLeaveData, timeoff: e.target.value});
                }}
                name='timeoff' value='firsthalf' /> First half &nbsp;&nbsp;
                <input type='radio'
                onChange={e => {
                    if(e.target.checked == true) setApplyLeaveData({...applyLeaveData, timeoff: e.target.value});
                }}
                name='timeoff' value='secondhalf' /> Second half &nbsp;&nbsp;
            </div>
            <br/>
            <Input.TextArea
            onChange={e => {
                setApplyLeaveData({...applyLeaveData, reason: e.target.value});
            }} height='200px' placeholder='Reason'></Input.TextArea>
                <br/>
                <br/>
            <div align="left"> 
                <Button
                onClick={()=>{
                    applyForLeave()
                }}
                >Apply</Button>
            </div>
        </div>
    );
}

export default ApplyForLeave;