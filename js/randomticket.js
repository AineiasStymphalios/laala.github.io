function randomtext() { //ランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm38812618',
'https://www.nicovideo.jp/watch/sm38895121',
'https://www.nicovideo.jp/watch/sm38858596',
'https://www.nicovideo.jp/watch/sm38858504',
'https://www.nicovideo.jp/watch/sm38858466',
'https://www.nicovideo.jp/watch/sm38846444',
'https://www.nicovideo.jp/watch/sm38828514',
'https://www.nicovideo.jp/watch/sm38843454',
'https://www.nicovideo.jp/watch/sm38833974',
'https://www.nicovideo.jp/watch/sm38859852',
'https://www.nicovideo.jp/watch/sm38865517',
'https://www.nicovideo.jp/watch/sm38868807',
'https://www.nicovideo.jp/watch/sm38871779',
'https://www.nicovideo.jp/watch/sm38883304',
'https://www.nicovideo.jp/watch/sm38878120',
'https://www.nicovideo.jp/watch/sm38908045',
'https://www.nicovideo.jp/watch/sm38870721',
'https://www.nicovideo.jp/watch/sm38910424',
'https://www.nicovideo.jp/watch/sm38930430'];

  var videoTitles = ['K・B・T・I・Tね　ダンス',
'ﾊﾟﾝｺﾞﾊﾝﾒﾝﾙｲ2021【作ってみた】',
'やはりプリ☆チャンは最高',
'りんね先輩GB.jingisukan',
'天羽ジュネ先輩BB.hijirisan♡',
'そうなんだ真中',
'TNOK自動車教習所に行くNYN姉貴',
'めざせ還暦マスター！',
'淫ク☆つまらない合作',
'注文を覚えられないNYN姉貴',
'化　学　基　礎　(　大　嘘　)',
'オナホタルダ',
'ビッグマック先輩BB＋使用例',
'マケルラリアット',
'女子会に参加する野獣先輩',
'売女殺しのクソバイタ',
'大改造☆劇的ビフォーアフター神社.theme',
'一人だけ追い払われるUDK',
'ゴビ砂漠BB']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/38812618/38812618.66035651.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38895121/38895121.62714681.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38858596/38858596.69893138.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38858504/38858504.38970309.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38858466/38858466.28544322.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38846444/38846444.91220545.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38828514/38828514.77540274.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38843454/38843454.90122042.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38833974/38833974.22962941.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38859852/38859852.47826004.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38865517/38865517.21792013.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38868807/38868807.14030281.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38871779/38871779.73600001.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38883304/38883304.7430115.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38878120/38878120.58462223.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38908045/38908045.81468721.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38870721/38870721.75455194.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38910424/38910424.72144077.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38930430/38930430.71407339.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
