import axios from "axios";

export const apiEndPoint = 'http://localhost/3000';
const returnPromiseWithData = (data) => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(data);
        }, 1000)
    });
}

// every response sent to the client would have two properties:
// 1. data -> data returned in the response 
// 2. status -> 200 for success and in any other case 'something went wrong' would be shown on the screen

export const getRequest = (path) => {
    switch(path){
        case '/user':
            return returnPromiseWithData(
                {
                    data: {
                        fullName: 'Joe Voot',
                        profileImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///8AAADw8PA0NDTCwsLGxsb4+Pj19fXW1tZ7e3ucnJwpKSkxMTHJycm6urqvr69ra2tgYGAgICCHh4c5OTmoqKjj4+NMTEzQ0NA/Pz8SEhJVVVUZGRnc3NyTk5NlZWXEd9MwAAACwElEQVRoge2aW7aiMBBFSZSXIE8BxavOf5a30+CCVhpSlQN+mD0A9xKSk6IqjmOKTPLCM/4VFr6btUI8PuK+lSehcLdX+2kueoKt3UEpBo6bqmUViTHxhqsuCFvxSiI3UXtu/qZW7MKkXtvtV82kuyMvj/6K8sOMuidcawVWy+6/pCu467ln/i/NDS0/v6/zGcCP/0hx/2GPlN+Icmj4+jHZHuH2Xrlse6NEySVDLgQq+jRCZoIDyE5/64odRu6x5EJgjt2Aacdsuj3Tjkkca7d2a/8eu2vt1k4A01Owdmv/NnvCtCcQ+4NpzwBueWHKhbiYN7LubLkQd2M77yOuw/xTjltbKMzPmdrAbv4RLXdseQxon3I3nBC5uZzVNulANE+4UYdpWvKXHaJlyW1dgJoXV6a8QcjZyw7TsUuZdkyn/LM9K2d6ErMEImsUvIMGU9o4jv/DkP/AmtSc8uaCkn+2Q8568bjZCH0wggn5HnrYXnFyRmmJmg0oauqea6EjYeqqx614hU8aRYoWPIumDSPh10BCgjxEyx2p/+zbFa5BRMvanggvdwpte4GXS/0tv8KTp2Q9/O6BcybYz3A75YMKVVQNUOpq/K0TyjGHPOA6Ppt1lBYGaPQ+QKsvsI9e6sdsR4QMHMpL7wC++lo/458UuNKK07rBJQ6newErqQmFxQDsoOP1zECP3md2DxB1rVfRF3xHURn3TlJqzoyJzA67hLPexrT8t+/yRzIDF96XRcDtUb5ypV+4qjOQW5HRYlfSj5V5Qv3sgbsJfmkygZvjvuz3DyYbfJ7osBB/Ke8OpS7xXPwkp1XditP/4me/7v9+Ek/1Ec/6N9RNaV6/8wL+zI/DYxx/0GDTY4g/6uV4DP0Nf2+7Nz6m6WoPgymzCTtp7dZu7db+Pfb1K5opTn2Ruf35qnhev5Of0Gfqr/8C4o8vCddFVegAAAAASUVORK5CYII=',
                        mobileNumber: '+91 9090909090',
                    },
                    status: 200
                }
            );
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
        case '/attendance/history/dec/2022':
            // send one month attendance history, month mentioned in the url (month name will always have three lowercased characters e.g. jan, feb, mar, apr)
            return returnPromiseWithData(
                {
                    data: [
                        {
                            date: 12,    //number, required
                            day: 'Fri',  //string, required
                            punchInTime: '09:07 AM', //string, required
                            punchOutTime: '05:07 PM', //string, required
                            attendanceStatus: 'Ex', //string, required
                        },
                        {
                            date: 11,    //number, required
                            day: 'Thu',  //string, required
                            punchInTime: '09:07 AM', //string, required
                            punchOutTime: '05:07 PM', //string, required
                            attendanceStatus: 'Ex', //string, required
                        },
                        {
                            date: 10,    //number, required
                            day: 'Wed',  //string, required
                            punchInTime: '09:07 AM', //string, required
                            punchOutTime: '05:07 PM', //string, required
                            attendanceStatus: 'Ex', //string, required
                        },
                    ],
                    status: 200
                }
            );
            case '/attendance/leave-info':
            return returnPromiseWithData(
                {
                    data: {
                        lossOfPay:  {
                            total: 54,          //number
                            credited: 524,      //number
                            applied: 43,        //number
                            penalty: 32         //number
                        },
                        casualLeaves:  {
                            total: 54,          //number
                            credited: 524,      //number
                            applied: 43,        //number
                            penalty: 32         //number
                        },
                        approvals: [
                            {
                                from : '08 July 22',        //string
                                to: '10 July 22',           //string
                                status: 'Pending',          //string
                            },
                            {
                                from : '08 July 22',        //string
                                to: '10 July 22',           //string
                                status: 'approved',          //string
                            },
                            {
                                from : '08 July 22',        //string
                                to: '10 July 22',           //string
                                status: 'rejected',          //string
                            },
                            {
                                from : '08 July 22',        //string
                                to: '10 July 22',           //string
                                status: 'Pending',          //string
                            }
                        ]
                    },
                    status: 200
                }
            );
            default:
                alert('api under construction');
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
            // { otp, cellphoneNumber }
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
        case '/attendance/apply-for-leave':
            // { leaveType, reason, stratDate, endDate, timeoff } 
            // format of dates -> 'Mon, 26 Dec 2022 10:22:53 GMT'
            // leaveType can have either of these two values: 1. casual 2. lossofpay
            // timeoff can have either of these three values: 1. fullday 2. firsthalf 3. secondhalf
            return returnPromiseWithData(
                {
                    data: {},
                    status: 200
                }
            );
            default:
                alert('api under construction');
       
    }
}