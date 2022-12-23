import React, { useState } from 'react';
import { Input, Row, Col } from 'antd';
import { FlexBox } from '../../components/Containers';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Button from '../../components/Button';
import { postRequest } from '../../services';

function CreateyourProfile(props) {

    const navigate = useNavigate();

    const [ profileData, setProfileData] = useState({

    });

    const formInfo = [
        {
            key: 'fullName',
            placeHolder: 'Enter Full Name'
        },
        {
            key: 'email',
            placeHolder: 'Email'
        },
        {
            key: 'mobile',
            placeHolder: 'Mobile'
        },
        {
            key: 'state',
            placeHolder: 'State'
        },
        {
            key: 'city',
            placeHolder: 'City'
        },
        {
            key: 'address',
            placeHolder: 'Address'
        },
        {
            key: 'designation',
            placeHolder: 'Designation'
        },
    ]

    return (
        <FlexBox style={{ height: '100%', flexDirection: 'column', alignContent: 'center' }}>
            <div style={{width: '60%', margin: 'auto'}}>
                <h1 style={{fontWeight: '500', textAlign: 'left', width: '100%',}}>Create your Profile</h1>
                <h4 style={{color: 'silver', fontWeight: '400', width: '100%', textAlign: 'left', marginTop: '-8px'}}>Aero eos et accusamus et iusto odio dignissimos</h4>
                <br/>
                <br/>
                {
                    formInfo.map(( inputType ) => {
                        return <Input
                        style={{ height: '50px', marginBottom: '20px'}}
                        placeholder={inputType.placeHolder}
                        onChange={(e)=>{
                            setProfileData({...profileData, [inputType.key] : e.target.value});
                            console.log(profileData);
                        }}></Input>
                    })
                }
                
                 
                            
                    <Button
                        disabled={false}
                        style={{
                            padding: '15px 0px',
                            height: '50px',
                            width: '100%'
                            }}
                        onClick={()=>{
                            postRequest('/createprofile', profileData ).then((res) => {
                                console.log(res.status);
                                navigate('/home');
                            })
                        }}
                        >
                            Next
                    </Button>
 
            </div>
        </FlexBox>
    );
}

export default CreateyourProfile;