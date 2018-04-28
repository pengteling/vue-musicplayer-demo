import { EventBus } from '@/EventBus'
import { parseLrc } from '@/utils/parseLrc.js'
export default{
  name:'Lrc',
  data(){
    return{
      lrc:[],
      curli:0,
      currentTime:0
    }
  },
  updated(){
    // console.log("updated")
    if(document.querySelector('.cur')){
      let h = document.querySelector('.cur').offsetTop - 200 -143
      document.getElementById('lrcurl').scrollTop = h
    }
  },
  mounted(){
    EventBus.$on('timeupdate',(time)=>{
      this.currentTime = time
      /* 在歌词页面 自动播放下一首时 将curli清零 */
      if(time<0.3){
        this.curli = 0
      }
    })
    EventBus.$on('sendLrc', (currentItem) =>{
      this.lrc = parseLrc(currentItem.lrc)
    })
  },
  render(){
    let curClass=''
    let currentTime = this.currentTime
    let lrclist = this.lrc.map((item,i)=>{
      if(item[0] <= currentTime && i>= this.curli){
        this.curli = i
        curClass = 'cur'

      }else{
        curClass='normal'
      }
      return (
        <li class={curClass} key={i} data-time={item[0]}>{item[1]}</li>
      )
    })
    return(
      <div class="lrc-component">
        <ul id="lrcurl" ref="lrcurl">
        {lrclist}
        </ul>
      </div>
    )
  }

}
