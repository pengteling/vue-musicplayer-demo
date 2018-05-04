import {formatTime} from '@/utils/formatTime'
export default {
  leftTime (state) {
    /* NaN的情况  */
    return isNaN(state.duration - state.currentTime) ? '-:--' : formatTime(state.duration - state.currentTime)
  },
  currentPercentAbsolute (state) {
    return isNaN(state.duration - state.currentTime) ? 0 : state.currentTime / state.duration * 100
  }
}
