/**
 * Created by hdr on 17/6/9.
 */
import React from 'react';

import ItemSection from './ItemSection';
import NavigationBar from './NavigationBar';

import queryParams from '../util/QueryParams';

export default class SectionList extends React.Component {

    componentDidMount() {
        var {sectionIndex, questionIndex} = this.props;
        if (sectionIndex >= 0 && questionIndex >= 0) {
            this.props.questionChangeChangeHandler(this.props.helpCenter.sections[sectionIndex].questions[questionIndex]);
        }
    }

    render() {
        var {helpCenter} = this.props;
        var sectionList = helpCenter.sections;
        var {title} = helpCenter;

        return (
            <div className="section_list_container">
                <NavigationBar title={title} onBackClick={this.onBackClick.bind(this)}/>
                <div className="section_list_div">
                    {
                        sectionList.map((item, index) => {
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

    onBackClick() {
        var app = queryParams("app");
        if (app == null) {
            app = "Feelfit";
        }
        const uri = app.replace(' ', '') + '://center.help/back';
        console.log("uri", uri);
        window.location.href = uri;
    }
}