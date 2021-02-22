/**
 * 
 * 
 */
const commentTime = {

    commentTimeHandle(dateStr) {
        //获取dataStr的秒数 
        let date1 = new Date(dateStr);
        let Y = date1.getFullYear();
        let M = date1.getMonth() + 1;
        let D = date1.getDate();
        let H = date1.getHours();
        let m = date1.getMinutes();
        let s = date1.getSeconds();
        // 对 月 日 时 分 秒 小于10时, 加0显示 例如: 09-09 09:01
        if (M < 10) {
            M = '0' + M;
        }
        if (D < 10) {
            D = '0' + D;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        return Y + '-' + M + '-' + D

    }
}
export default {
    commentTime
}