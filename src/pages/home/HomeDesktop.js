import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { greyColor, primaryColor } from '../../App';
import { FlexBox } from '../../components/Containers';
import { Progress, Space } from 'antd';


function HomeDesktop(props) {

    const date = new Date();
    const [ month, setMonth ] = useState(date.toString().split(' ')[1] + ' ' + date.toString().split(' ')[3]);
    const [ totalTasks, setTotalTask ] = useState(12);
    const [ completedTasks, setCompletedTask ] = useState(9);
    const [ ongoingTasks, setOngoingTasks ] = useState(12);
    const [ inactiveTask, setInactiveTask ] = useState(8);
    const [ pendingTasks, setPendingTask ] = useState(3);

    const [ earnings, setEarnings ] = useState('**,***');

    const [ target, setTarget ] = useState('1,222');

    const [ darStatus, setDarStatus ] = useState({
        completed: 9,
        upcoming: 0
    });

    const [ totalTotalTasks, setTotalTotalTask ] = useState(20);

    const [ todayAttendence, setTodayAttendence ] = useState('Present');
    const [ totalPresent, setTotalPresent ] = useState(22);
    const [ totalAbsent, setTotalAbsent ] = useState(2);
    const [ totalLeave, setTotalLeave ] = useState(0);


    return (
        <div style={{backgroundColor: 'white', width :'80%', margin: 'auto'}} align="center"> 
            <Row style={{padding: '40px'}}>
                <Col span={8} style={{borderLeft: `4px solid ${primaryColor}`, paddingLeft: '15px', paddingTop: '0px'}} align="left">
                    <h3 style={{margin: '0px auto'}}>My task list</h3>
                    <span style={{color: 'grey'}}>{month}</span>
                </Col>
                <Col span={16} align="left">
                     
                    <span style={{color: 'grey'}}>Self-shielded open arc continuous wire with high resistance to friction<br/> and compression, suitable for multilayer build-up. </span>
                </Col> 
            </Row>
            <br/>
            <br/>
            <Row>
                <Col span={12} align="center" style={{borderRight: `1px solid ${greyColor}`}}> 
                <FlexBox style={{alignContent: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%'}}>
                    <Progress style={{fontSize: '50px', fontWeight: 'bold'}} strokeWidth='8' strokeColor={'#009788'} width='280px' type="circle" percent={totalTasks/totalTotalTasks*100} format={(number) => <>{totalTasks} <br/> <span style={{fontSize: '20px'}}>Total Tasks</span></>} /> 
                </FlexBox> 
                </Col>
                <Col span={12}>
                <FlexBox style={{flexDirection: 'column'}}>
                    <FlexBox style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <Progress style={{fontSize: '14px', fontWeight: 'bold',}} strokeWidth='8' width='70px' strokeColor={'#009788'} type="circle" percent={completedTasks/totalTotalTasks*100} format={(number) => <>{completedTasks}</>} /> 
                    <span style={{marginLeft: '30px', marginTop: '10px', marginLeft: '30px'}}>
                        <span style={{color: primaryColor, fontSize: '16px', fontWeight: 'bold', margin: 'auto'}}>COMPLETE</span> <br/>
                        <span>{completedTasks} Task</span>
                    </span>
                    </FlexBox>
                    <br/>
                    <FlexBox style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <Progress style={{fontSize: '14px', fontWeight: 'bold'}} strokeWidth='8' width='70px' strokeColor={'#2C6BE3'} type="circle" percent={ongoingTasks/totalTotalTasks*100} format={(number) => <>{ongoingTasks}</>} /> 
                    <span style={{marginLeft: '30px', marginTop: '10px', marginLeft: '30px'}}>
                        <span style={{color: primaryColor, fontSize: '16px', fontWeight: 'bold', margin: 'auto'}}>ONGOING</span> <br/>
                        <span>{ongoingTasks} Task</span>
                    </span>
                    </FlexBox>
                    <br/>
                    <FlexBox style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <Progress style={{fontSize: '14px', fontWeight: 'bold'}} strokeWidth='8' width='70px' strokeColor={'#F19919'} type="circle" percent={inactiveTask/totalTotalTasks*100} format={(number) => <>{inactiveTask}</>} /> 
                    <span style={{marginLeft: '30px', marginTop: '10px', marginLeft: '30px'}}>
                        <span style={{color: primaryColor, fontSize: '16px', fontWeight: 'bold', margin: 'auto'}}>INACTIVE</span> <br/>
                        <span>{inactiveTask} Task</span>
                    </span>
                    </FlexBox>
                    <br/>
                    <FlexBox style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <Progress style={{fontSize: '14px', fontWeight: 'bold'}} strokeWidth='8' width='70px' strokeColor={'#C40030'} type="circle" percent={pendingTasks/totalTotalTasks*100} format={(number) => <>{pendingTasks}</>} /> 
                    <span style={{marginLeft: '30px', marginTop: '10px', marginLeft: '30px'}}>
                        <span style={{color: primaryColor, fontSize: '16px', fontWeight: 'bold', margin: 'auto'}}>PENDING</span> <br/>
                        <span>{pendingTasks} Task</span>
                    </span>
                    </FlexBox>
                    <br/>
                </FlexBox> 
                </Col>
            </Row>
            <br/>
            <br/>
            <hr style={{ border: 'none', borderTop: '1px dotted silver',}}/>
            <br/>
            <Row>
                <Col span={4}></Col>
                <Col span={4} align="left">
                    <span>Earning</span>
                    <br/>
                    <h2>&#x20B9; {earnings}</h2>
                </Col>
                <Col span={4} align="left">
                <span>DAR Status</span>
                    <br/>
                    <br/>
                    <span><span style={{color: '#009788', fontSize: '22px'}}><b>{darStatus.completed}</b></span> Completed &nbsp; &nbsp; <span style={{color: '#C40030', fontSize: '22px'}}><b>{darStatus.upcoming}</b></span> Upcoming</span>
                </Col>
                <Col span={12} align="center">
                    <h3 style={{fontWeight: '500'}}>Total Target {date.toString().split(' ')[1]} {target} tasks</h3>
                </Col>
            </Row>
            <br/>
            <hr style={{ border: 'none', borderTop: '1px dotted silver',}}/>
            <br/>
            <Row stye={{backgroundColor: '#FFFBF7'}}> 
                    <Col span={12} align="left" style={{paddingLeft: '40px'}}>
                        <h2>Today's Attendence &nbsp; &nbsp;  <span style={{color: todayAttendence === 'Present' ? '#04CE88' : '', fontSize: '17px'}}>{todayAttendence}</span></h2>
                    </Col>
                    <Col span={12} align="right">

                    </Col>
                </Row>
                <Row stye={{backgroundColor: '#FFFBF7'}}>
                    <Col span={24} style={{padding: '0px 40px'}} align="left">
                        <Progress strokeWidth={12} strokeColor="#04CE88" percent={65} />
                        <br/>
                        <br/>
                        <span style={{marginRight: '30px'}}><span style={{fontSize: '20px', color: '#02CB88'}}>{totalPresent}</span> &nbsp;  Present</span>
                        <span style={{marginRight: '30px'}}><span style={{fontSize: '20px', color: '#FE5847'}}>{totalAbsent}</span> &nbsp;  Absent</span>
                        <span style={{marginRight: '30px'}}><span style={{fontSize: '20px'}}>{totalLeave}</span> &nbsp; Leave</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Col>
                </Row>  
        </div>
    );
}

export default HomeDesktop;