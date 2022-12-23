import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '../components/Containers';
import NavigationBar from '../components/NavigationBar';
import { PageTypes } from '../utility';
import HomeDesktop from './home/HomeDesktop';
import TargetDesktop from './target/TargetDesktop';

{/*
    Enter Phone and get otp and enter otp    [only necessary] done
    Create your profile Page   [only necessary] done
    Home Page    [only necessary] done
    Target Page     [only necessary] done
    Attendence page    [only necessary] 
    Daily working page  [only necessary]
    Weekly plan page       [only necessary]
    Request page      [only necessary]
*/}


function Pages(props) {
    const [ tabType, setTabType ] = useState('home');


//     home: 'Home',
//     orderTracking: 'Order Tracking',
//     target: 'Target',
//     attendance: 'Attendance',
//     dailyWorking: 'Daily Working',
//     weeklyPlan: 'Weekly Plan',
//     request: 'Request',
// }

const renderTabConent = () => {
    switch(tabType){
        case Object.keys(PageTypes)[0].toString():
            return <HomeDesktop />
            break;
        case Object.keys(PageTypes)[1].toString():
            return <HomeDesktop />
            break;
        case Object.keys(PageTypes)[2].toString():
            return <TargetDesktop />
            break;
        case Object.keys(PageTypes)[3].toString():
            return <HomeDesktop />
            break;
        case Object.keys(PageTypes)[4].toString():
            return <HomeDesktop />
            break;
        case Object.keys(PageTypes)[5].toString():
            return <TargetDesktop />
            break;
        default:
            return <></>
            break;

    }
}

const changeTabType = (val) => {
    setTabType(val);
}


    return (
        <div>
            <FlexBox style={{
                    backgroundColor: 'white',
                    padding: '10px 200px',
                    borderBottom: '1px solid  #CACCCF'
                }} children={ 
                    <>
                   {
                    Object.keys(PageTypes).map( key => {
                        return <span style={{cursor: 'pointer', margin: 'auto'}}><NavLink 
                        onClick={() => { 
                            setTabType(key.toString());
                        }}
                        >{PageTypes[key]}</NavLink></span>
                    })
                   } 
                   </>
                } />

            {renderTabConent()}
        </div>
    );
}

export default Pages;