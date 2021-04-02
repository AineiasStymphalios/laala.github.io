function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm38331110'
'https://www.nicovideo.jp/watch/sm38336609'
'https://www.nicovideo.jp/watch/sm38306625'
'https://www.nicovideo.jp/watch/sm38468289'
'https://www.nicovideo.jp/watch/sm38473732'
'https://www.nicovideo.jp/watch/sm38462934'
'https://www.nicovideo.jp/watch/sm38072637'
'https://www.nicovideo.jp/watch/sm38348915'
'https://www.nicovideo.jp/watch/sm38440125'
'https://www.nicovideo.jp/watch/sm38404602'
'https://www.nicovideo.jp/watch/sm38102118'
'https://www.nicovideo.jp/watch/sm38248470'
'https://www.nicovideo.jp/watch/sm38385118'];

  var videoTitles = ['黒川すず先輩BB.kakkoii'
'キンタマにハッカ油を塗られたレオナ・ウェストのかわいい！！グルメレース！！'
'Luv the lUlUNatic??'
'ちゃっすちゃっす！！'
'[アイドルタイムプリパラ] インストアレンジメドレー「DREAM TIME MEMORIES」'
'野獣先輩ファルル説'
'IKISUGI「夜にオォ～ン！」'
'Big Oon'
'テレキャスギオォ～ン！'
'干し柿食って下痢になる先輩'
'Friday Night Fuckin' - B.I.L.F'
'100ぴったりぐライファンファーレ.LcDl'
'Geryt Ben Timpol']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/38331110/38331110.13174240.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38336609/38336609.22374611.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38306625/38306625.30435811.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38468289/38468289.35581045.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38473732/38473732.65233680.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38462934/38462934.19112619.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38072637/38072637.85273683.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38348915/38348915.24335118.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38440125/38440125.43157254.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38404602/38404602.34881112.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38102118/38102118.54532218.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38248470/38248470.12114508.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38385118/38385118.42676749.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
