import { Col, Row } from 'antd';
import React from 'react';
import { FlexBox } from '../../components/Containers';

function LeaveApprovals(props) {
    const { data } = props;
    return (
        <Row>
                <Col span={24} align="center" style={{width: '90%'}}>
                    <FlexBox align='left' justifyContent='space-around' style={{ width: '90%', alignItems: 'center', backgroundColor: '#FBF2EA'}}>
                            <span align="left">
                                <h4 style={{color: ''}}>From</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: ''}}>total</h4>
                            </span>
                            <span align="left">
                                <h4 style={{color: ''}}>Status</h4>
                            </span>
                    </FlexBox> 
                   
                            { data && data.map(row => {
                                return <><FlexBox justifyContent='space-around' style={{ width: '90%', alignItems: 'center', margin: '15px 0px'}}>
                                            <span align="left">
                                                {row.from}
                                            </span>
                                            <span align="left">
                                                {row.to}
                                            </span>
                                            <span align="left">
                                                <span style={{
                                                    color: row.status.toLowerCase() == 'pending' ? 'goldenrod' :
                                                    row.status.toLowerCase() == 'approved' ? 'green':
                                                    row.status.toLowerCase() == 'rejected' ? 'red' : 'black'
                                                    }}
                                                >{row.status}</span>
                                            </span>
                                        </FlexBox>
                                        <hr style={{width: '90%', border: '0px', borderBottom: '1px solid silver'}}/>
                                        </>
                            })
                        }
                </Col>
            </Row> 
    );
}

export default LeaveApprovals;