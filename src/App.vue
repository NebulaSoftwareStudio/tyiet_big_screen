<template>
  <div class="big-screen-box">
    <!-- 左侧数据盒子 -->
    <div class="left_data_box">
      <div class="date_time_box">
        <div class="time_clock">
          <div :class="'digital digital_' + currentTime.substr(11,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(12,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div class="gap">:</div>
          <div :class="'digital digital_' + currentTime.substr(14,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(15,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div class="gap">:</div>
          <div :class="'digital digital_' + currentTime.substr(17,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(18,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
        </div>
        <div class="date_clock">
          <div :class="'digital digital_' + currentTime.substr(0,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(1,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(2,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(3,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div class="gap">-</div>
          <div :class="'digital digital_' + currentTime.substr(5,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(6,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div class="gap">-</div>
          <div :class="'digital digital_' + currentTime.substr(8,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
          <div :class="'digital digital_' + currentTime.substr(9,1)">
            <span class="c1"></span>
            <span class="c2"></span>
            <span class="c3"></span>
            <span class="l1"></span>
            <span class="l2"></span>
            <span class="r1"></span>
            <span class="r2"></span>
          </div>
        </div>
      </div>
      <div class="room_map_box">
        <div class="left_data">
          <h3 class="model_title">小河家</h3>
          <div class="status_data_box">
            <div class="tag_item success">
              <div class="name">室内温度</div>
              <div class="value">20 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">室外温度</div>
              <div class="value">-1 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">湿度</div>
              <div class="value">13.2 %</div>
            </div>
            <div class="tag_item success">
              <div class="name">气压</div>
              <div class="value">1.0063 atm</div>
            </div>
            <div class="tag_item success">
              <div class="name">光照</div>
              <div class="value">558 lux</div>
            </div>
            <div class="tag_item danger">
              <div class="name">PM2.5</div>
              <div class="value">0 mg</div>
            </div>
            <div class="tag_item success">
              <div class="name">电池电压</div>
              <div class="value">4310 v</div>
            </div>
            <div class="tag_item success">
              <div class="name">降水</div>
              <div class="value">未检测到降水</div>
            </div>
          </div>

          <h3 class="model_title">老家1</h3>
          <div class="status_data_box">
            <div class="tag_item success">
              <div class="name">室内温度</div>
              <div class="value">20 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">室外温度</div>
              <div class="value">-1 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">湿度</div>
              <div class="value">13.2 %</div>
            </div>
            <div class="tag_item success">
              <div class="name">气压</div>
              <div class="value">1.0063 atm</div>
            </div>
            <div class="tag_item success">
              <div class="name">光照</div>
              <div class="value">558 lux</div>
            </div>
            <div class="tag_item danger">
              <div class="name">PM2.5</div>
              <div class="value">0 mg</div>
            </div>
            <div class="tag_item success">
              <div class="name">电池电压</div>
              <div class="value">4310 v</div>
            </div>
            <div class="tag_item success">
              <div class="name">降水</div>
              <div class="value">未检测到降水</div>
            </div>
          </div>

          <h3 class="model_title">老家2</h3>
          <div class="status_data_box">
            <div class="tag_item success">
              <div class="name">室内温度</div>
              <div class="value">20 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">室外温度</div>
              <div class="value">-1 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">湿度</div>
              <div class="value">13.2 %</div>
            </div>
            <div class="tag_item success">
              <div class="name">气压</div>
              <div class="value">1.0063 atm</div>
            </div>
            <div class="tag_item success">
              <div class="name">光照</div>
              <div class="value">558 lux</div>
            </div>
            <div class="tag_item danger">
              <div class="name">PM2.5</div>
              <div class="value">0 mg</div>
            </div>
            <div class="tag_item success">
              <div class="name">电池电压</div>
              <div class="value">4310 v</div>
            </div>
            <div class="tag_item success">
              <div class="name">降水</div>
              <div class="value">未检测到降水</div>
            </div>
          </div>

          <h3 class="model_title">老家3</h3>
          <div class="status_data_box">
            <div class="tag_item success">
              <div class="name">室内温度</div>
              <div class="value">20 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">室外温度</div>
              <div class="value">-1 ℃</div>
            </div>
            <div class="tag_item danger">
              <div class="name">湿度</div>
              <div class="value">13.2 %</div>
            </div>
            <div class="tag_item success">
              <div class="name">气压</div>
              <div class="value">1.0063 atm</div>
            </div>
            <div class="tag_item success">
              <div class="name">光照</div>
              <div class="value">558 lux</div>
            </div>
            <div class="tag_item danger">
              <div class="name">PM2.5</div>
              <div class="value">0 mg</div>
            </div>
            <div class="tag_item success">
              <div class="name">电池电压</div>
              <div class="value">4310 v</div>
            </div>
            <div class="tag_item success">
              <div class="name">降水</div>
              <div class="value">未检测到降水</div>
            </div>
          </div>


        </div>
        <div class="right_room_map">

        </div>
      </div>
      <div class="other_data_box">
        <div class="power_status">
          <h3 class="model_title">电源状态</h3>
          <div class="status_info_box">
            <div class="danger_status_active">过载</div>
            <div class="status_box">UPS故障</div>
          </div>
          <div class="status_data_box">
            <div class="tag_item success">
              <div class="name">电压</div>
              <div class="value">35V</div>
            </div>
            <div class="tag_item success">
              <div class="name">电流</div>
              <div class="value">1.0A</div>
            </div>
            <div class="tag_item danger">
              <div class="name">功率</div>
              <div class="value">0W</div>
            </div>
            <div class="tag_item success">
              <div class="name">功因</div>
              <div class="value">10</div>
            </div>
          </div>
        </div>
        <div class="internet_status">
          <h3 class="model_title">网路及设备在线状态</h3>
          <div class="status_data_box">
            <div class="tag_item info">
              <div class="name">服务器</div>
              <div class="value">192.168.1.4</div>
            </div>
            <div class="tag_item danger">
              <div class="name">老家1</div>
              <div class="value">SOS</div>
            </div>
            <div class="tag_item success">
              <div class="name">老家2</div>
              <div class="value">在线</div>
            </div>
            <div class="tag_item success">
              <div class="name">老家3</div>
              <div class="value">在线</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧数据盒子 -->
    <div class="right_data_box">
      <div class="weather_box">
        <h3 class="model_title">{{weatherInfo.basic.admin_area}} {{weatherInfo.basic.location}} 实时天气</h3>
        <div class="weather_info_box">
          <div class="now_weather">{{weatherInfo.now.text}} {{weatherInfo.now.temp}}℃</div>
          <div class="other_info">
            <div class="value">{{weatherInfo.now.vis}}公里</div>
            <div class="value">良</div>
            <div class="name">能见度</div>
          </div>
          <div class="other_info">
            <div class="value">{{weatherInfo.now.windScale}}级</div>
            <div class="value">{{weatherInfo.now.windDir}}</div>
            <div class="name">风向</div>
          </div>
          <div class="other_info">
            <div class="value">{{weatherInfo.now.humidity}}%</div>
            <div class="value">舒适</div>
            <div class="name">湿度</div>
          </div>
          <div class="other_info">
            <div class="value">{{weatherInfo.now.pressure}}atm</div>
            <div class="value">标准</div>
            <div class="name">气压</div>
          </div>
        </div>
      </div>
      <div class="warning_box">
        <h3 class="model_title">设备状态</h3>

        <div class="status_info_box">
          <div class="danger_status_active">门未关</div>
          <div class="status_box">进人</div>
          <div class="status_box">SOS</div>
        </div>
      </div>
      <div class="message_box">
        <div class="model_title">
          <div class="title_content">留言板</div>
          <div class="model_function">
            <div class="function_btn">清空</div>
            <div class="function_btn">历史</div>
          </div>
        </div>
      </div>
      <div class="copyright">&copy;2020 Designed by TianYuan Connection & Powered by Nebula Solar Platform</div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import dayjs from "dayjs";
