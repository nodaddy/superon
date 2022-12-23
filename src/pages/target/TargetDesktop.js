import { Col, DatePicker, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { greyColor, primaryColor } from '../../App';
import { FlexBox } from '../../components/Containers';
import { Progress, Space } from 'antd';
import { getRequest, postRequest } from '../../services';
import Button from '../../components/Button';


function TargetDesktop(props) {

    const date = new Date();
    const [ month, setMonth ] = useState(date.toString().split(' ')[1] + ' ' + date.toString().split(' ')[3]);
    const [ totalTasks, setTotalTask ] = useState(12);
    const [ completedTasks, setCompletedTask ] = useState(9);
    const [ ongoingTasks, setOngoingTasks ] = useState(12);
    const [ inactiveTask, setInactiveTask ] = useState(8);
    const [ pendingTasks, setPendingTask ] = useState(3);

    const [ ledgerFrom, setLedgerFrom ] = useState(null);
    const [ ledgerTo, setLedgerTo ] = useState(null);

    const [ currentTargetReport, setCurrentTargetReport ] = useState({
                        achievedPercentage: 80,
                        target: '...',
                        ongoing: '...',
                        balance: '...',
                        amount: '...'
    });

    const [ ctrTableData, setCtrTableData ] = useState(null);
 

    const [ target, setTarget ] = useState('1,222');

    const [ darStatus, setDarStatus ] = useState({
        completed: 9,
        upcoming: 0
    });

    const [ totalTotalTasks, setTotalTotalTask ] = useState(20);

     useEffect(()=>{
        getRequest('/target/current-target-report').then(res => {
            setCurrentTargetReport(res.data);
        });
        getRequest('/target/ctr-table').then(res => {
            setCtrTableData(res.data);
        });
     }, []);

     const downloadLedger = (from ,to) => {
        postRequest(`/target/downloadLedger`, {
            from: from,
            to: to
        })
     }

    return (
        <div style={{backgroundColor: 'white', width :'80%', margin: 'auto'}} align="center"> 
            <Row style={{padding: '40px'}}>
                <Col span={8} style={{borderLeft: `4px solid ${primaryColor}`, paddingLeft: '15px', paddingTop: '0px'}} align="left">
                    <h3 style={{margin: '0px auto'}}>Current Target</h3>
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
                <Col span={24} align="center">
                    <h3 style={{fontWeight: '500'}}>Total Target {date.toString().split(' ')[1]} {target} tasks</h3>
                </Col>
            </Row>
            <br/>
            <hr style={{ border: 'none', borderTop: '1px dotted silver',}}/>
            <br/>
            <Row>
                <Col span={24} align="center">
                    <h2 style={{fontWeight: '500'}}>Current Target Report </h2>
                    <hr/>
                    <FlexBox justifyContent='space-around' style={{ height: '100%', width: '100%', alignItems: 'center'}}>
                        <Progress style={{fontSize: '17px', fontWeight: 'bold'}} strokeWidth='12' strokeColor={'#009788'} width='100px' type="circle" percent={currentTargetReport.achievedPercentage} format={(number) => <>{currentTargetReport.achievedPercentage+ '%'} <br/> <span style={{fontSize: '16px', color: 'grey'}}>Achieved</span></>} /> 
                            <span align="left">
                                <h3 style={{color: primaryColor}}>TARGET</h3>
                                <h3>{currentTargetReport.target}</h3>
                            </span>
                            <span align="left">
                                <h3 style={{color: primaryColor}}>ON GOING</h3>
                                <h3>{currentTargetReport.ongoing}</h3>
                            </span>
                            <span align="left">
                                <h3 style={{color: primaryColor}}>BALANCE</h3>
                                <h3>{currentTargetReport.balance}</h3>
                            </span>
                            <span align="left"> 
                                <h3>{currentTargetReport.amount}</h3>
                            </span>
                    </FlexBox> 
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <hr/>
            <br/>
            <Row>
                <Col span={24} align="center">
                    <FlexBox justifyContent='space-around' style={{ width: '100%', alignItems: 'center', backgroundColor: 'black'}}>
                            <span align="left">
                                <h4 style={{color: 'white'}}>Date</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: 'white'}}>Unit</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: 'white'}}>Wtr.</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: 'white'}}>Qty.</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: 'white'}}>Rate</h4>
                            </span>
                    </FlexBox> 
                   
                            { ctrTableData && ctrTableData.map(row => {
                                return <FlexBox justifyContent='space-around' style={{ width: '100%', alignItems: 'center', margin: '15px 0px'}}>
                                            <span align="left">
                                                {row.date}
                                            </span>
                                            <span align="left">
                                                {row.unit}
                                            </span>
                                            <span align="left">
                                                {row.wtr}
                                            </span>
                                            <span align="left">
                                                {row.qty}
                                            </span>
                                            <span align="left">
                                             {row.rate}
                                            </span>
                                        </FlexBox>
                            })
                        }
                </Col>
            </Row> 
            <br/>
            <hr style={{ border: 'none', borderTop: '1px dotted silver',}}/>
            <br/>
            <br/>
            <Row>
                <Col span={24} align="center">
                    <h2 style={{fontWeight: '500'}}>Customer Ledger </h2> 
                    <FlexBox justifyContent='space-around' style={{ width: '90%', alignItems: 'center'}}>
                        <DatePicker placeholder='From' size='large' style={{borderRadius: '3px', width : '30%'}} onChange={(e)=>{
                            setLedgerFrom(e);
                        }} />
                        <DatePicker placeholder='To' size='large' style={{borderRadius: '3px',  width : '30%'}} onChange={(e)=>{
                            setLedgerTo(e);
                        }}/>
                        <Button
                        style={{ width : '30%', paddingTop: '13px', paddingBottom: '13px'}}
                        onClick={()=>{
                            alert(ledgerFrom);
                            alert(ledgerTo);
                            downloadLedger();
                        }}
                        >Download</Button>
                    </FlexBox> 
                </Col>
            </Row>
            <br/>
            <br/>

             
        </div>
    );
}

export default TargetDesktop;