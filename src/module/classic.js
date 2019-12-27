import {request} from "../common/utils/request"

export class Classic {
    getLatest(){
        return new Promise((resolve,reject)=>{
            request({
                url:'/classic/latest',
                method:'GET'
            }).then(res=>{
                resolve(res)
            })
        })
    }
}