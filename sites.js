/* ============================================================
 *  sites.js —— 唯一需要维护的文件
 * ------------------------------------------------------------
 *  字段说明：
 *    name  显示名称（必填）
 *    url   链接地址（必填）
 *    desc  一句话说明（可选，留空则只显示名称）
 *    icon  可选。填 emoji 或图片 URL；留空则自动用名称首字生成淡雅色块（零网络请求）
 *
 *  新增一个站点：在对应分组的 items 里加一行
 *    { name: 'Example', url: 'https://example.com', desc: '说明' },
 *  新增一个分组：在 GROUPS 里加一段
 *    { name: '分组名', items: [ ... ] },
 * ============================================================ */

const SITE_TITLE = '导航';
const SITE_DESC = '个人常用站点';

const GROUPS = [
  {
    name: '外语期刊',
    items: [
      { name: '上海学生英文报', url: 'https://flbook.com.cn/u/272955', desc: '英文报' },
      { name: 'China Daily', url: 'https://www.chinadaily.com.cn/', desc: 'China Daily' },
      { name: '人民日报', url: 'https://en.people.cn/', desc: '人民日报' },
      { name: 'Magzinelib', url: 'https://magazinelib.com/g', desc: 'Magzinelib' },
      { name: '资源合集', url: 'https://github.com/knowledgefxg/learning-englishm', desc: '资源合集' },
    ],
  },
  {
    name: '效率与文档',
    items: [
      { name: '腾讯文档', url: 'https://docs.qq.com', desc: '在线协作文档' },
      { name: 'Notion', url: 'https://www.notion.so', desc: '知识与笔记' },
      { name: 'Excalidraw', url: 'https://excalidraw.com', desc: '手绘风白板' },
      { name: '有道翻译', url: 'https://fanyi.youdao.com', desc: '在线翻译' },
      { name: 'ProcessOn', url: 'https://www.processon.com', desc: '在线流程图' },
    ],
  },
   {
    name: '搜索与阅读',
    items: [
      { name: 'Google', url: 'https://www.google.com', desc: '全球搜索' },
      { name: 'Bing', url: 'https://www.bing.com', desc: '微软搜索' },
      { name: '百度', url: 'https://www.baidu.com', desc: '中文搜索' },
      { name: '维基百科', url: 'https://zh.wikipedia.org', desc: '自由百科全书' },
      { name: '知乎', url: 'https://www.zhihu.com', desc: '中文问答社区' },
    ],
  },
  {
    name: '常用工具',
    items: [
      { name: '牛津词典', url: 'https://www.oed.com/', desc: '牛津词典' },
      { name: 'DeepL', url: 'https://www.deepl.com/zh/translator', desc: 'DeepL' },
      { name: '百度', url: 'https://www.baidu.com', desc: '中文搜索' },
      { name: '维基百科', url: 'https://zh.wikipedia.org', desc: '自由百科全书' },
      { name: '知乎', url: 'https://www.zhihu.com', desc: '中文问答社区' },
    ],
  },
  {
    name: 'AI 工具',
    items: [
      { name: 'WorkBuddy', url: 'https://www.workbuddy.cn', desc: 'AI 工作助手' },
      { name: 'ChatGPT', url: 'https://chatgpt.com', desc: 'OpenAI 对话' },
      { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic 对话' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索' },
      { name: 'Kimi', url: 'https://www.kimi.com', desc: '长文本对话' },
      { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里大模型' },
    ],
  },
  {
    name: '开发',
    items: [
      { name: 'GitHub', url: 'https://github.com', desc: '代码托管' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '技术问答' },
      { name: 'MDN', url: 'https://developer.mozilla.org', desc: 'Web 文档' },
      { name: 'npm', url: 'https://www.npmjs.com', desc: '包仓库' },
      { name: 'Can I use', url: 'https://caniuse.com', desc: '浏览器兼容查询' },
      { name: '掘金', url: 'https://juejin.cn', desc: '中文技术社区' },
    ],
  },
  {
    name: '设计与素材',
    items: [
      { name: 'Figma', url: 'https://www.figma.com', desc: '在线设计协作' },
      { name: 'Dribbble', url: 'https://dribbble.com', desc: '设计灵感' },
      { name: 'Unsplash', url: 'https://unsplash.com', desc: '免费高清图库' },
      { name: '站酷', url: 'https://www.zcool.com.cn', desc: '中文设计社区' },
      { name: 'iconfont', url: 'https://www.iconfont.cn', desc: '图标库' },
    ],
  },
  
  {
    name: '影音与生活',
    items: [
      { name: '哔哩哔哩', url: 'https://www.bilibili.com', desc: '视频社区' },
      { name: 'YouTube', url: 'https://www.youtube.com', desc: '海外视频' },
      { name: '网易云音乐', url: 'https://music.163.com', desc: '在线音乐' },
      { name: '豆瓣', url: 'https://www.douban.com', desc: '书影音评分' },
    ],
  },
];
