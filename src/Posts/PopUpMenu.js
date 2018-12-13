import React, { Component } from 'react';

class PopUpMenu extends Component {
    updateClickCount = () => {
        const {onUpdate} = this.props;
        let {count} = this.props;
        
        count++;

        onUpdate(count);
    }

    render() {
        const {menuOpen, menuList} = this.props;

        if (menuOpen) {
            // menuOpen 값이 true 일때만 PopUpMenu 보여줌
            return (
                <div className="popUpMenu">
                    <div className="menuList">
                        {menuList.map((item) => (
                            <li className="menuItem" key={item.id} onClick={this.updateClickCount}>{item.title}</li>
                        ))}
                    </div>
                </div>
            );

        } else {
            return null;
        }
    }
}

export default PopUpMenu;