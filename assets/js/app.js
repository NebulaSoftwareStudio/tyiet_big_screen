/**
 * TianYuan-dp 框架 JS API 前端运作脚本 版本 V0.0.1
 * ********************* 首页 *********************
 * 运作脚本使用标准原生 JavaScript ES6 编写方式，基于 Vue 开发
 * 版权所有 2020 (c) http://tyiet.cn AllRight Reserved.
 */

var  app = new Vue({
    el: '#app',
    data: {
        pageIsLoading:true,

        currentTime: '2020-01-25 18:46:30',

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
    },
    created: function (options) {
        // do nothing...
    },
    mounted: async function () {
        //获取天气
        this.weatherInfo = await this.getWeatherInfo();

        //关闭加载状态
        this.pageIsLoading = false;

    }
});
