import {request} from "../common/utils/request"
import {getLatestKey, setLatestKey} from "../common/utils/storage";

export class Classic {
    getLatest() {
        return new Promise((resolve, reject) => {
            request({
                url: '/classic/latest',
                method: 'GET'
            }).then(res => {
                setLatestKey(res.index)
                resolve(res)
            })
        })
    }

    getLike() {
        return new Promise((resolve, reject) => {
            request({
                url: '/classic/favor',
                method: 'GET'
            }).then(res => {
                resolve(res)
            })
        })
    }

    getClassic(index, nextOrPrev) {
        return new Promise((resolve, reject) => {
            request({
                url: `/classic/${index}/${nextOrPrev}`,
                method: 'GET'
            }).then(res => {
                resolve(res)
            })
        })
    }
}