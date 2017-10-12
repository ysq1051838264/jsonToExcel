/**
 * Created by hdr on 17/9/15.
 */

var Excel = require('exceljs');
var fs = require('fs');

var filename = process.argv[2];

const generateExcel = (data) => {
    var workbook = new Excel.Workbook();
    const ws = workbook.addWorksheet("sheet");
    let index = 2;
    data.sections.forEach(section => {
        ws.columns = [
            {header: '问题', key: 'question', width: 30},
            {header: '答案级别', key: 'level', width: 10},
            {header: '答案内容', key: 'content', width: 30},
            {header: '是否居中', key: 'center', width: 30},
            {header: '最大宽度', key: 'maxWidth', width: 30},
        ];
        ws.getRow(index).getCell(1).value = section.title
        ws.getRow(index).getCell(1).font = {
            size: 20,
            bold: true,
        };
        index++;
        section.questions.forEach((question) => {
            ws.getRow(index).getCell(1).value = question.question
            const begin = index;
            question.answers.forEach(answer => {
                if ((typeof answer) == "string") {
                    ws.getRow(index).getCell(3).value = answer
                    index++;
                } else if (answer.type == "string") {
                    ws.getRow(index).getCell(2).value = answer.level;
                    ws.getRow(index).getCell(3).value = answer.content;
                    index++;
                } else if (answer.type == "table") {
                    let col = 3;
                    answer.header.forEach((h, i) => {
                        ws.getRow(index).getCell(col + i).value = h;
                    });
                    index++;
                    answer.body.forEach((b) => {
                        b.forEach((cell, i) => {
                            ws.getRow(index).getCell(col + i).value = cell;
                        });
                        index++;
                    });
                } else if (answer.type == "image") {
                    ws.getRow(index).getCell(3).value = answer.id
                    index++;
                }
            });
            const end = index - 1;
            ws.mergeCells(`A${begin}:A${end}`);
            ws.getCell(begin, 1).alignment = {vertical: 'middle'};
            index++;
        })

    });

    workbook.xlsx.writeFile(filename)
        .then(function () {
            // done
        });
};


generateExcel(require('./app/data/en.json'));
//
// const generateDataJs = (data) => {
//
//     data.sections.forEach((section, sectionIndex) => {
//         let index = 0;
//         section.questions.forEach((question, questionIndex) => {
//             question.answers.forEach((answer, index) => {
//                 if (answer.type == "image") {
//                     const obj = answer;
//                     let content = answer.content;
//                     content = content.substring('./img/'.length, content.length - ".png".length);
//                     question.answers[index] = {id: content, type: 'image'}
//                     // console.log(answer)
//                 }
//             })
//         })
//     });
//
//     console.log("%j", data)
// }
// // generateDataJs(require('./app/data/zh.js'))
//
// const generateImageDataJs = (data) => {
//     let str = "{\n"
//     let map = {};
//     data.sections.forEach((section) => {
//         section.questions.forEach((question, questionIndex) => {
//             question.answers.forEach((answer, index) => {
//                 if (answer.type == "image" && map) {
//
//
//                     let content = answer.content;
//
//
//                     content = content.substring('./img/'.length, content.length - ".png".length);
//                     if (map[content]) {
//                         return
//                     }
//                     let objStr = `\n${content}:{\n`;
//                     objStr += `content:require("./img/${content}.png"),\n`
//                     if (answer.maxWidth) {
//                         objStr += `maxWidth:true,\n`
//                     }
//                     if (answer.width) {
//                         objStr += `width:${answer.width},\n`
//                     }
//                     if (answer.center) {
//                         objStr += `center:true,\n`
//                     }
//                     if (answer.other) {
//                         objStr += 'other:{';
//                         for (var key in answer.other) {
//                             const v = answer.other[key];
//                             const otherContent = v.substring('./img/'.length, v.length - ".png".length);
//
//                             objStr += `"${key}":require("./img/${otherContent}.png"),\n`
//                         }
//                         objStr += "},\n";
//                     }
//
//                     objStr += "},";
//
//                     str += objStr
//
//                     map[content] = true
//                 }
//             })
//         })
//     });
//     str += "}"
//     console.log(str)
// }
//
// // generateImageDataJs(HelpCenter_ZH);