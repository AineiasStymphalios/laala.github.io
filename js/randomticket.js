function randomtext() { //ランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm38575812',
'https://www.nicovideo.jp/watch/sm38617411',
'https://www.nicovideo.jp/watch/sm38316931',
'https://www.nicovideo.jp/watch/sm37008653',
'https://www.nicovideo.jp/watch/sm38345101',
'https://www.nicovideo.jp/watch/sm38513363',
'https://www.nicovideo.jp/watch/sm38525718',
'https://www.nicovideo.jp/watch/sm38576916',
'https://www.nicovideo.jp/watch/sm38596164',
'https://www.nicovideo.jp/watch/sm38628953',
'https://www.nicovideo.jp/watch/sm38480142',
'https://www.nicovideo.jp/watch/sm38638975',
'https://www.nicovideo.jp/watch/sm38636228',
'https://www.nicovideo.jp/watch/sm38556901',
'https://www.nicovideo.jp/watch/sm37141880'];

  var videoTitles = ['postlude BB劇場版アイドルタイムプリパラ',
'だいあと見る8画面',
'priparaのオーディションを受ける先輩',
'FF外から失礼するゾ～(囲碁)',
'呂布KRMと戦うANNYUI姉貴.fsd',
'お昼ごはんがノドに詰まった、げるっふとぉーたぁ姉貴',
'演技力に欠ける',
'リズム天六　オークション会見',
'ネコがだんごつくる歌',
'単品',
'テレショップたくや',
'【合体】アメゲイ動画物語.wav',
'ナースの田所',
'AIが作ったほのぼの神社アレンジ.mp1',
'イスカリオテのオークション男']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/38575812/38575812.86025750.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38617411/38617411.56590931.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38316931/38316931.70794506.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37008653/37008653.27684163.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38345101/38345101.67801414.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38513363/38513363.13294894.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38525718/38525718.32027520.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38576916/38576916.78119443.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38596164/38596164.64348511.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38628953/38628953.62940594.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38480142/38480142.14934856.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38638975/38638975.2522689.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38636228/38636228.64229065.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38556901/38556901.61194767.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37141880/37141880.994978.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
