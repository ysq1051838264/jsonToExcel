/**
 * Created by hdr on 17/7/4.
 */
export default function () {
    var u = navigator.userAgent;

    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {   //安卓手机
        return "android";
    } else if (u.indexOf('iPhone') > -1) {   //苹果手机
        return "ios";
    }
    return null;
}