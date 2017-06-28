/**
 * Created by hdr on 17/6/12.
 */

import React from 'react'
import "../css/style.css"

import TextAnswer from './answer/Text';
import TableAnswer from './answer/Table';
import ImageAnswer from './answer/Image';

import NavigationBar from './NavigationBar';
import queryParams from '../util/QueryParams';

export default class Answer extends React.Component {

    componentDidMount() {
        scrollTo(0, 0)
    }

    render() {
        var {question, answers} = this.props.question;
        var levelCount = [];
        var lastLevel = -1;
        var app = queryParams("app");
        if(app!=null) {
            question = question.replace(/Feelfit/g, app);
        }
        return (
            <div >
                <NavigationBar title={this.props.helpCenter.title} onBackClick={this.handleBackClick.bind(this)}/>
                <div className="div_answer">
                    <div className="answer_question_div">{question}</div>
                    <div className="answer_list_div">
                        {
                            answers.map((item, index) => {
                                if ((typeof item) == "string") {
                                    item = {
                                        type: "string",
                                        content: item,
                                    }
                                }
                                if (item.type == "string") {
                                    var level = (item.level || 0) - 1;
                                    item.level = level;
                                    var levelIndex = 0;
                                    if (level >= 0) {
                                        if (level > lastLevel) {
                                            //新的级别
                                            levelIndex = 0;
                                        } else {
                                            //跟上一个一样的级别
                                            levelIndex = (levelCount[level] || 0);
                                        }
                                        levelCount[level] = levelIndex + 1;
                                        item.levelIndex = levelIndex;
                                        lastLevel = level;
                                    }
                                    return <TextAnswer key={"answer_" + index} answer={item} index={index}/>
                                } else if (item.type == "table") {
                                    return <TableAnswer key={"answer_" + index} answer={item} index={index}/>
                                } else if (item.type == "image") {
                                    return <ImageAnswer key={"answer_" + index} answer={item} index={index}/>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    handleBackClick() {
        this.props.questionChangeChangeHandler(null)
    }
}