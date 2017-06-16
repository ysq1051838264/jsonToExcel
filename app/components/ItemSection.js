/**
 * Created by hdr on 17/6/9.
 */
import React from "react";
import '../css/style.css';
import QuestionList from './QuestionList';
/**
 * 列表中的
 */
export default class ItemSection extends React.Component {
    render() {
        var section = this.props.section;
        return (
            <div>
                <div className="section_list_title_container">
                    <div className="section_list_title">{section.title}</div>
                </div>
                <QuestionList questions={section.questions} {...this.props}/>
            </div>
        )
    }


}