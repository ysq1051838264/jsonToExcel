/**
 * Created by hdr on 17/6/13.
 */
import React from 'react'
import '../css/style.css'


export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navigation_bar" >
                {this.props.title}
                <div className="navigation_bar_arrow" onClick={this.props.onBackClick}>
                    <img width={20} height={20} src={require("../images/common_left_arrow.png")}/>
                </div>
            </div>
        )
    }
}