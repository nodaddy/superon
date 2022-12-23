import { Loading3QuartersOutlined, LoadingOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import React, { useRef, useState } from 'react';
import Button from '../../components/Button';
import { FlexBox } from '../../components/Containers';
import { postRequest } from '../../services';

const HeadingColor = 'black';
const subHeadingColor = '#808080';

function OtpAuthDesktop(props) {

    const { proceed } = props;

    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ enterOtpFlag, setEnterOtpFlag ] = useState(false);
    const [ otp, setOtp ] = useState('******');
    const [ verifyingOtp, setVerifyingOtp ] = useState(false);
    const [ otpVerified, setOtpVerified ] = useState(false);
    const [ disablButtonFlag, setDisableButtonFlag ] = useState(true);

    const postPhoneNumber = () => {
        if(phoneNumber.length !== 10){
            alert('please enter a valid number');
        } else {
            setEnterOtpFlag(true);
        postRequest('/auth/otp/send', { cellphoneNumber: phoneNumber }).then((res)=>{
            // console.log(res.status);
        })
        setDisableButtonFlag(true);
        }
    }

    const autoVerifyOTP = () => {
        postRequest('/auth/otp/verify', { otp: otp }).then((res)=>{
            setVerifyingOtp(false);
            setDisableButtonFlag(false);
            proceed();
        })

        setVerifyingOtp(true);
    }

    const arrangeOTP = (digit, index) => {
        let otpString = otp;
        console.log(otpString.slice(0, index), otpString.slice(index + 1, 5));
        otpString = otpString.slice(0, index) + digit + otpString.slice(index + 1,5);
        setOtp(otpString);
        if(index !== 5) {document.getElementById(`otp_${index+1}`).focus(); }
        else { autoVerifyOTP(); }

    };

    return ( 
                <FlexBox style={{ height: '100%', flexDirection: 'column', paddingLeft: '18%',  justifyContent: 'left important' }}>
                    <h1 style={{fontWeight: '500', textAlign: 'left', width: '100%',}}>Welcome to Superon</h1>
                    <h4 style={{color: 'silver', fontWeight: '400', width: '100%', textAlign: 'left', marginTop: '-8px'}}>Aero eos et accusamus et iusto odio dignissimos</h4>
                    <br/>
                    <br/>
                    <h2 style={{fontWeight: '500', textAlign: 'left', width: '100%'}}>
                        {
                            enterOtpFlag ? 'Enter the OTP' : 'Enter Phone Number'
                        }
                    </h2>
                    <h4 style={{color: 'silver', fontWeight: '400', width: '100%', textAlign: 'left', marginTop: '-8px'}}>
                    {
                        enterOtpFlag ? `We have sent an OTP to ${phoneNumber}` : 'OTP will be sent to this number'
                    }
                        </h4>
                    <br/> 

                    {
                        enterOtpFlag ? 
                        <FlexBox style={{marginLeft: '-20%', padding: '0px  18%'}}>
                        <Input type='text' id='otp_0' onChange={(e) => {
                            arrangeOTP(e.target.value, 0);
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        <Input type='text' id='otp_1' onChange={(e) => {
                            arrangeOTP(e.target.value, 1)
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        <Input type='text' id='otp_2' onChange={(e) => {
                            arrangeOTP(e.target.value, 2)
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        <Input type='text' id='otp_3' onChange={(e) => {
                            arrangeOTP(e.target.value, 3)
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        <Input type='text' id='otp_4' onChange={(e) => {
                            arrangeOTP(e.target.value, 4)
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        <Input type='text' id='otp_5' onChange={(e) => {
                            arrangeOTP(e.target.value, 5)
                        }} maxLength={1} style={{  margin: 'auto', color: 'black', textAlign:'center', height: '53px', width: '12%', border: '0px', borderBottom: '1px solid grey', borderRadius: '0px', display: 'inline'}} step={false} placeholder=""/> 
                        
                        </FlexBox>
                        : 
                        <Input value={phoneNumber} onChange={(e)=>{
                            setPhoneNumber(e.target.value);
                            if(e.target.value.length === 10){
                                setDisableButtonFlag(false);
                            }
                        }} style={{ height: '53px', width: '80%'}} type='number' step={false} placeholder="Enter number"/>
                    }
                    <br/>
                    {
                        verifyingOtp ? 
                        <Row style={{width: '80%'}}>
                            <Col span={12}>
                                <div align="left" style={{fontSize: '12px'}}><LoadingOutlined style={{color: 'linear-gradient(297.55deg, #FB892E 35.2%, #FFCA9F 71.1%)'}} /> Auto Verifying</div>

                            </Col>
                            <Col span={12}>
                                <div align="right" style={{fontSize: '12px', cursor: 'pointer', color: 'grey'}}>Resend OTP</div>
                            </Col>
                        </Row>
                        :
                        ''
                    }
                    <br/>
                    <Button
                    style={{
                        width: '80%',
                        padding: '15px 0px',
                        height: '50px'
                        }}
                    onClick={()=>{
                        if(enterOtpFlag !== true){
                            postPhoneNumber();
                        } else {
                            proceed();
                        }
                    }}    
                    >
                        {enterOtpFlag ? `Proceed` : 'Get OTP'}

                    </Button>
                </FlexBox>
            
    );
}

export default OtpAuthDesktop;