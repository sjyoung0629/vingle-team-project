import React, { Component } from 'react';

class FromNow extends Component {
    // 경과시간 계산
    getTimeAgo = () => {
        const time = this.props.time;
        console.log("before_time = " + time);
        // 현재 시간 불러와서 차이 계산
        const cur_time = new Date().getTime();
        console.log("cur_time = " + cur_time);
        let second = (cur_time - time) / 1000;
        let year, month, day, hour, minute, elapsed;

        if (second > 60) {
            minute = second / 60;
            if (minute > 60) {
                hour = minute / 60;
                if (hour > 24) {
                    day = hour / 24;
                    if (day > 30) {
                        month = day / 30;
                        if (month > 12) {
                            year = month / 12;
                            elapsed = parseInt(year) + "년";
                        } else {
                            elapsed = parseInt(month) + "달";
                        }
                    } else {
                        elapsed = parseInt(day) + "일";
                    }
                } else {
                    elapsed = parseInt(hour) + "시간";
                }
            } else {
                elapsed = parseInt(minute) + "분";
            }
        } else {
            elapsed = "몇 초";
        }

        return elapsed
    }

    render() {
        return (
            <div className="time">
                <span className="fromNow">{this.getTimeAgo()} 전</span>
            </div>
        );
    }
}

export default FromNow;