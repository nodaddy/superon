import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDesktop from './pages/home/HomeDesktop';
import OtpAuthDesktop from './pages/auth/OtpAuthDesktop';
import Auth from './pages/auth';
import TargetDesktop from './pages/target/TargetDesktop';
import Pages from './pages';
import { Loading3QuartersOutlined, LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getRequest } from './services';
import { sessionStorageUserInfoKey } from './utility';

export const primaryColor = '#FB892E';
export const greyColor = '#DBDBDB';
export const primaryTextColor = 'white';

function App() {

  const [isMobile, setIsMobile ] = useState(false);

  useEffect(()=>{
    if(window.innerWidth < window.innerHeight){
      setIsMobile(true);
    }
    getRequest('/user').then(res => {
      sessionStorage.setItem(sessionStorageUserInfoKey, JSON.stringify(res.data));
    })
  }, [window.innerWidth, window.innerHeight]);

  return (
    isMobile  ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '45%'}}>
      <LoadingOutlined style={{fontSize: '40px'}} />
    </div>:
    <div className="App">
      <Router basename='/superon'>
        <Routes>
        <Route path='/' element={
              <>
                <Auth/>
              </>
            }/>
            <Route path='/home' element={
              <>
                <NavigationBar profileName='Alexa'/>

               <Pages />
              </>
            }/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
