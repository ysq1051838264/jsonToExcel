/**
 * Created by hdr on 17/6/9.
 */
export default {
    title: '帮助中心',
    sections: [
        {
            title: "产品的使用注意事项",
            questions: [
                {
                    question: "哪些人不能使用本产品？",
                    answers: [
                        "安装心脏起搏器，人工肺，便携式ECG，骨质疏松者等使用维持生命的医疗器械的人群不能使用本产品。"
                    ]
                },
                {
                    question: "哪些人使用本产品需特别注意？",
                    answers: [
                        {
                            type: "string",
                            content: "未满18岁的儿童和青少年：因为未成年人营养摄入成长发育较快，目前没有标准的未成年人体成分的评价系统，所以我们的系统中某些测量指标根据年龄不同而不同",
                            level: 1
                        },
                        {
                            type: "table",
                            header: ["指标类型", "有效年龄"],
                            body: [
                                ["体重", "一直有效"],
                                ["BMI", "≥ 4岁"],
                                ["体脂率", "≥ 10岁"],
                                ["体水分率", "≥ 10岁"],
                                ["皮下脂肪", "≥ 10岁"],
                                ["基础代谢率", "≥ 10岁"],
                                ["去脂体重", "≥ 10岁"],
                                ["内脏脂肪等级", "≥ 18岁"],
                                ["骨骼肌率", "≥ 18岁"],
                                ["肌肉量", "≥ 18岁"],
                                ["骨量", "≥ 18岁"],
                                ["蛋白质", "≥ 18岁"],
                                ["身体年龄", "≥ 18岁"],
                            ]
                        },
                        {
                            type: "string",
                            content: "孕妇：因体内有胎儿和羊水，在检测过程中这些不定因素会影响身体数据的准确数值，所以脂肪率等数据无参考意义，建议只测量体重。",
                            level: 1
                        }, {
                            type: "string",
                            content: "专业健美运动员：本产品目标使用人群为普通人群。因为专业健美运动员的身体肌肉与脂肪比例属于特殊比例，所以使用本产品所测量的脂肪率数据可能会跟医院用的专业仪器设备有差异，建议此类人群关注数据的长期变化，而不是关注测量值本身。",
                            level: 1
                        }
                    ]
                },
                {
                    question: "我的体脂秤是可以连接APP的吗？",
                    answers: [
                        " 您购买的体脂称必须配合APP使用，否则在秤上只是显示体重信息。在APP中有更多的比如体脂率，体水分率等信息显示。这样做的好处是让您的每一次测量结果都可以记录在手机和云服务上。",
                        "配合使用的APP名字叫做Feelfit，请到AppleStore和Google Play上免费下载。Feelfit可以记录您和家人的所有测量结果，方便您查看每一次的数据。"
                    ]
                },
                {
                    question: "为什么APP一开始需要我的身高，年龄等私密信息？你们会保密吗？",
                    answers: [
                        "BIA生物电阻阻的测量方法将需要用到您的身高/年龄/性别三个信息，同时结合秤给出来的体重和身体阻抗信息进行脂肪率的测算。所以身高/年龄/性别是必须要的。",
                        "我们会保密您的身体信息，保证这些信息只被用于脂肪率算法的应用，不做其他任何用途。",
                    ],
                },
                {
                    question: "秤没有显示或者显示异常怎么办？",
                    answers: [
                        "秤的显示异常有以下几个方面：",
                        {
                            type: "image",
                            content: require("./img/scale_error_1.png"),
                            width: 200,
                            center: true,
                            textDown: true,
                        },
                        {
                            type: "string",
                            content: "无LED显示。请检查电池是否还有电量，重新安装电池，如果还是无显示，建议更换电池。",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/scale_error_2.png"),
                            width: 200,
                            center: true,
                            textDown: true,
                        },
                        {
                            type: "string",
                            content: "LED显示为LO。请认真检查电池是否有安装正确，并且确认电池还有电量，如果还是显示LO，建议更换电池。",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/scale_error_3.png"),
                            width: 200,
                            center: true,
                            textDown: true,
                        },
                        {
                            type: "string",
                            content: "LED显示为EER。秤的传感器已经超载甚至是损坏，请不要测量超过180KG或440磅的重量。",
                            level: 1,
                        },
                    ]
                },
                {
                    question: "如何让秤的显示在lb和kg之间切换？",
                    answers: [
                        "首先您需要在APP的设置中更改lb和kg的设置，设置完毕之后进行一次完整的测量，在此过程中，APP会将您的设置信息传递给秤，等到秤的LED关机，在下一次秤开机的时候，将会显示您要的单位。",
                        "设置",
                        {
                            type: "image",
                            content: require('./img/weight_unit_1.png'),
                        },
                        "设置单位",
                        {
                            type: "image",
                            content: require('./img/weight_unit_2.png'),
                        },
                    ],
                },
            ]
        },
        {
            title: "影响测量数据的原因",
            questions: [
                {
                    question: "如何正确的测量?",
                    answers: [
                        {
                            type: "string",
                            content: "打开APP，进入测量界面",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/measure_main_ui.png"),
                        },
                        {
                            type: "string",
                            content: "测量时脱去鞋袜，双脚分别站在两边的导电极片上，测量时不要随意离开或晃动",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/how_measure_1.png"),
                            maxWidth: true,
                        },
                        {
                            type: 'string',
                            content: "秤是先测量体重，再测量脂肪。测量的时候秤和APP的反应分别如下:",
                            level: 1,
                        },
                        {
                            type: 'string',
                            content: "如果体重是50.00KG，那站在称上的时候50.00KG就会闪烁，大概是闪烁3下，屏幕就出现一个0从左往右走，走2-3遍，屏幕就又跳转到50.00KG，大约显示5s，秤会自动息屏，测量结束。",
                            level: 2,
                        },
                        {
                            type: 'string',
                            content: "APP在测量页面，测量界面的圆圈将会滚动，直到有提示音和所有数据出现（提示音可以关闭）",
                            level: 2
                        },
                        {
                            type: 'string',
                            content: '下次称重需要等待LED屏幕熄灭 2 - 3 秒再次进行',
                            level: 1,
                        }
                    ],
                },
                {
                    question: "如何测量才能避免产生不必要的测量误差？",
                    id: 'how_to_avoid_measure_deviation',
                    answers: [
                        {
                            type: "string",
                            content: "减小体重误差的方法：",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/how_put_scale.png")
                        },
                        {
                            type: "string",
                            content: "本产品必须要放置在硬而且平整的地面，如瓷砖等，不可以放在地毯，也不可以在秤下面垫软性的物品。本产品标准误差如下表：",
                            level: 2,
                        },
                        {
                            type: "table",
                            header: ["测量值", "最大误差范围"],
                            body: [
                                ["0<x≤50KG", "±0.2KG"],
                                ["50KG<x≤100KG", "±0.3KG"],
                                ["x≤180KG", "±0.4KG"]
                            ]
                        },
                        {
                            type: "string",
                            content: "每一次测量之前进行Calibrating. 方法是将秤的LED踩亮，在数字不稳定的时候离开秤，LED会出现CAL几个字母并回到”0”。此时Calibrating完毕。",
                            level: 2,
                        },
                        {
                            type: "string",
                            content: "减小脂肪率和水分率误差的方法:",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "本产品是通过BIA生物电阻测量法得到体脂率的，BIA测量方法所得的脂肪率跟如下参数紧密相关：身体阻抗系数/身高/体重/年龄/性别。因此改变任何其中一个参数，脂肪率都会引起变化。",
                            level: 2,
                        },
                        {
                            type: "string",
                            content: "要求测量者必须输入正确的身高/性别/年龄。一旦这些数据不正确，将无法得到准确的体脂率。",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "必须要赤脚（袜子也要脱掉）。",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "为了保证获取标准模型的身体阻抗系数，要求测量者按照正确的站立姿势测量，如下图：",
                            level: 3,
                        },
                        {
                            type: "image",
                            content: require("./img/measure_principle.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "为了获取正确的身体阻抗系数，在测量的时候，双脚请覆盖左右两侧的金属电极，并且保持不动。直到测量结束。整个测量过程时间将有20秒左右。",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "我们建议每天在同一时间，同一身体条件下测量。人体的体重每天变化随着进食和饮水的变化，有0.5~2KG不等的变化值。因为体脂率=脂肪重量/体重，所以体脂率也会有波动，正常人体一天内体脂率波动如下图所示。早上在进食和饮水之前，体脂率达到一天内的最高峰值，下午和晚上随着进食和饮水导致的体重增加和水分率增加，体脂率达到一天内的最低值。",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require("./img/bodyfat_trend_per_day.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: " 因此我们建议用户在清晨空腹测量，连续的每天清晨空腹测量可以得到长期的身体体重/体脂率变化数据。",
                        },
                    ]
                },
                {
                    question: "为什么我的脂肪率测量跟别的秤数据不同？为什么脂肪率需要长期测量，脂肪率的相对变化值更重要？",
                    answers: [
                        "脂肪是一种特殊组织在体内复杂的存在，它包括皮下脂肪，内脏脂肪等，广泛存在于身体各个地方。当前全球有几种较为流行的脂肪率的测量方法，包括DEXA，BIA，水中称重法等等，不同的测量方法都有自己独特的算法，并有不同的结果。至今，水中称重法和DEXA（双能X射线吸收法被称为“金标准”，然而，在这些金标准的重复测试结果也有误差。因此身体成分分析最大的问题在：没有任何一部仪器可以给出绝对正确的答案）。家用体脂秤厂商大都采用的是BIA测量法，也会因为不同的算法而结果不同，因此不建议用户纠结于在不同仪器设备上测量得出的绝对值的差别，而更应关注在同一个设备上长期测量的相对变化值",
                        "因此我们建议用户，尽量使用同一个评估系统，对脂肪率进行长期的监控和测量，长期的变化值可以评估得到一个人的健康状况变化趋势，对健康趋势的掌控才是最重要的，因此我们认为变化的相对值比单次测量的绝对值更加有意义。",
                    ]
                },
                {
                    question: "为什么我们的脂肪测量仪测量出来的成份相加起来会大于1呢？",
                    answers: [
                        "从人体的化学构造来说，人体的主要成份包含脂肪组织、水分、蛋白质、无机质组织，而脂肪组织中主要由脂肪、水分组成，当中水分占脂肪组织总量的25%左右，肌肉组织主要由蛋白质和水分构成，当中水分占肌肉组织总量的70%左右。",
                        "我们的脂肪测量仪测量的是人体中的脂肪组织、肌肉组织、水分、骨量等的主要组织的含量，由于各个组织中均含有相当比例的水份，所以最终产品的测量结果相加会大于1。",
                    ]
                },
            ]
        },
        {
            title: "如何使用APP功能",
            questions: [
                {
                    question: "无法连接设备？",
                    id: "cannot_connect_to_device_android",
                    platform: 'android',
                    answers: [
                        {
                            type: "string",
                            content: "确保蓝牙已经打开，秤放在手机附近，已安装上电池并且已亮屏",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "如果是安卓6.0的设备，请确定是否已经授予 Feelfit 定位权限",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/authorize_permission_feelfit.png"),
                            other: {
                                Yolanda: require("./img/authorize_permission_yolanda.png"),
                                Kitnew: require('./img/authorize_permission_kitnew.png'),
                                RENPHO: require('./img/authorize_permission_renpho.png'),
                            },
                        },
                        {
                            type: "string",
                            content: "已经授予定位权限却还是搜索不到，请打开GPS定位",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "授予 Feelfit 定位权限",
                        },
                        {
                            type: "string",
                            content: "进入到 设置，在设置中点击 “应用”",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require('./img/authorize_permission_1.png'),
                        },
                        {
                            type: "string",
                            content: "在所有应用中，找到轻牛，点击进入到 应用信息",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require("./img/authorize_permission_2_feelfit.png"),
                            other: {
                                Yolanda: require("./img/authorize_permission_2_yolanda.png"),
                                Kitnew: require('./img/authorize_permission_2_kitnew.png'),
                                RENPHO: require('./img/authorize_permission_2_renpho.png'),
                            },
                        },
                        {
                            type: "string",
                            content: "在应用信息中找到权限，点击进入到应用访问授权，找到位置信息并打开",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require("./img/authorize_permission_3_feelfit.png"),
                            other: {
                                Yolanda: require("./img/authorize_permission_3_yolanda.png"),
                                Kitnew: require('./img/authorize_permission_3_kitnew.png'),
                                RENPHO: require('./img/authorize_permission_3_renpho.png'),
                            },
                            maxWidth: true,
                        },
                    ],
                },
                {
                    question: "如何将蓝牙秤和APP进行绑定",
                    answers: [
                        "打开APP，进入到测量界面。如下图此时请您站上秤，让秤上的LED点亮。如果当前APP此前没有绑定任何秤，那么它将会自动绑定这个秤，并且会立即进行称重。",
                        {
                            type: "image",
                            content: require("./img/measure_main_ui.png"),
                        },
                        "如果当前APP已经已绑定别的秤，要让APP再增加这一个秤，则点击测量界面右上角的“+”，进入到绑定设备界面。",
                        {
                            type: "image",
                            content: require("./img/measure_add_device_guide.png")
                        },
                        {
                            type: "string",
                            content: "注意：绑定秤的时候，请保持秤的LED是一直亮的。"
                        }
                    ]
                },
                {
                    question: "我买的蓝牙秤，测量的一定要打开APP吗？",
                    answers: [
                        "您测量时可以不必打开APP。这种情况下每一次测量的数据将会保存到秤里面，我们的秤可以保存最多20次测量数据。你下次打开连接秤时，会自动接收秤已经保存好的数据，然后自动分配到相应的成员账号中。如果此次接收到的体重数据跟APP里面所有账号的体重均相差3KG或以上，APP将会让您手动分配此次的测量数据，或直接删除。"
                    ]
                },
                {
                    question: "如何增加多个用户？",
                    answers: [
                        {
                            type: "string",
                            content: "点击选项卡 “我”（主界面右下角）",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_index.png')
                        },
                        {
                            type: "string",
                            content: "点击头像左边的人形图标，弹出选择添加测量用户或好友",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_add_guide_1.png')
                        },
                        {
                            type: "image",
                            content: require('./img/user_add_guide_2_feelfit.png'),
                            other: {
                                Yolanda: require("./img/user_add_guide_2_yolanda.png"),
                                Kitnew: require("./img/user_add_guide_2_kitnew.png"),
                                RENPHO: require("./img/user_add_guide_2_renpho.png"),
                            }
                        },
                        {
                            type: "string",
                            content: "测量用户无需注册，需填写身体相关资料",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "好友是已注册的用户，需填写对方的已注册邮箱",
                            level: 1,
                        }, {
                            type: "string",
                            content: "添加了测量用户或好友之后，就能在用户列表中选择用户进行测量",
                            level: 1,
                        }
                    ]
                },
                {
                    question: "我的性别/年龄/身高填写错了，怎样修改呢？",
                    answers: [
                        {
                            type: "string",
                            content: "点击选项卡 “我”（主界面右下角）",
                            level: 1
                        },
                        {
                            type: "image",
                            content: require('./img/user_index.png')
                        },
                        {
                            type: "string",
                            content: "点击界面上方的用户头像",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_edit_profile_guide.png'),
                        },
                        {
                            type: "string",
                            content: "进入到用户资料修改界面，修改资料",
                            level: 1,

                        },
                        {
                            type: "string",
                            content: "修改完成后，点击保存即可",
                            level: 1,
                        }
                    ]
                },
                {
                    question: "如何连接到apple health kit?",
                    answers: [
                        {
                            type: "string",
                            content: "在iPhone中找到并打开“健康”应用程序",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/health_kit_logo.png"),
                            width: 100,
                            center: true,
                        },
                        {
                            type: "string",
                            content: "点击“数据来源”选项卡",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/health_kit_index.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "从来源列表中选择“Feelfit”",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/health_kit_feelfit.png"),
                            other: {
                                Yolanda: require("./img/health_kit_yolanda.png"),
                                Kitnew: require('./img/health_kit_kitnew.png'),
                                RENPHO: require('./img/health_kit_renpho.png'),
                            },
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "控制开关来开启或禁用数据权限",
                            level: 1
                        },
                        {
                            type: "image",
                            content: require("./img/health_kit_switcher_feelfit.png"),
                            other: {
                                Yolanda: require("./img/health_kit_switcher_yolanda.png"),
                                Kitnew: require('./img/health_kit_switcher_kitnew.png'),
                                RENPHO: require('./img/health_kit_switcher_renpho.png'),
                            },
                            maxWidth: true,
                        },
                    ]
                },
                {
                    question: "如何添加Feelfit friends？",
                    answers: [
                        "Friends功能可以帮助你们互相看到对方的身体变化情况，比如营养师/健身教练常常需要monitor自己的客户的身体变化情况，就可以使用这个功能。",
                        {
                            type: 'string',
                            content: "点击选项卡 “我”（主界面右下角）",
                            level: 1
                        },
                        {
                            type: "image",
                            content: require('./img/user_index.png'),
                        },
                        {
                            type: 'string',
                            content: "点击头像左边的图标，弹出选择添加Feelfit friends",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_add_guide_3_feelfit.png'),
                            other: {
                                Yolanda: require("./img/user_add_guide_3_yolanda.png"),
                                Kitnew: require('./img/user_add_guide_3_kitnew.png'),
                                RENPHO: require('./img/user_add_guide_3_renpho.png'),
                            },
                            maxWidth: true,
                        },
                        {
                            type: 'string',
                            content: "然后输入对方的邮箱，点击“发送”",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_add_guide_4_feelfit.png'),
                            other: {
                                Yolanda: require("./img/user_add_guide_4_yolanda.png"),
                                Kitnew: require('./img/user_add_guide_4_kitnew.png'),
                                RENPHO: require('./img/user_add_guide_4_renpho.png'),
                            },
                        },
                        {
                            type: 'string',
                            content: "此时对方会收到一条系统消息，对方可以通过点击选项卡“我”界面上右上角的icon进入系统消息查看。如果对方并且接受了你的邀请，你们就成功的成为了friends。可以互相查看对方的身体详情。",
                            level: 1,
                        },
                    ]
                },
                {
                    question: "如何查看我的历史测量数据？如果我想删除其中的数据该怎么办？",
                    answers: [
                        {
                            type: "string",
                            content: "点击” 图表”选项卡（主界面下方正中间）",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_index.png')
                        },
                        {
                            type: "string",
                            content: "点击图表界面右上方的图标，或点击图表中某个点，进入到历史数据的界面",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/chart_click_history.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "选中您需要删除数据的那一天，并勾选需要删除的数据（每条数据的右上角），支持多个勾选",
                            level: 1,
                        },
                        "点界面下方的“删除”按钮，即可删除",
                        {
                            type: "image",
                            content: require("./img/history_check_data.png"),
                        },

                    ]
                },
                {
                    question: "我想详细对比我不同时间测量的数据的变化，我应该怎么做？",
                    answers: [
                        {
                            type: "string",
                            content: "点击” 图表”选项卡（主界面下方正中间）",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_index.png')
                        },
                        {
                            type: "string",
                            content: "出现默认一周的体重曲线，如果想看其他指标，点击图表下方的图标，切换到不同指标的曲线图",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/chart_change_indicator.png"),
                        },
                        {
                            type: "string",
                            content: "图表可以拖动查看更早之前的数据",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_slide.png'),
                            level: 1
                        },
                        {
                            type: "string",
                            content: "图表上方可以选择时间范围，查看更长时间的趋势",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_chart_date.png')
                        },

                    ]
                }
            ]
        }
    ],
}
;
