import { evil } from '@/utils/evil'
export default {
  loadData ({ commit }) {
    fetch('http://music.henshui.com/api/musicList.js?!234')
      .then(response => response.text())
      .then(response => {
        let musicList = evil(response)
        console.log(musicList)
        commit('SET_MUSIC_LIST', musicList)
      })
  }
}
