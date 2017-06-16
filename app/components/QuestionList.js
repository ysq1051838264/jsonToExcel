/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';
import ItemQuestion from './ItemQuestion';

export default class QuestionList extends React.Component {
    render() {
        var questionList = this.props.questions;
        return (<div className="question_list_container">
                <table className="question_list_table">
                    <tbody>
                    {
                        questionList.map((item, index) => {
                            return (
                                <ItemQuestion
                                    key={"question_" + index}
                                    index={index}
                                    {...this.props}
                                    question={item}/>

                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}

