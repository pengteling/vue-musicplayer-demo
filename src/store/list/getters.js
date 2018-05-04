export default {
  currentMusicItem: (state, getters) => {
    return state.musicList[state.currentIndex] ? state.musicList[state.currentIndex] : {}
  },
  currentFile: (state, getters) => {
    return getters.currentMusicItem.file ? getters.currentMusicItem.file : ''
  }
}
