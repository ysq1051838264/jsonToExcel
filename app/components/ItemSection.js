/**
 * Created by hdr on 17/6/9.
 */
import React from "react";
import '../css/style.css';
import QuestionList from './QuestionList';
import Platform from '../util/Platform';
/**
 * 列表中的
 */
export default class ItemSection extends React.Component {
    render() {
        var section = this.props.section;
        var platform = Platform();
        var questions =  section.questions.filter((item) => {
            if (platform == null) {
                return true;
            }
            if (item.platform) {
                return item.platform == platform;
            } else {
                return true;
            }
        });
        return (
            <div>
                <div className="section_list_title_container">
                    <div className="section_list_title">{section.title}</div>
                </div>
                <QuestionList questions={questions} {...this.props}/>
            </div>
        )
    }

}