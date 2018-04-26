import { EventBus } from '@/EventBus'
export default{
  name:'MusicItem',
  props:{
    musicItem:{
      type:Object,
      required:true
    },
    focus:{
      type:Boolean
    }
  },
  methods:{
    deleteMusicItem(musicItem){

    },
    changeMusicItem(musicItem){
      EventBus.$emit('changeMusic', musicItem)
      EventBus.$emit('setMedia', musicItem)
    }
  },

  render(){
    let musicItem = this.musicItem
    return(
      <li class={`components-listitem row ${this.focus ? 'focus':''}`} onClick={ ()=>{
        if(!this.focus){
          this.changeMusicItem(musicItem)
        }
      } }>
        <p>{musicItem.title} - {musicItem.artist}</p>
        <p class="lrclink -col1"> <router-link to="/lrc">歌词</router-link> </p>
        <p class="-col-auto delete" onClick={this.deleteMusicItem.bind(this,musicItem)}></p>
      </li>
    )
  }
}
