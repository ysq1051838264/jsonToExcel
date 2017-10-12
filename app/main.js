/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';
import ReactDom from 'react-dom';
import SectionList from './components/SectionList';
import Answer  from './components/Answer';
import HelpCenter_ZH from './data/zh.json';
import HelpCenter_JP from './data/jp.json';
import HelpCenter_KO from './data/ko.json';
import HelpCenter_FA from './data/fa.json';
import HelpCenter_ES from './data/es.json';
import HelpCenter_DE from './data/de.json';
import HelpCenter_ZH_TW from './data/zh_TW.json';
import HelpCenter_EN from './data/en.json';
import imgs from './data/imageMap'
import queryParams from './util/QueryParams';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: null,
            questionId: null,
        };
        this.hc = null;
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

    prepareHelpCenter(data) {

        data.sections.forEach(section => {
            section.questions.forEach(question => {
                question.answers.forEach((answer, index) => {
                    if (answer.type == 'image') {
                        question.answers[index] = imgs(answer.id)
                        question.answers[index].type = 'image';
                    }
                })
            })
        });
        return data;
    }

    getHelpCenter() {
        if(this.hc){
            return this.hc
        }
        var lang = queryParams('lang');
        var helpCenter = HelpCenter_EN;
        if (lang != null) {
            if (lang == "zh") {
                helpCenter = HelpCenter_ZH;
            }else if (lang == "jp") {
                helpCenter = HelpCenter_JP;
            } else if (lang == 'zh_TW') {
                helpCenter = HelpCenter_ZH_TW;
            }else if (lang == 'ko') {
                helpCenter = HelpCenter_KO;
            }else if (lang == 'fa') {
                helpCenter = HelpCenter_FA;
            }else if (lang == 'es') {
                helpCenter = HelpCenter_ES;
            }else if (lang == 'de') {
                helpCenter = HelpCenter_DE;
            }
        }
        this.hc = this.prepareHelpCenter(helpCenter)
        return this.hc;
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