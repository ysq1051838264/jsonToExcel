/**
 * Created by hdr on 17/9/15.
 */
const imgs = {

    scale_error_1: {
        content: require("./img/scale_error_1.png"),
        width: 200,
        center: true,
    },
    scale_error_2: {
        content: require("./img/scale_error_2.png"),
        width: 200,
        center: true,
    },
    scale_error_3: {
        content: require("./img/scale_error_3.png"),
        width: 200,
        center: true,
    },
    weight_unit_1: {
        content: require("./img/weight_unit_1.png"),
    },
    weight_unit_2: {
        content: require("./img/weight_unit_2.png"),
    },
    measure_main_ui: {
        content: require("./img/measure_main_ui.png"),
    },
    how_measure_1: {
        content: require("./img/how_measure_1.png"),
        maxWidth: true,
    },
    how_put_scale: {
        content: require("./img/how_put_scale.png"),
    },
    measure_principle: {
        content: require("./img/measure_principle.png"),
        maxWidth: true,
    },
    bodyfat_trend_per_day: {
        content: require("./img/bodyfat_trend_per_day.png"),
        maxWidth: true,
    },
    authorize_permission_feelfit: {
        content: require("./img/authorize_permission_feelfit.png"),
        other: {
            "Yolanda": require("./img/authorize_permission_yolanda.png"),
            "Kitnew": require("./img/authorize_permission_kitnew.png"),
            "RENPHO": require("./img/authorize_permission_renpho.png"),
            "TT Healthier": require("./img/authorize_permission_tth.png"),
            "BF Scale": require("./img/authorize_permission_bfscale.png"),
        },
    },
    authorize_permission_1: {
        content: require("./img/authorize_permission_1.png"),
    },
    authorize_permission_2_feelfit: {
        content: require("./img/authorize_permission_2_feelfit.png"),
        other: {
            "Yolanda": require("./img/authorize_permission_2_yolanda.png"),
            "Kitnew": require("./img/authorize_permission_2_kitnew.png"),
            "RENPHO": require("./img/authorize_permission_2_renpho.png"),
            "TT Healthier": require("./img/authorize_permission_2_tth.png"),
            "BF Scale": require("./img/authorize_permission_2_bfscale.png"),
        },
    },
    authorize_permission_3_feelfit: {
        content: require("./img/authorize_permission_3_feelfit.png"),
        maxWidth: true,
        other: {
            "Yolanda": require("./img/authorize_permission_3_yolanda.png"),
            "Kitnew": require("./img/authorize_permission_3_kitnew.png"),
            "TT Healthier": require("./img/authorize_permission_3_tth.png"),
            "BF Scale": require("./img/authorize_permission_3_bfscale.png"),
        },
    },
    measure_add_device_guide: {
        content: require("./img/measure_add_device_guide.png"),
    },
    user_index: {
        content: require("./img/user_index.png"),
    },
    user_add_guide_1: {
        content: require("./img/user_add_guide_1.png"),
    },
    user_add_guide_2_feelfit: {
        content: require("./img/user_add_guide_2_feelfit.png"),
        other: {
            "Yolanda": require("./img/user_add_guide_2_yolanda.png"),
            "Kitnew": require("./img/user_add_guide_2_kitnew.png"),
            "RENPHO": require("./img/user_add_guide_2_renpho.png"),
            "TT Healthier": require("./img/user_add_guide_2_tth.png"),
            "BF Scale": require("./img/user_add_guide_2_bfscale.png"),
        },
    },
    user_edit_profile_guide: {
        content: require("./img/user_edit_profile_guide.png"),
    },
    health_kit_logo: {
        content: require("./img/health_kit_logo.png"),
        width: 100,
        center: true,
    },
    health_kit_index: {
        content: require("./img/health_kit_index.png"),
        maxWidth: true,
    },
    health_kit_feelfit: {
        content: require("./img/health_kit_feelfit.png"),
        maxWidth: true,
        other: {
            "Yolanda": require("./img/health_kit_yolanda.png"),
            "Kitnew": require("./img/health_kit_kitnew.png"),
            "RENPHO": require("./img/health_kit_renpho.png"),
            "TT Healthier": require("./img/health_kit_tth.png"),
            "BF Scale": require("./img/health_kit_bfscale.png"),
        },
    },
    health_kit_switcher_feelfit: {
        content: require("./img/health_kit_switcher_feelfit.png"),
        maxWidth: true,
        other: {
            "Yolanda": require("./img/health_kit_switcher_yolanda.png"),
            "Kitnew": require("./img/health_kit_switcher_kitnew.png"),
            "TT Healthier": require("./img/health_kit_switcher_tth.png"),
            "BF Scale": require("./img/health_kit_switcher_bfscale.png"),
        },
    },
    me_setting: {
        content: require("./img/me_setting.png"),
    },
    setting_googlefit: {
        content: require("./img/setting_googlefit.png"),
    },
    googlefit_switcher: {
        content: require("./img/googlefit_switcher.png"),
        maxWidth: true,
    },
    google_switcher_enable: {
        content: require("./img/google_switcher_enable.png"),
    },
    googlefit_result: {
        content: require("./img/googlefit_result.png"),
        maxWidth: true,
    },
    setting_fitbit: {
        content: require("./img/setting_fitbit.png"),
    },
    fitbit_switcher: {
        content: require("./img/fitbit_switcher.png"),
        maxWidth: true,
    },
    fitbit_auth: {
        content: require("./img/fitbit_auth.png"),
        maxWidth: true,
    },
    fitbit_result: {
        content: require("./img/fitbit_result.png"),
        maxWidth: true,
    },
    user_add_guide_3_feelfit: {
        content: require("./img/user_add_guide_3_feelfit.png"),
        maxWidth: true,
        other: {
            "Yolanda": require("./img/user_add_guide_3_yolanda.png"),
            "Kitnew": require("./img/user_add_guide_3_kitnew.png"),
            "RENPHO": require("./img/user_add_guide_3_renpho.png"),
            "TT Healthier": require("./img/user_add_guide_3_tth.png"),
            "BF Scale": require("./img/user_add_guide_3_bfscale.png"),
        },
    },
    user_add_guide_4_feelfit: {
        content: require("./img/user_add_guide_4_feelfit.png"),
        other: {
            "Yolanda": require("./img/user_add_guide_4_yolanda.png"),
            "Kitnew": require("./img/user_add_guide_4_kitnew.png"),
            "RENPHO": require("./img/user_add_guide_4_renpho.png"),
            "TT Healthier": require("./img/user_add_guide_4_tth.png"),
            "BF Scale": require("./img/user_add_guide_4_bfscale.png"),
        },
    },
    chart_index: {
        content: require("./img/chart_index.png"),
    },
    chart_click_history: {
        content: require("./img/chart_click_history.png"),
        maxWidth: true,
    },
    history_check_data: {
        content: require("./img/history_check_data.png"),
    },
    chart_change_indicator: {
        content: require("./img/chart_change_indicator.png"),
    },
    chart_slide: {
        content: require("./img/chart_slide.png"),
    },
    chart_chart_date: {
        content: require("./img/chart_chart_date.png"),
    },
}
module.exports = (id) => {
    return imgs[id]
};