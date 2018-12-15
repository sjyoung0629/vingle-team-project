import React, { Component } from 'react';
import CardAddedThumb from './CardAddedThumb';
import CardAddedEmbed from './CardAddedEmbed';
import CardAddedPage from './CardAddedPage';

class CardAdded extends Component {
  
  constructor() {
    super();

    this.state = {
      type: '',
      source: [
        /* 페이지 링크형 데이터
        {src:'https://velopert.com/3613', format:'', width:'', height:'', title:'퍼온글 제목123', desc:'퍼온글 내용1', href:'https://velopert.com/3613', url:'velopert.com'},
        {src:'http://pino0308.cafe24.com/bakery/', format:'', width:'', height:'', title:'제목234', desc:'퍼온글 내용', href:'http://pino0308.cafe24.com/bakery/', url:'pino0308.cafe24.com'},
         */
        
        /* 임베드형 데이터
        {src:'https://youtu.be/mP--G6TmH8Q', format:'', width:'', height:'', title:'mP--G6TmH8Q', desc:'', href:'https://www.youtube.com/watch?time_continue=2&amp;v=mP--G6TmH8Q', url:'www.youtube.com'},
        {src:'https://youtu.be/mP--G6TmH8Q', format:'', width:'', height:'', title:'mP--G6TmH8Q', desc:'', href:'https://www.youtube.com/watch?time_continue=2&amp;v=mP--G6TmH8Q', url:'www.youtube.com'},
        */
        
        /* 썸네일형 데이터 */
        {src:'http://images5.fanpop.com/image/photos/25700000/Gifs-gifs-25782795-360-240.gif', format:'gif', width:'800', height:'600', title:'', desc:'', href:'', url:''},
        {src:'https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg', format:'jpg', width:'1920', height:'1080', title:'', desc:'', href:'', url:''},
        {src:'https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg', format:'video', width:'1920', height:'1080', title:'', desc:'', href:'', url:''},
        {src:'https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg', format:'jpg', width:'1920', height:'1080', title:'', desc:'', href:'', url:''},
        {src:'https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg', format:'jpg', width:'1920', height:'1080', title:'', desc:'', href:'', url:''},
        {src:'https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg', format:'jpg', width:'1920', height:'1080', title:'', desc:'', href:'', url:''},
        
      ],
      insight: '',
      more: '',
      ratio: '',
      sight: [],
    }
  }

  componentDidMount () {
    const added = this.state;
    let source = added.source,
        first = source[0],
        src = first.src,
        l_src = source.length,
        ex_src = l_src,
        insight,
        more,
        type,
        type_thumb = /\.(jpg|gif|bmp|png)$/i,
        type_video = /\.(mp4)$/i,
        type_embed = 'youtube.com',
        w = first.width,
        h = first.height,
        ratio = w/h,
        sight = [];

    //첨부타입 세팅 (thumb, embed, page)
    if (src.match(type_thumb) || src.match(type_video)) { //이미지 || 동영상
      type = 'thumb'
    } else if (src.indexOf(type_embed) != -1) { //embed.. embed 정규식 찾아봐야함
      type = 'embed'
    } else { //나머지
      type = 'page'
    }

    if (l_src > 1){ //더보기 나오는 초기값은 thumb 형태를 제외하고 2이상
      more = l_src - 1;
    }
    
    //thumb 
    if (type === 'thumb'){

      //이미지 비율에 따른 형태 세팅
      if (ratio > 1) {
        ratio = 'w' //가로형
      } else if (ratio < 1) {
        ratio = 'h' //세로형
      } else {
        ratio = 'q' //정방형
      }

      //보여지는 이미지 최대개수 세팅 (정방형만 최대 5 / 나머지는 최대 4)
      if (l_src >= 5) {
        if (ratio !== 'q') { //가로형 || 세로형
          ex_src = 4;
        } else {
          if (ratio === 'q') { //정방형
            ex_src = 5;
          }
        }
        more = l_src - ex_src;
      }
    }

    //embed
    if (type === 'embed'){
      
    }

    //page
    if (type === 'page'){

    }

    //하위 컴포넌트에 보낼 데이터 (실제 카드에 노출될 데이터)
    sight = source.slice(0, ex_src);
    insight = sight.length;

    this.setState({
      type: type,
      ratio: ratio,
      sight: sight,
      insight: insight,
      more: more,
    });

  }

  render() {
    const added = this.state;
    return (
      <>
        
        {added.type === 'thumb' &&
        <>
          <CardAddedThumb
            added = {added}
            view = {this.props.view}
          />
         </>
        }

        {added.type === 'embed' &&
        <CardAddedEmbed
          added = {added}
          view={this.props.view}
         />
        }

        {added.type === 'page' &&
        <CardAddedPage
        added = {added}
          view={this.props.view}
         />
        }
      </>
    );
  }
}

export default CardAdded;