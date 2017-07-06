/**
 * Created by hdr on 17/6/13.
 */

import React from 'react';
import "../../css/style.css"

import queryParams from '../../util/QueryParams';

export default class Image extends React.Component {
    render() {
        var {answer, index} = this.props;
        var src = answer.content;
        var app = queryParams("app");
        if (app != null && answer.other) {
            src = answer.other[app] || src;
        }

        var width = answer.maxWidth ? "100%" : (answer.width || 230);

        var alignCenter = answer.center ? ' answer_image_align_center' : "";
        var topPadding = answer.textDown ? 20 : 0;
        var bottomPadding = answer.textDown ? 0 : 20;

        return (
            <div className={"answer_image_div" + alignCenter}>
                <img width={width} style={{paddingTop: topPadding, paddingBottom: bottomPadding}}
                     className="answer_image_content" src={src}/>
            </div>
        )

    }
}