import axios from "axios";

const mountedInterval = ref(null)
const currentTime = ref("")
const weatherInfo = ref({
  basic: {},
  now: {
    cond_txt: '-',
    tmp: '-',
  }
})

function getWeatherInfo(lat, lng){
  let queryParam = {
    location: [lng, lat].join(','),
    key: '858fe70ccd0c4277bc5f4acfc8be54ce'
  };
  axios.get("https://devapi.qweather.com/v7/weather/now", {params: queryParam}).then((res) => {
    console.log(res)
    if(res.data.now){
      weatherInfo.value.now = res.data.now
    }else{
      weatherInfo.value.now = {}
    }
  }).catch((err) => {
    console.error(err)
  })
}

function getCurrentPositionFinish(e){
  console.log(e)
  if(e.coords && e.coords.latitude){
    getWeatherInfo(e.coords.latitude, e.coords.longitude)
  }
}

onMounted(() => {
  mountedInterval.value = setInterval(() => {
    currentTime.value = dayjs().format("YYYY-MM-DD HH:mm:ss")
  }, 500)
  //

  navigator.geolocation.getCurrentPosition(getCurrentPositionFinish, getCurrentPositionFinish)
})
</script>

<style lang="less">


.big-screen-box{
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #59f6fb;
  overflow-y: scroll;

  .model_title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15pt;
    box-sizing: border-box;

    .model_function{
      width: fit-content;
      display: flex;
      flex-wrap: nowrap;

      .function_btn{
        padding: 5px 10px;
        border: 1px solid #59f6fb;
        margin: 0 5px;
        cursor: pointer;

        &:hover{
          background-color: #59f6fb;
          color: #000000;
        }
      }
    }
  }

  .left_data_box{
    min-width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;

    .date_time_box{
      width: 100%;
      /*height: 170px;*/
      border: 1px solid #59f6fb;
      padding: 30px;

      .time_clock {
        display: flex;
      }

      .date_clock{
        display: flex;
        justify-content: flex-end;
        zoom: 0.7;
        margin-top: 20px;
      }

      .gap {
        height: 46px;
        padding-left: 10px;
        font-size: 50px;
        font-weight: bold;
        line-height: 0.8;
        transform: skew(-6deg);
      }
    }

    .room_map_box{
      width: 100%;
      display: flex;
      height: 500px;
      flex: auto;
      border: 1px solid #59f6fb;

      .left_data{
        width: 30%;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 30px;
        border-right: 1px solid #59f6fb;

        .status_data_box{
          display: block;

          .tag_item{
            width: fit-content;
            line-height: 20px;
            margin: 5px;
            display: flex;

            .name{
              padding: 0 5px;
              background: rgb(85, 85, 85);
              color: rgb(255, 255, 255);
            }

            .value{
              padding: 0 5px;
              color: rgb(255, 255, 255);
            }

            &.danger{
              animation: show_hide 1000ms linear 0s infinite normal;

              .value{
                background: rgb(248, 0, 0);
              }
            }

            &.warning{
              .value{
                background: #F67F3C;
              }
            }

            &.info{
              .value{
                background: #44b7bc;
              }
            }

            &.success{
              .value{
                background: #44CC11;
              }
            }
          }
        }

        &::-webkit-scrollbar{
          display: none;
          width: 0;
          height: 0;
          opacity: 0;
        }
      }

      .right_room_map {
        position: relative;
        border-left: 1px solid #59f6fb;
      }
    }

    .other_data_box{
      width: 100%;
      display: flex;
      border: 1px solid #59f6fb;

      .power_status{
        width: 50%;
        border-right: 1px solid #59f6fb;
        padding: 30px;
      }

      .status_info_box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 5px 0;

        .status_box{
          padding: 5px 10px;
          color: #888888;
          text-align: center;
          margin: 5px;
          border: 1px solid #888888;
          opacity: .7;
        }

        .danger_status_active{
          padding: 5px 10px;
          color: #F80000;
          text-align: center;
          margin: 5px;
          border: 1px solid #F80000;
          animation: show_hide 1000ms linear 0s infinite normal;
        }
      }

      .status_data_box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px 0;
        font-size: .8125rem;



        .tag_item{
          width: fit-content;
          line-height: 20px;
          margin: 5px;
          display: flex;

          .name{
            padding: 0 5px;
            background: rgb(85, 85, 85);
            color: rgb(255, 255, 255);
          }

          .value{
            padding: 0 5px;
            color: rgb(255, 255, 255);
          }

          &.danger{
            animation: show_hide 1000ms linear 0s infinite normal;

            .value{
              background: rgb(248, 0, 0);
            }
          }

          &.warning{
            .value{
              background: #F67F3C;
            }
          }

          &.info{
            .value{
              background: #44b7bc;
            }
          }

          &.success{
            .value{
              background: #44CC11;
            }
          }
        }
      }

      .internet_status{
        width: 50%;
        border-left: 1px solid #59f6fb;
        padding: 30px;

        .status_data_box{
          display: block;
        }
      }
    }
  }

  .right_data_box{
    min-width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;

    .weather_box{
      width: 100%;
      border: 1px solid #59f6fb;
      padding: 30px;

      .weather_info_box{
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;

        .now_weather{
          flex: auto;
          font-size: 30pt;
        }
      }

      .other_info{
        flex: auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border-left: 1px solid rgba(89,246,251,.2);

        .name{
          font-size: 8pt;
          line-height: 100%;
          margin-top: 10px;
        }

        .value{
          font-size: 12pt;
          /*line-height: 100%;*/
        }
      }
    }

    .warning_box{
      width: 100%;
      height: 150px;
      border: 1px solid #59f6fb;
      padding: 30px;



      .status_info_box{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 5px 0;

        .status_box{
          padding: 5px 10px;
          color: #888888;
          text-align: center;
          margin: 5px;
          border: 1px solid #888888;
          opacity: .7;
        }

        .danger_status_active{
          padding: 5px 10px;
          color: #F80000;
          text-align: center;
          margin: 5px;
          border: 1px solid #F80000;
          animation: show_hide 1000ms linear 0s infinite normal;
        }
      }
    }

    .message_box{
      width: 100%;
      height: 600px;
      flex: auto;
      border: 1px solid #59f6fb;
      padding: 30px;
    }

    .copyright{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #59f6fb;
      padding: 30px;
    }
  }

  &::-webkit-scrollbar{
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
  }
}



