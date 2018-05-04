import {SET_CURRENT_TIME, SET_DURATION, CHANGE_PROGRESS, CHANGE_VOLUME, PLAY_PAUSE} from './mutation-type'
export default {
  [SET_CURRENT_TIME] (state, currentTime) {
    state.currentTime = currentTime
  },
  [SET_DURATION] (state, duration) {
    state.duration = duration
  },
  [CHANGE_PROGRESS] (state, progress) {
    state.changeCurrentTime = progress * state.duration
  },
  [CHANGE_VOLUME] (state, volume) {
    state.volume = volume * 100
  },
  [PLAY_PAUSE] (state) {
    state.paused = !state.paused
  }
}
