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
            sectionIndex: -1,
            questionIndex: -1,
        };
    }

    onCurrentQuestionChange(question) {
        if (this.state.currentQuestion != question) {
            this.setState({
                currentQuestion: question,
                sectionIndex: -1,
                questionIndex: -1
        })

        }
    }

    render() {
        var lang = queryParams('lang');
        var helpCenter = HelpCenter_EN;
        if (lang != null) {
            if (lang == "zh") {
                helpCenter = HelpCenter_ZH;
            }else if(lang == 'zh_TW'){
                helpCenter = HelpCenter_ZH_TW;
            }
        }
        var {sectionIndex, questionIndex} = this.state;

        if (this.state.currentQuestion == null) {
            return <SectionList sectionIndex={sectionIndex} questionIndex={questionIndex} helpCenter={helpCenter}
                                questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}/>
        }
        return <Answer questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}
                       question={this.state.currentQuestion} helpCenter={helpCenter}/>
    }
}
ReactDom.render(<Main/>, document.getElementById('content'));