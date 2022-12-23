import { Row, Col, Input } from 'antd';
import React from 'react';
import { DownOutlined, BellOutlined } from '@ant-design/icons';
import { FlexBox } from './Containers';
import { PageTypes } from '../utility';
import { Link, NavLink } from 'react-router-dom';
import { logo, logoText } from '../assets';

const navBarBackgroundColor = '#FB892E';

const { Search } = Input;
const onSearch = () => {

}

function NavigationBar(props) {
    const { profileName, notificationData, tabType } = props;
    return (
            <div style={{position: 'sticky', widht: '100vw', top: '0px', zIndex: '9999'}}>
                <Row
                style={{
                    height: '6vh',
                    backgroundColor: navBarBackgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: '500'
                }}
                >
                    <Col md={{span: 1}}></Col>
                    <Col md={{span: 4}} align="center">
                    <h1 style={{ margin: '0px', width: '45%', background: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '68%'}}>
                <img src={logoText} style={{width: '70%', transform: 'translate(0px -6px)'}} />
            </h1>
                    </Col>
                    <Col md={{span: 3}}>Hi! {profileName}</Col>
                    <Col md={{span: 1}}></Col>
                    <Col md={{span: 5}}>
                        <Search placeholder="search here ..." onSearch={onSearch} style={{outline: 'none'}} />
                    </Col>
                    <Col md={{span: 1}}></Col>
                    <Col md={{span: 3}}>My Account <DownOutlined size='small' style={{cursor: 'pointer', fontSize: '13px'}} /></Col>
                    <Col md={{span: 3}}>
                        More <DownOutlined style={{cursor: 'pointer', fontSize: '13px'}} />
                    </Col>
                    <Col md={{span: 2}} align="right"><BellOutlined style={{cursor: 'pointer', fontSize: '23px'}} /></Col>
                    <Col md={{span: 1}}>

                    </Col>
                </Row>
                
            </div>
    );
}

export default NavigationBar;