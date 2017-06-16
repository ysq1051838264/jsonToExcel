/**
 * Created by hdr on 17/6/13.
 */
import React from 'react';
import queryParams from '../../util/QueryParams';

export default class TextAnswer extends React.Component {
    render() {
        var {answer, index} = this.props;
        var {content, level, levelIndex} = answer;
        var app = queryParams("app");
        if(app!=null) {
            content = content.replace(/Feelfit/g, app);
        }
        if (level >= 0) {
            var indexString = "";
            if (level == 0) {
                indexString = this.firstLevelIndex(levelIndex);
            } else if (level == 1) {
                indexString = this.secondLevelIndex(levelIndex);
            } else if (level == 2) {
                indexString = this.thirdLevelIndex(levelIndex);
            }
            content = indexString + content;
        }
        return (
            <p>
                {content}
            </p>
        )
    }

    firstLevelIndex(levelIndex) {
        return (levelIndex + 1) + ") "
    }

    secondLevelIndex(levelIndex) {
        var value = 97 + levelIndex;
        return String.fromCharCode(value) + ". "
    }

    thirdLevelIndex(levelIndex) {
        var strings = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xii"];
        return strings[levelIndex] + ". "
    }

}