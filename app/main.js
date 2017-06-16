/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';
import ReactDom from 'react-dom';
import SectionList from './components/SectionList';
import Answer  from './components/Answer';

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
        var {sectionIndex, questionIndex} = this.state;
        if (this.state.currentQuestion == null) {
            return <SectionList sectionIndex={sectionIndex} questionIndex={questionIndex}
                                questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}/>
        }
        return <Answer questionChangeChangeHandler={this.onCurrentQuestionChange.bind(this)}
                       question={this.state.currentQuestion}/>
    }
}
ReactDom.render(<Main/>, document.getElementById('content'));