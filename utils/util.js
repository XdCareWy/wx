const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const url = "https://zxdyue.top";
const IMAGEURL = "http://p3trypz19.bkt.clouddn.com/";

const data = [
  {
    "id": "1",
    "url": "1.jpg",
    "topic": "越人歌",
    "description": "今夕何夕兮，搴舟中流。今日何日兮，得与王子同舟。蒙羞被好兮，不訾诟耻王子。山有木兮木有枝，心悦君兮君不知。"
  },
  {
    "id": "2",
    "url": "2.jpg",
    "topic": "子衿-诗经",
    "description": "青青子衿，悠悠我心。纵我不往，子宁不嗣音？青青子佩，悠悠我思。纵我不往，子宁不来？挑兮达兮，在城阙兮。一日不见，如三月兮。"
  },
  {
    "id": "3",
    "url": "3.jpg",
    "topic": "卜算子-李之仪",
    "description": "我住长江头，君住长江尾；日日思君不见君，共饮长江水。此水几时休？此恨何时已？只愿君心似我心，定不负相思意。"
  },
  {
    "id": "4",
    "url": "4.jpg",
    "topic": "长相思·其一-李白",
    "description": "长相思，在长安。络纬秋啼金井阑，微霜凄凄簟色寒。孤灯不明思欲绝，卷帷望月空长叹。美人如花隔云端！上有青冥之长天，下有渌水之波澜。天长路远魂飞苦，梦魂不到关山难。长相思，摧心肝！"
  },
  {
    "id": "5",
    "url": "5.jpg",
    "topic": "秋风词-李白",
    "description": "秋风清，秋月明,落叶聚还散,寒鸦栖复惊。相亲相见知何日，此时此夜难为情；入我相思门，知我相思苦，长相思兮长相忆，短相思兮无穷极，早知如此绊人心，何如当初莫相识。"
  },
  {
    "id": "6",
    "url": "6.jpg",
    "topic": "折桂令·春情-徐再思",
    "description": "平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝，空一缕馀香在此，盼千金游子何之。证候来时，正是何时？灯半昏时，月半明时。"
  },
  {
    "id": "7",
    "url": "7.jpg",
    "topic": "鹧鸪天-晏几道",
    "description": "彩袖殷勤捧玉钟。当年拚却醉颜红。舞低杨柳楼心月，歌尽桃花扇影风。从别后，忆相逢。几回魂梦与君同。今宵剩把银红照，犹恐相逢是梦中。"
  }
];

module.exports = {
  formatTime: formatTime,
  data: data,
  url: url,
  IMAGEURL: IMAGEURL
}
