import React, { Component } from 'react';
import PopUpMenu from './PopUpMenu';

class Share extends Component {
    state = {
        shareCount: this.props.shareCount,
        menuOpen: false,
        shareMenu: [{
            id: 0,
            title: '기본 컬렉션에 저장하기',
            selected: false,
        },
        {
            id: 1,
            title: '카드에 작성하기',
            selected: false,
        },
        {
            id: 2,
            title: '외부에 공유하기',
            selected: false,
        }]
    }

    // 클릭할 때마다 공유하기 count 증가
    updateShareCount = (count) => {
        const {onUpdate} = this.props;
        
        onUpdate(count);

        this.setState({
            shareCount: count,
        });
    }

    // 외부 클릭시 menu close (아직 구현안함)
    handleClickOutside(){
        this.setState({
            menuOpen: false,
        });
    }

    // menu open/close toggle
    toggleList = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen,
        }));
    }

    render() {
        const {shareCount, menuOpen, shareMenu} = this.state;

        return (
            <div className="shareArea">
                <input type="button" value="공유" onClick={this.toggleList}></input>
                <span>{shareCount}</span>
                {
                    menuOpen && <PopUpMenu menuList={shareMenu} count={shareCount}
                                            onUpdate={this.updateShareCount}/>
                }
            </div>
        );
    }
}

export default Share;