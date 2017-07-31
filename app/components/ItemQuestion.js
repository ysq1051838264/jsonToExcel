/**
 * Created by hdr on 17/6/9.
 */
import React from "react";
import '../css/style.css';
import queryParams from '../util/QueryParams';
/**
 * 列表中的
 */
export default class ItemQuestion extends React.Component {
    render() {
        var separatorClass = this.props.index == 0 ? "" : "question_list_separator";
        var question = this.props.question.question;
        var app = queryParams("app");
        if(app!=null) {
            question = question.replace(/Feelfit/g, app);
        }
        return (
            <tr onClick={this.handlerClick.bind(this)}>
                <td className={separatorClass + " question_list_td_content"}>{question}</td>
                <td className={separatorClass + " question_list_arrow_container"}>
                    <img className="question_list_arrow" width={14} height={14}
                         src={require("../images/common_right_arrow.png")}/>
                </td>
            </tr>
        )
    }

    handlerClick() {
        this.props.questionChangeChangeHandler(this.props.question);
    }

}