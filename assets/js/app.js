/**
 * TianYuan-dp 框架 JS API 前端运作脚本 版本 V0.0.1
 * ********************* 首页 *********************
 * 运作脚本使用标准原生 JavaScript ES6 编写方式，基于 Vue 开发
 * 版权所有 2020 (c) http://tyiet.cn AllRight Reserved.
 */
console.log(
    `%c nonghi-dp project written for %c Vue %c`,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
);
console.log("Copyright (c) 2020 http://tyiet.cn AllRight Reserved. Written by Hanawa Hinata on 2020/1/25");




var  app = new Vue({
    el: '#app',
    data: {
        pageIsLoading:true,

        currentTime: '8888-88-88 88:88:88',
        timeInterval:null,

        weatherInfo:{
            basic:{},
            now:{},
            status:null,
            update:{}
        },

    },
    methods:{
        getWeatherInfo:function () {
            return new Promise((result) => {
                let url = "https://free-api.heweather.net/s6/weather/now?location=auto_ip&key=858fe70ccd0c4277bc5f4acfc8be54ce";
                axios.get(url).then((res) => {
                    result(res.data.HeWeather6[0])
                })
            });
        },

        updateCurrentTime:function (mode) {
            return new Promise((result) => {
                let time = (mode === 'now'?new Date().getTime():'');
                let DataObject = new Date(time);
                //手动格式化时间
                let timeString = DataObject.getFullYear()+"-"+
                    ((DataObject.getMonth()+1)<10?'0'+(DataObject.getMonth()+1):(DataObject.getMonth()+1))+"-"+
                    (DataObject.getDate()<10?'0'+DataObject.getDate():DataObject.getDate()) + ' ' +
                    (DataObject.getHours()<10?'0'+DataObject.getHours():DataObject.getHours()) + ':' +
                    (DataObject.getMinutes()<10?'0'+DataObject.getMinutes():DataObject.getMinutes()) + ':' +
                    (DataObject.getSeconds()<10?'0'+DataObject.getSeconds():DataObject.getSeconds());
                result(timeString);
            })
        }
    },
    created: function (options) {
        // do nothing...
    },
    mounted: async function () {
        let _this = this;
        //获取天气
        this.weatherInfo = await this.getWeatherInfo();
        this.timeInterval = setInterval(async function () {
            _this.currentTime = await _this.updateCurrentTime('now');
        },1000);

        //关闭加载状态
        this.pageIsLoading = false;

    }
});
