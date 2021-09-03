function randomtext() { //ランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm39058282',
'https://www.nicovideo.jp/watch/sm38663243',
'https://www.nicovideo.jp/watch/sm39185979',
'https://www.nicovideo.jp/watch/sm39144220',
'https://www.nicovideo.jp/watch/sm37860598',
'https://www.nicovideo.jp/watch/sm39234352',
'https://www.nicovideo.jp/watch/sm39189721',
'https://www.nicovideo.jp/watch/sm39237692',
'https://www.nicovideo.jp/watch/sm39215103',
'https://www.nicovideo.jp/watch/sm39209817',
'https://www.nicovideo.jp/watch/sm39205787',
'https://www.nicovideo.jp/watch/sm39217274',
'https://www.nicovideo.jp/watch/sm39072296',
'https://www.nicovideo.jp/watch/sm39163306',
'https://www.nicovideo.jp/watch/sm39266136',
'https://www.nicovideo.jp/watch/sm39247314',
'https://www.nicovideo.jp/watch/sm39236811',
'https://www.nicovideo.jp/watch/sm39246293',
'https://www.nicovideo.jp/watch/sm39085187',
'https://www.nicovideo.jp/watch/sm39014796'];

  var videoTitles = ['だいあ「バグってるんだもん」.GB',
'アドパラ走るらぁらGB+α',
'かのぺろBB',
'糸電のダンス',
'これはもしかして…追加できるんですか！？',
'カルトレイン',
'サグトレイン',
'うしろにいる先輩',
'夏のホラー淫ク☆リレー企画23日目 『うしろにいる』',
'ダイナモレイン',
'マケマシタービーガール',
'Big Yajjy',
'クソバイタ宣言',
'いいタクヤ',
'サブタイトルでインタビューを答える先輩',
'風呂場が遠い空手部.rar',
'ACCEED入門＋有名本編＋α',
'NO MORE 拓也の射精',
'ゴキブリに遭遇したKNN姉貴.G',
'ワクチン接種する先輩']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/39058282/39058282.63001692.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38663243/38663243.19127836.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39185979/39185979.9912494.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39144220/39144220.34647527.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37860598/37860598.2710634.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39234352/39234352.15288367.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39189721/39189721.23086295.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39237692/39237692.51316196.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39215103/39215103.33363393.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39209817/39209817.62818609.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39205787/39205787.30269042.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39217274/39217274.79724965.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39072296/39072296.80249325.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39163306/39163306.69900931.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39266136/39266136.92976404.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39247314/39247314.14355801.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39236811/39236811.60214213.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39246293/39246293.76365054.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39085187/39085187.68038266.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39014796/39014796.14510153.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
