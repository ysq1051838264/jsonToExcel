/**
 * Created by hdr on 17/6/13.
 */
import React from 'react';
import "../../css/style.css";

export default class TableAnswer extends React.Component {

    render() {
        var {answer, index} = this.props;
        var {header, body} = answer;
        return (
            <div className="answer_table_div">
                <table className="answer_table">
                    <thead>
                    <tr>
                        {
                            header.map((item, i) => {
                                var firstClassName = i == 0 ? "answer_table_th_first" : "";
                                return <th className={firstClassName + " answer_table_th"}
                                           key={"header_" + i}>{item}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        body.map((tds, i) => {
                            return (
                                <tr key={"tr_" + i}>
                                    {
                                        tds.map((data, j) => {
                                            var first_className = j == 0 ? "answer_table_td_first" : "";
                                            return <td className={first_className + " answer_table_td"}
                                                       key={"td_" + i + "_" + j}>{data}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }


}