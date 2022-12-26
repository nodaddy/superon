import { DownOutlined, LoadingOutlined, LoginOutlined, RightOutlined } from '@ant-design/icons';
import { Col, DatePicker, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { primaryColor } from '../../App';
import { FlexBox } from '../../components/Containers';
import Loader from '../../components/Loader';
import { getRequest } from '../../services';
import { sessionStorageUserInfoKey } from '../../utility';
import Leave from './Leave';

const PunchCard = (cardData) => {
    const { date, day, punchInTime, punchOutTime, attendanceStatus } = cardData;
    return <FlexBox justifyContent='space-around' style={{ width: '100%', alignItems: 'center', backgroundColor: 'white', padding: '5px 0px', marginBottom: '2px'}}>
            <span align="center" style={{backgroundColor: '#E9E9E9', borderRadius: '7px', padding: '10px 15px', width: '30px'}}>
                <span>{date}</span><br/>
                <span>{day}</span>
            </span>
            <span align="left">
            <span style={{color: 'grey'}}>Punch in</span>
            <br/>
            <span>{punchInTime}</span>
            </span>
            <span align="left">
            <span style={{color: 'grey'}}>Punch out</span>
            <br/>
            <span>{punchOutTime}</span>
            </span>
            <span align="left">
            <h2 style={{color: primaryColor}}>{attendanceStatus}</h2>
            </span>
            <span align="left">
                <button style={{borderRadius: '50px', padding: '10px 30px', border: '1px solid silver', backgroundColor: 'white'}}>View</button>
            </span>
        </FlexBox> 
}

function Attendance(props) {

    const tabTypes = ['punch', 'attendance', 'leave'];
    

    const date = new Date();
    const currentMonth = date.toString().split(' ')[1] + ' ' + date.toString().split(' ')[3];


    const [ attendanceData, setAttendanceData ] = useState(null);
    const [ historyMonth, setHistoryMonth ] = useState(currentMonth.split(' ')[0].toLowerCase());
    const [ historyYear, setHistoryYear ] = useState(currentMonth.split(' ')[1]);
    const [ currentTab, setCurrentTab ] = useState(tabTypes[0]);


    const userInfo = JSON.parse(sessionStorage.getItem(sessionStorageUserInfoKey));
     

    useEffect(()=>{
        getRequest(`/attendance/history/${historyMonth}/${historyYear}`).then(res => {
            setAttendanceData(res.data);
            console.log(res.data);
        })
    }, [historyMonth, historyYear]);

    return (
        attendanceData == null ? <Loader /> :
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
                    <span><LoginOutlined /> &nbsp;Punch</span>
                    <RightOutlined />
                </FlexBox>
                {/* <FlexBox justifyContent='space-between' style={{ padding: '20px 40px',backgroundColor: currentTab === tabTypes[1] ? '#FBF2EA': 'white', color: 'black', alignItems: 'center'}} onClick={()=>{
                    setCurrentTab(tabTypes[1]);
                }}>
                    <span><LoginOutlined /> &nbsp; Attendance</span>
                    <RightOutlined />
                </FlexBox> */}
                <FlexBox justifyContent='space-between' style={{ padding: '20px 40px',backgroundColor: currentTab === tabTypes[2] ? '#FBF2EA': 'white', color: 'black', alignItems: 'center'}} onClick={()=>{
                    setCurrentTab(tabTypes[2]);
                }}>
                    <span><LoginOutlined /> &nbsp; Leave</span>
                    <RightOutlined />
                </FlexBox>
            </Col>
                <Col span={18} align="center" style={{padding: '20px'}}> 
                    <div style={{display: currentTab === tabTypes[0] ? 'block' : 'none'}}>
                        <FlexBox justifyContent='space-around' style={{paddingTop: '20px', backgroundColor: '#FFFAF6'}}> 
                        <span align="left">
                            
                             <DatePicker
                            style={{ backgroundColor: 'white', border: `2px solid ${primaryColor}`, borderRadius: '30px', padding: '10px 20px' }}
                            picker='month' onChange={(e)=>{
                                console.log(e);
                                    setHistoryMonth((e.toString().split(' ')[2]).toLowerCase());
                                    setHistoryYear(e.toString().split(' ')[3]);
                                
                            }}/>
                        </span>

                        <span align="left" style={{opacity: 0}}>
                        <span style={{color: 'grey'}}>Punch in</span>
                        <br/>
                        <span>punchInTime</span>
                        </span>
                        <span align="left" style={{opacity: 0}}>
                        <span style={{color: 'grey'}}>Punch out</span>
                        <br/>
                        <span>punchOutTime</span>
                        </span>
                        <span align="left" style={{opacity: 0}}>
                        <h2 style={{color: primaryColor}}>--</h2>
                        </span>

                        <span align="left">
                            {/* <button style={{borderRadius: '50px', padding: '8px 30px', border: '1px solid silver', backgroundColor: 'white'}}>View all</button> */}
                        </span>
                        </FlexBox>
                            {
                                attendanceData === null ? <Loader /> : attendanceData.map(cardData => {
                                    return PunchCard(cardData);
                                })
                            }
                    </div>
                    {
                        currentTab === tabTypes[2] ? <Leave /> : null
                    }
                </Col>
                
            </Row>
        </div>
    );
}

export default Attendance;