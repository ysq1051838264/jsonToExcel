/**
 * Created by hdr on 17/6/15.
 */
export default function (name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]).replace(/\+/," ");
    return null;
}