/**
 * 时钟
 */
.digital {
  position: relative;
  width: 26px;
  height: 46px;
  margin-left: 10px;
  transform: skew(-6deg);

  span {
    position: absolute;
    border-radius: 50vh;
    box-sizing: border-box;
  }

  .c1,
  .c2,
  .c3 {
    height: 0;
    width: 26px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }

  .c1 {
    top: 0;
    left: 0;
    border-top: 4px solid currentColor;
  }

  .c2 {
    top: 50%;
    left: 0;
    margin-top: -2px;

    &:before,
    &:after {
      content: "";
      height: 0;
      width: 24px;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      box-sizing: border-box;
    }

    &:before {
      position: absolute;
      top: 0;
      left: -3px;
      border-bottom: 2px solid currentColor;
    }

    &:after {
      position: absolute;
      top: 2px;
      left: -3px;
      border-top: 2px solid currentColor;
    }
  }

  .c3 {
    bottom: 0;
    left: 0;
    border-bottom: 4px solid currentColor;
  }

  .l1,
  .l2 {
    height: 21px;
    width: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 4px solid currentColor;
  }

  .l1 {
    top: 1px;
    border-top-width: 4px;
  }
  .l2 {
    top: 24px;
    border-bottom-width: 4px;
  }

  .r1,
  .r2 {
    height: 21px;
    width: 0;
    right: 0;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-right: 4px solid currentColor;
  }

  .r1 {
    top: 1px;
    border-top-width: 4px;
  }

  .r2 {
    top: 24px;
    border-bottom-width: 4px;
  }

  &.digital_1 .c1,
  &.digital_1 .c2,
  &.digital_1 .c3,
  &.digital_1 .l1,
  &.digital_1 .l2,
  &.digital_2 .l1,
  &.digital_2 .r2,
  &.digital_3 .l1,
  &.digital_3 .l2,
  &.digital_4 .c1,
  &.digital_4 .c3,
  &.digital_4 .l2,
  &.digital_5 .l2,
  &.digital_5 .r1,
  &.digital_6 .r1,
  &.digital_7 .c2,
  &.digital_7 .c3,
  &.digital_7 .l1,
  &.digital_7 .l2,
  &.digital_9 .l2,
  &.digital_0 .c2 {
    animation: changeDigital 200ms 0ms 1 ease-in forwards;
  }
}


@keyframes changeDigital {
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}




@keyframes line-spin-fade-loader {
  50% {
    opacity: .3
  }
  100% {
    opacity: 1
  }
}

@media (max-width:1200px) {
  #app{
    width: 100%;
    display: block;
  }

  .left_data_box{
    min-width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  .right_data_box{
    min-width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }
}

@keyframes show_hide {
  0%{
    opacity: 0;
  }
  49%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}
</style>
