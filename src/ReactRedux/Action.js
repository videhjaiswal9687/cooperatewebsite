import {COVAXIN,COVISHIELD} from './Type'

const action1 = {
    type: COVAXIN
}
const action2 = {
    type: COVISHIELD
}
//action creator: wrapping action in a single function
export function buyCovaxin() {
    return action1
}

export function buyCovishield() {
    return action2
}