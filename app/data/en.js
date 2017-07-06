/**
 * Created by hdr on 17/6/9.
 */
export default {
    title: 'Help Center',
    sections: [
        {
            title: "Precautions for use of the product",
            questions: [
                {
                    question: " Who cannot use this product?",
                    answers: [
                        "Population who uses a cardiac pacemaker, artificial lungs or portable ECG, or has osteoporosis, or uses any other medical device to maintain life cannot use this product."
                    ]
                },
                {
                    question: "Who should pay special attention to use of this product?",
                    answers: [
                        {
                            type: "string",
                            content: " Children and adolescents under 18 years old: Persons under 18 years old ingest relatively much nutrition and develop relatively fast and at present there is no standard evaluation system for components of the bodies in persons under 18 years old, therefore, some of measurement indicators vary according to different ages in our system.",
                            level: 1
                        },
                        {
                            type: "table",
                            header: ["Indicator type", "Effective age"],
                            body: [
                                ["Body weight", "Effective at any age"],
                                ["BMI (body mass index)", "≥ 4years old"],
                                ["Body fat percentage", "≥ 10 years old"],
                                ["Body water percentage", "≥ 10 years old"],
                                ["Subcutaneous fat", "≥ 10 years old"],
                                ["Basal metabolic rate", "≥ 10 years old"],
                                ["Fat free mass", "≥ 10 years old"],
                                ["Visceral fat grade", "≥ 18 years old"],
                                ["Skeletal muscle percentage", "≥ 18 years old"],
                                ["Muscle mass", "≥ 18 years old"],
                                ["Bone mass", "≥ 18 years old"],
                                ["Protein", "≥ 18 years old"],
                                ["physical age", "≥ 18 years old"],
                            ]
                        },
                        {
                            type: "string",
                            content: "A pregnant woman: Her body has fetus (or fetuses) and amniotic fluid, and in detection process these uncertain factors will affect accurate values of body data, therefore, fat percentage and other data cannot be used as reference and it is suggested to measure only weight.",
                            level: 1
                        }, {
                            type: "string",
                            content: "A professional bodybuilder: Target population of this product is general population. Because professional bodybuilders’ body muscle percentage and fat percentage belong to special percentages, therefore, fat percentage data measured by this product may be different from those measured by a specialized instrument or equipment for use in a hospital and it is suggested that such population pay attention to long-term change in data, rather than measurement value itself.",
                            level: 1
                        }
                    ]
                },
                {
                    question: "Can my body scale be connected to an APP (computer application program)? Please briefly introduce the situation.",
                    answers: [
                        "The body fat scale which you have bought must be used in coordination with an APP, otherwise the scale only shows weight information. In the APP, there is more information such as body fat percentage and body water percentage to be displayed. Advantage of doing so is to make your measurement result for one time be able to be recorded on your mobile phone and cloud service.",
                        "Name of the APP for coordinative use is called Feelfit, please go to AppleStore and GooglePlay for free download. Feelfit can record all measurement results of you and your family members and is convenient for you to view data for every time."
                    ]
                },
                {
                    question: "Why does the APP need my height, age and other private information from the beginning? Will you keep it secret?",
                    answers: [
                        "BIA bioelectric measurement method will need to use your three pieces of information, i.e., height/age/gender, and performs fat percentage calculation by combining the information with weight and body impedance information given by the scale. Therefore, height/age/gender is necessary.",
                        "We will keep your body information secret and make sure that the information is only used for fat percentage algorithm application but not for any other purposes.",
                    ],
                },
                {
                    question: "What should I do if the scale does not display or displays a wrong result?",
                    answers: [
                        "The fact that the scale wrongly displays includes the following several aspects:",
                        {
                            type: "image",
                            content: require("./img/scale_error_1.png"),
                            width: 200,
                            center: true,
                            textDown: true,
                        },
                        {
                            type: "string",
                            content: "LED does not display. Please check whether the battery still has electric power, please re-install the battery, if LED does not display, it is suggested to replace the battery.",
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
                            content: "LED displays LO. Please carefully check whether the battery is installed correctly, and confirm the battery still has electric power, if LED still displays LO, it is suggested to replace the battery. ",
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
                            content: "LED displays EER. The sensor of the scale has been overloaded or even damaged, please do not measure a weight with more than 180KG or 440 pounds.",
                            level: 1,
                        },
                    ]
                },
                {
                    question: "How do I make the scale display switch between lb and kg?",
                    answers: [
                        "First, you need to change settings of lb (pound) and kg in settings of the APP, after setup is completed, please connect the APP to the scale, during the process, the APP will transfer your setting information to the scale, and the unit which you have set up will be displayed on the scale.",
                        "Setting",
                        {
                            type: "image",
                            content: require('./img/weight_unit_1.png'),
                        },
                        "Weight Unit",
                        {
                            type: "image",
                            content: require('./img/weight_unit_2.png'),
                        },
                    ],
                },
            ]
        },
        {
            title: "Different measurement results reason",
            questions: [
                {
                    question: "How is measurement performed?",
                    answers: [
                        {
                            type: "string",
                            content: "Please open the APP to enter the measurement interface",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/measure_main_ui.png"),
                        },
                        {
                            type: "string",
                            content: "When you want to perform measurement, please take off your shoes and socks, two feet stand on electrode plates on both sides, respectively, and you should not voluntarily leave or shake during measurement.",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/how_measure_1.png"),
                            maxWidth: true,
                        },
                        {
                            type: 'string',
                            content: "The scale first measures weight and then measure fat. When performing measurement, responses of the scale and the APP are as follows, respectively:",
                            level: 1,
                        },
                        {
                            type: 'string',
                            content: "If weight is 50.00KG, when you stand on the scale, a “50.00KG” will blink for about 3 times, the screen presents a “0” which moves from left to right and which repeats the course for 2-3 times, and then the screen will skip to present “50.00KG” for about 5s, and finally the screen of the scale will be automatically turned off, ending the measurement,",
                            level: 2,
                        },
                        {
                            type: 'string',
                            content: "On the measurement page of the APP, the circle of the measurement interface will scroll till a warning tone and all data appear (warning tone can be turned off),",
                            level: 2
                        },
                        {
                            type: 'string',
                            content: ' Next weighing needs to wait for the LED screen to be off for 2-3 seconds and then is performed again,',
                            level: 1,
                        }
                    ],
                },
                {
                    id: 'how_to_avoid_measure_deviation',
                    question: "What measurement process can avoid an unnecessary measurement error?",
                    answers: [
                        {
                            type: "string",
                            content: "Method to reduce weight error:",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/how_put_scale.png")
                        },
                        {
                            type: "string",
                            content: "This product must be placed on hard and flat ground, such as ceramic tiles and the like, but it cannot be placed on a carpet and a soft item cannot be padded under the scale. The standard error of this product is as follows:",
                            level: 2,
                        },
                        {
                            type: "table",
                            header: ["Measurement value", "Maximum error range"],
                            body: [
                                ["0<x≤50KG", "±0.2KG"],
                                ["50KG<x≤100KG", "±0.3KG"],
                                ["x≤180KG", "±0.4KG"]
                            ]
                        },
                        {
                            type: "string",
                            content: "Before each measurement, calibration is performed and the method is: You should tread (i.e., turn on) the scale’s LED (light-emitting diode), and leave the scale when the displayed number is unstable, and the LED will display several letters, i.e., \"CAL\", and return to \"0\". At this time, calibration is completed.",
                            level: 2,
                        },
                        {
                            type: "string",
                            content: "Method for decreasing errors of fat percentage and water percentage:",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "This product obtains body fat percentage by using BIA (bio-impedance analysis) bioelectric measurement method, fat percentage obtained by using BIA measurement method is closely related to the following parameters: body impedance coefficient/height/weight/age/gender. Therefore, change in any of the parameters can cause change of fat percentage.",
                            level: 2,
                        },
                        {
                            type: "string",
                            content: "A surveyor is required to enter correct height/gender/age. Once these data are incorrect, accurate body fat percentage cannot be obtained.",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "Bare feet are necessary (socks should also be taken off).",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "In order to ensure that the surveyor obtains the body impedance coefficient of the standard model, the surveyor is required to follow correct standing posture for measurement, shown as the following figure.",
                            level: 3,
                        },
                        {
                            type: "image",
                            content: require("./img/measure_principle.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "In order to obtain correct body impedance coefficient, at time of measurement, please put two feet to cover metal electrodes on left and right sides and keep still till end of the measurement. The entire measurement process will take about 20 seconds.",
                            level: 3,
                        },
                        {
                            type: "string",
                            content: "We suggest performing measurement at the same time and under the same body condition every day. The body's daily weight varies with change in eating food and drinking water and the weight change value is 0.5~2KG. Body fat percentage = fat weight/body weight, therefore body fat percentage will fluctuate and normal body fat percentage fluctuation within one day is shown as the following figure. Before eating food and drinking water in the morning, body fat percentage reaches the highest peak in the day, as well as in the afternoon and evening, with weight gain and water percentage gain caused by eating food and drinking water, body fat percentage reaches the lowest value in the day.",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require("./img/bodyfat_trend_per_day.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "  Therefore, we suggest that a user perform measurement in early morning under condition of fasting, continuous early morning fasting measurement can obtain long-term body weight/body fat percentage change data.",
                        },
                    ]
                },
                {
                    question: "Why is my fat percentage measurement datum different from data from other scales? Why is fat percentage required for long-term measurement? Why is fat percentage relative change value more important?",
                    answers: [
                        "Fat is a special tissue and is complex existence in the body, including subcutaneous fat, visceral fat and the like, and is widely present in various parts of the body. Currently, there are several popular methods for measurement of fat percentage in the world, including DEXA, BIA, method for weighing in water, and so on. Different measurement methods have their own unique algorithms and have different results. So far, method for weighing in water and DEXA (dual energy X-ray absorption method) are called \"gold standards\", however, repeat test results with these gold standards also present error. Therefore, the biggest problem of body component analysis is: no instrument can give absolutely correct answer. Household body fat scale manufacturers mostly use BIA measurement method, but results are also different due to different algorithms, therefore, it is not suggested that users be entangled in difference of absolute values measured by different instruments and equipment, but should pay more attention to relative change value measured by the same equipment for a long term",
                        "Therefore, we suggest that a user try to use the same assessment system for long-term monitoring and control and measurement of fat percentage, long-term change value can be assessed to obtain a person's health status change trend, and mastery of health trend is the most important, thus, we believe that relative value of change is more meaningful than absolute value of a single measurement.",
                    ]
                },
                {
                    question: "Why would the sum be more than 1 when components measured by our body fat scale are added?",
                    answers: [
                        "From the view of point of the human body's chemical structure, the body's main components include fat tissue, water, protein and inorganic tissue: fat tissue is mainly comprised of fat and water, wherein water accounts for about 25% of total fat tissue, muscle tissue is mainly comprised of protein and water, wherein water accounts for about 70% of total muscle tissue.",
                        "Our body fat scale is used to measure contents of fat tissue, muscle tissue, water, bone and other major tissues in the human body. Because various tissues contain considerable proportion of water, the sum would be more than 1 when measurement results of the final product are added.",
                    ]
                },
            ]
        },
        {
            title: "How to using our APP ",
            questions: [
                {
                    question: "can not connect to device？",
                    id: "cannot_connect_to_device_android",
                    platform: 'android',
                    answers: [
                        {
                            type: "string",
                            content: "Please make sure that bluetooth is already turned on, the scale is near the phone and battery is installed with bright screen.",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "If it is Android 6.0 device, please make sure whether it grant location rights to Feelfit",
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
                            content: "If it still can not be searched after granting location rights, please turn on GPS.",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "Grant location rights to Yolanda:",
                        },
                        {
                            type: "string",
                            content: "Click “Apps” in Setting",
                            level: 2,
                        },
                        {
                            type: "image",
                            content: require('./img/authorize_permission_1.png'),
                        },
                        {
                            type: "string",
                            content: "Seek out Yolanda from All apps and click it into App info.",
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
                            content: "Seek out Permissions from App info, click it into App permissions and then turn on location.",
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
                    question: "How is the scale bound to it?",
                    answers: [
                        "Please open the APP and enter measurement interface. As shown below, please stand on the scale and turn on the LED on the scale. If the current APP was not previously bound to any scale, it will automatically be bound to the scale and weigh you immediately.",
                        {
                            type: "image",
                            content: require("./img/measure_main_ui.png"),
                        },
                        "If the current APP has been bound to other scales and you need to bind the APP to this scale, you should click on " + " on upper right corner of the measurement interface to enter equipment-binding interface.",
                        {
                            type: "image",
                            content: require("./img/measure_add_device_guide.png")
                        },
                        {
                            type: "string",
                            content: "Note: When binding to the scale, please keep the LED of the scale on."
                        }
                    ]
                },
                {
                    question: "I have a Bluetooth version, is it necessary for the APP to be opened at time of measurement?",
                    answers: [
                        "You do not have to open the APP when you perform measurement. In this case, the measured data every time will be saved to the scale and our scale can save up to 20 times of measurement data. Next time when you open the link with the scale, you will automatically receive the data which have been saved by the scale and then which are automatically assigned to the corresponding member accounts. If there is difference of 3KG or more between the received weight data this time and weight data of all accounts in the APP, the APP will allow you to manually allocate the measurement data this time or perform directly deletion."
                    ]
                },
                {
                    question: "How can multiple users be added?",
                    answers: [
                        {
                            type: "string",
                            content: " Click on the tab \"My Account\" (right lower corner of main interface)",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_index.png')
                        },
                        {
                            type: "string",
                            content: " After clicking on the humanoid icon on left side of the portrait, options are popped up and please add measurement users or friends",
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
                            content: " Measurement users need no registration and need to fill in body-related data",
                            level: 1,
                        },
                        {
                            type: "string",
                            content: "If friends are the registered users, you need to fill in their registered emails",
                            level: 1,
                        }, {
                            type: "string",
                            content: "After adding the measurement users or friends, you can select a user in the user list to perform measurement",
                            level: 1,
                        }
                    ]
                },
                {
                    question: " If my gender/age/height is wrongly filled in, how do I modify them?",
                    answers: [
                        {
                            type: "string",
                            content: "Click on the tab \"My Account\" (right lower corner of main interface)",
                            level: 1
                        },
                        {
                            type: "image",
                            content: require('./img/user_index.png')
                        },
                        {
                            type: "string",
                            content: "Click on the user portrait on the top of the interface",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/user_edit_profile_guide.png'),
                        },
                        {
                            type: "string",
                            content: "Enter the user data modification interface to modify the data",
                            level: 1,

                        },
                        {
                            type: "string",
                            content: "After modification is completed, please click on \"Save\"",
                            level: 1,
                        }
                    ]
                },
                {
                    question: "How is apple health kit connected to?",
                    answers: [
                        {
                            type: "string",
                            content: "The \"health\" application program in the iPhone is found and opened",
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
                            content: "Click on the \"Data Source\" tab",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/health_kit_index.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "Select \"Feelfit\" from the source list",
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
                            content: "Control the switch to open or disable data permission",
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
                    question: "How is a Feelfit friends added?", answers: [
                    "“Friends” function can help you see each other's physical changes, for examples, dietitians/fitness coaches often need to monitor their own customers' physical changes and can use this function.",
                    {
                        type: 'string',
                        content: "Click on the tab \"My Account\" (right lower corner of main interface)",
                        level: 1
                    },
                    {
                        type: "image",
                        content: require('./img/user_index.png'),
                    },
                    {
                        type: 'string',
                        content: "After clicking on the icon on left side of the portrait, options are popped up and please add a Feelfit friend",
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
                        content: "Then perform keyboard input of the other party’s email, and click on \"Send\"",
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
                        content: "At this time the other party will receive a system message, besides, the other party can enter the system message view by clicking on the icon on right upper corner of the interface after clicking on the tab \"My Account\". If the other party accepts your invitation, you have succeeded in becoming friends. You can see each other's body detail.",
                        level: 1,
                    },
                ]
                },
                {
                    question: "How do I view my historical measurement data? What should I do if I want to delete some of the data",
                    answers: [
                        {
                            type: "string",
                            content: "Click on the \"Chart\" tab (in the middle on bottom of main interface)",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_index.png')
                        },
                        {
                            type: "string",
                            content: "Click on the icon on right upper quadrant of the chart interface or click on certain point in the chart to enter historical data interface",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/chart_click_history.png"),
                            maxWidth: true,
                        },
                        {
                            type: "string",
                            content: "Select the day (now you want to delete the data on that day), and tick the datum need to be deleted (right upper corner of each datum), multiple-ticking is supported ",
                            level: 1,
                        },
                        "Click on the \"Delete\" button on bottom of the interface so that deletion is performed",
                        {
                            type: "image",
                            content: require("./img/history_check_data.png"),
                        },

                    ]
                },
                {
                    question: "I want to detailedly compare change in the data which were obtained when I measured myself at different times, what should I do?",
                    answers: [
                        {
                            type: "string",
                            content: "Click on the \"Chart\" tab (in the middle on bottom of main interface)",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_index.png')
                        },
                        {
                            type: "string",
                            content: "Default weight curve of the week appears, if you want to view other indicators, please click on the icon below the chart and switch to curve graph of a different indicator",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require("./img/chart_change_indicator.png"),
                        },
                        {
                            type: "string",
                            content: "A chart can be dragged to view earlier data",
                            level: 1,
                        },
                        {
                            type: "image",
                            content: require('./img/chart_slide.png'),
                            level: 1
                        },
                        {
                            type: "string",
                            content: "Above a chart, you can select time range to view trend for a longer time",
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

