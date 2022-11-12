/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbb0db06c78407ad6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c41de48941996840173726f45fa45432',

  PROVINCE: '云南',
  CITY: '昆明',

  USERS: [	o3ZHm6JN1se-Ds8XO8Imt5LR1kxY，o3ZHm6NUU7GvTwUO2ufvNNDDF9TM
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_e059cb9259e7',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jmiEz2Z2Tn3kTl6xMuJI4-Z3m7ZxNRCds2A53em5AEI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆太太', year: '2002', date: '07-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老公杨杨', year: '1999', date: '06-24',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '05-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'jmiEz2Z2Tn3kTl6xMuJI4-Z3m7ZxNRCds2A53em5AEI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_e059cb9259e7',
    }
  ],

}

module.exports = USER_CONFIG

