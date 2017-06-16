/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';
import Sections from '../data/zh'
import ItemSection from './ItemSection'
import NavigationBar from './NavigationBar';

export default class SectionList extends React.Component {

    componentDidMount() {
        var {sectionIndex, questionIndex} = this.props;
        if (sectionIndex >= 0 && questionIndex >= 0) {
            this.props.questionChangeChangeHandler(Sections.sections[sectionIndex].questions[questionIndex]);
        }
    }

    render() {
        var questionList = Sections.sections;
        return (
            <div className="section_list_container">
                <NavigationBar title="帮助中心"/>
                <div className="section_list_div">
                    {
                        questionList.map((item, index) => {
                            return (
                                <ItemSection
                                    {...this.props}
                                    key={"section" + index}
                                    NO={index}
                                    section={item}/>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}