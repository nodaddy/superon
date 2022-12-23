import axios from "axios";

export const apiEndPoint = 'http://localhost/3000';
const returnPromiseWithData = (data) => {
    return new Promise((res, rej)=>{
        res(data);
    });
}

// every response sent to the client would have two properties:
// 1. data -> data returned in the response 
// 2. status -> 200 for success and in any other case 'something went wrong' would be shown on the screen

export const getRequest = (path) => {
    switch(path){
        case '/target/current-target-report':
            return returnPromiseWithData(
                {
                    data: {
                        achievedPercentage: 80,
                        target: '11546 MT',
                        ongoing: '256 MT',
                        balance: '879.5 MT',
                        amount: 'Rs. 2,160,000'
                    },
                    status: 200
                }
            );
        case '/target/ctr-table':
            return returnPromiseWithData(
                {
                    data: [
                        {
                            date: '2 July 22',
                            unit: 'CMT',
                            wtr: 543.5,
                            qty: 234.3,
                            rate: '2,343'
                        },
                        {
                            date: '2 July 22',
                            unit: 'CMT',
                            wtr: 543.5,
                            qty: 234.3,
                            rate: '2,343'
                        },
                        {
                            date: '2 July 22',
                            unit: 'CMT',
                            wtr: 543.5,
                            qty: 234.3,
                            rate: '2,343'
                        },
                        {
                            date: '2 July 22',
                            unit: 'CMT',
                            wtr: 543.5,
                            qty: 234.3,
                            rate: '2,343'
                        }
                    ],
                    status: 200
                }
            );
    }
}

export const postRequest = (path, payload) => {
    switch(path){
        case '/auth/otp/send':
            // { cellphoneNumber }
            return returnPromiseWithData(
                {
                    data: {},
                    status: 200
                }
            );
        case '/auth/otp/verify':
            // { otp }
            return returnPromiseWithData(
                {
                    data: {},
                    status: 200
                }
            );
        case '/createprofile':
            // { fullName, email, mobile, state, city, address, designation }
            return returnPromiseWithData(
                {
                    data: {},
                    status: 200
                }
            );
        case '/target/download-ledger':
            // { from ,to } 
            // format of dates -> 'Mon, 26 Dec 2022 10:22:53 GMT'
            // send the downloadable file in the responce so that when user hits this url, the file automatically gets downloaded
            return returnPromiseWithData(
                {
                    data: {},
                    status: 200
                }
            );
       
    }
}