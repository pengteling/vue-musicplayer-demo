import { SET_MUSIC_LIST, CHANGE_REPEAT_TYPE, PREV_NEXT, CHANGE_MUSIC_ITEM, DELETE_MUSIC_ITEM } from './mutation-type'
export default {
  [SET_MUSIC_LIST] (state, musicList) {
    state.musicList = musicList
  },
  [CHANGE_REPEAT_TYPE] (state) {
    let newRepeatType
    switch (state.repeatType) {
      case 'cycle':
        newRepeatType = 'once'
        break
      case 'once':
        newRepeatType = 'random'
        break
      default:
        newRepeatType = 'cycle'
    }
    state.repeatType = newRepeatType
  },
  [PREV_NEXT] (state, type) {
    let currentIndex = state.currentIndex
    let num = state.musicList.length
    let repeatType = state.repeatType
    // console.log(currentIndex, num, repeatType)
    if (repeatType === 'cycle' || repeatType === 'once') {
      if (type === 'prev') {
        currentIndex = (currentIndex - 1 + num) % num
      } else {
        currentIndex = (currentIndex + 1) % num
      }
    } else {
      let rd = (currentIndex) => {
        let newIndex = Math.floor(num * Math.random())
        if (newIndex === currentIndex) {
          return rd(currentIndex)
        } else {
          return newIndex
        }
      }
      currentIndex = rd(currentIndex)
    }
    state.currentIndex = currentIndex
  },
  [CHANGE_MUSIC_ITEM] (state, currentItem) {
    let currentIndex = state.musicList.indexOf(currentItem)
    state.currentIndex = currentIndex
  },
  [DELETE_MUSIC_ITEM] (state, musicItem) {
    if (state.musicList.length > 2) {
      let currentIndex = state.musicList.indexOf(musicItem)

      state.musicList = state.musicList.filter(item => item !== musicItem)
      if (currentIndex === state.currentIndex) {
        /* 删除正在播放的歌曲 */
        // console.log(state.musicList.length)
        currentIndex = currentIndex % state.musicList.length
        state.currentIndex = currentIndex
      }
    }
  }
}
