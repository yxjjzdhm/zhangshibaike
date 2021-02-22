// promise
// 使用方法： import request from""这个文件所在的路径。js"
export function request(options) {
    return new Promise((resolve, reject) => {
        uni.request({
            // url: "https://www.fdyxx.cn" + options.url,
            url: "http://192.168.16.157:8088" + options.url,
            // url: "http://192.168.16.233:8088" + options.url,
            //  url: "http://192.168.16.156:8088" + options.url,
            // url: "http://192.168.16.233:8088" + options.url,
            data: options.data || {},
            method: options.method || 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: options.header || {}, // 设置请求的 header
            success: function(res) {
                resolve(res)
            },
            fail: function(err) {
                reject(err)
            },
            complete: function() {}
        })
    })
}

// 控制页面的显示与隐藏 
// 页面需要引入load_model组件
export function showPages(showPages) {
    this.status.loading = true; // 开启遮罩,需要在页面中定义属性
    let num = 0;
    let timer = setInterval(() => {
        if (num >= 3) {
            // 遮罩文案,需要在页面中定义属性
            this.loading_title = "加载时间较长,\n请耐心等待";
        }
        num++;
    }, 1000);
    showPages.then((res) => {
        this.status.loading = false; //关闭遮罩
        clearInterval(timer);
        if (num >= 8 || !res) {
            uni.hideLoading();
            uni.showToast({
                title: "加载失败",
                icon: "none",
                mask: true,
            });
            setTimeout(() => {
                uni.navigateBack({
                    delta: 1,
                });
            }, 500);
        } else {
            this.status.showPages = false; // 显示页面,需要在页面中定义属性
            uni.hideLoading();
        }
        num = 0;
    }).catch(err => {
        console.log(err);
        if (err) {
            clearInterval(timer);
            this.status.loading = false;
            uni.hideLoading();
            uni.showToast({
                title: "加载失败",
                icon: "none",
                mask: true,
            });
            setTimeout(() => {
                uni.navigateBack({
                    delta: 1,
                });
            }, 500);
            return;
        }
    });
}