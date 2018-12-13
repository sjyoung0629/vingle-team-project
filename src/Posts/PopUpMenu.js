import React, { Component } from 'react';

class PopUpMenu extends Component {
    // click count 증가
    updateClickCount = () => {
        const {onUpdate} = this.props;
        let {count} = this.props;
        
        count++;

        onUpdate(count);
    }

    // props 값이 변경될 때만 re-rendering
    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    render() {
        const {menuList} = this.props;

        return (
            <div className="popUpMenu">
                <div className="menuList">
                    {menuList.map((item) => (
                        <li className="menuItem" key={item.id} onClick={this.updateClickCount}>{item.title}</li>
                    ))}
                </div>
            </div>
        );
    }
}

export default PopUpMenu;