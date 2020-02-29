import {creatStore} from 'redux'

const initailState = {
    count:0
}
const store = creatStore(()=>{},initailState)
