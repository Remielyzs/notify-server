/**
 * @description 文本卡片模板 title + description
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

/**
 * 卡片类型模板定义
 * 模板内容配置
 * 微信通知 textcard类型的description内容限制512个字节
 */

import dayjs from '../../../utils/dayjs'
import { getConfig } from '../../../utils/getConfig'

const CONFIG = getConfig().loveMsg

export const textCardTemplate = (data: TextCardTemplateProps) => {
  const {
    weather,
    weather_figure 
  } = data
  // 今日、恋爱天数
//   const today = `${date.replace('-', '年').replace('-', '月')}日`
//   const dateLength = dayjs(date).diff(CONFIG.start_stamp, 'day')

//   // 拼接内容
//   let description = `${area} | ${today} | ${week}`

//   if (CONFIG.date_lunarInfo && lunarInfo) {
//     const { festival, lunar_festival, jieqi, lubarmonth, lunarday } = lunarInfo
//     // 公历节日、农历节日和二十四节气
//     const festival_info = festival ? `| ${festival}` : ''
//     const lunar_festival_info = lunar_festival ? `| ${lunar_festival}` : ''
//     const jieqi_info = jieqi ? `| ${jieqi}` : ''

//     description += ` ${festival_info}
// 农历 | ${lubarmonth}${lunarday} ${lunar_festival_info} ${jieqi_info}`
//   }

  description += `\n今日天气状况：
天气：${weather.textDay}
${weather.windDirDay}：${weather.windScaleDay}级
温度：${weather.tempMin} ~ ${weather.tempMax}
湿度：${weather.humidity}\n`

  if (weather.precip>0) {
    description += `可能下雨，记得带伞喔，降雨量：${pcpn}mm\n`
  }
//   // 生活指数提示
//   if (CONFIG.weather_tips && tips) {
//     description += `
// ${tips}\n`
//   }

//   // 最高温度
//   if (CONFIG.weather_tem && highest && +highest.replace('℃', '') <= 3) {
//     description += `
// 哈喽哈喽~这里是来自${CONFIG.boy_name}的爱心提醒哦：
// 今日最高温度仅为🥶 ${highest}，可冷可冷了~
// ${CONFIG.girl_name}可要注意保暖哦~\n`
//   }

//   //   if (air_tips) {
//   //     description += `
//   // 出行建议：${air_tips}`
//   //   }

//   //   if (oneWord) {
//   //     description += `
//   // 『 ${oneWord.hitokoto} 』`
//   //   }

//   // 内容末尾，自定义
//   description += `
//   [ 点我有惊喜 ] ❤️ 🧡 💛 💚 💖`

//   const title = `这是我们相识的第 ${dateLength} 天`

  return {
    msgtype: 'textcard',
    textcard: {
      title,
      description,
      //   url: 'https://api.lovelive.tools/api/SweetNothings',
      //   url: 'https://v1.jinrishici.com/all.svg',
      url: `${CONFIG.card_url}`, // 60s看世界
      btntxt: `By${CONFIG.boy_name}`,
    },
  }
}
