/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';
import ReactDom from 'react-dom';
import SectionList from './components/SectionList';
import Answer  from './components/Answer';
import HelpCenter_ZH from './data/zh';
import HelpCenter_ZH_TW from './data/zh_TW';
import HelpCenter_EN from './data/en';
import queryParams from './util/QueryParams';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: null,
            questionId: null,
        };
    }

    componentDidMount() {
        var questionId = queryParams("id");
        if (questionId != null) {
            var question = this.findQuestionById(questionId);
            this.setState({
                currentQuestion: question
            });
        }
    }

    onCurrentQuestionChange(question) {
        if (this.state.currentQuestion != question) {
            this.setState({
                currentQuestion: question,
            })

        }
    }

    findQuestionById(id) {
        if (id == null) {
            return null;
        }
        var helpCenter = this.getHelpCenter();
        var sectionList = helpCenter.sections;
        var targetQuestion = null;
        sectionList.forEach(section => {
            section.questions.forEach(question => {
                if (question.id && question.id == id) {
                    targetQuestion = question;
                }
            })
        })
        return targetQuestion;
    }

    getHelpCenter() {
        var lang = queryParams('lang');
        var helpCenter = HelpCenter_EN;
        if (lang != null) {
            if (lang == "zh") {
                helpCenter = HelpCenter_ZH;
            } else if (lang == 'zh_TW') {
                helpCenter = HelpCenter_ZH_TW;
            }
        }
        return helpCenter;
    }


    render() {

        var helpCenter = this.getHelpCenter();

        if (this.state.currentQuestion == null) {
            return <SectionList helpCenter={helpCenter}
                                questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}/>
        }
        return <Answer questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}
                       question={this.state.currentQuestion} helpCenter={helpCenter}/>
    }
}
ReactDom.render(<Main/>, document.getElementById('content'));