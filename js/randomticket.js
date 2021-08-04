function randomtext() { //ランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm38938443',
'https://www.nicovideo.jp/watch/sm36820456',
'https://www.nicovideo.jp/watch/sm39096793',
'https://www.nicovideo.jp/watch/sm39093115',
'https://www.nicovideo.jp/watch/sm39000625',
'https://www.nicovideo.jp/watch/sm39027731',
'https://www.nicovideo.jp/watch/sm38942668',
'https://www.nicovideo.jp/watch/sm39034483',
'https://www.nicovideo.jp/watch/sm38856921',
'https://www.nicovideo.jp/watch/sm39030917 ',
'https://www.nicovideo.jp/watch/sm39054319',
'https://www.nicovideo.jp/watch/sm39020504',
'https://www.nicovideo.jp/watch/sm39079509',
'https://www.nicovideo.jp/watch/sm39089170',
'https://www.nicovideo.jp/watch/sm39095314',
'https://www.nicovideo.jp/watch/sm39111078',
'https://www.nicovideo.jp/watch/sm39039911',
'https://www.nicovideo.jp/watch/sm39126891'];

  var videoTitles = ['虹ノ咲だいあ、歌いますGB＋使用例',
'ホモ鮫千年嵐.territory',
'マスコットの偉い先輩GB.HMV',
'プリパラ -闘神アイドルグランプリ編-  第0回:プロローグ',
'願いごとをするルナ・マリウス',
'残酷な素人声優☆.evangelion',
'ザーメンダンス　【ゼERO】',
'NYN姉貴が出る音mad☆',
'肉体派大蛇丸GB',
'違法アップロードインタビュー先輩',
'夏休み淫夢自由研究合作【淫夢20周年合作】',
'ホモの睡眠薬即効性ランキング ～真夏の夜の淫夢20周年記念～',
'語録を言うとシバかれるゲームをする空手部',
'迫真不祥事部・出演シーンカットの裏技',
'古典文学「うるとらの者」　投稿者:拓也太夫',
'電話糸電話',
'ライオンに射精管理させられる富士サファリパークのHaunted Dance',
'シドニー・マンソン_ボイスパック']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/38938443/38938443.68196196.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/36820456/36820456.97201420.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39096793/39096793.44257907.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39093115/39093115.23247874.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39000625/39000625.20747440.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39027731/39027731.80200793.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38942668/38942668.65323846.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39034483/39034483.39258888.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38856921/38856921.81603356.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39030917/39030917.23509933.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39054319/39054319.70875437.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39020504/39020504.29806678.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39079509/39079509.45471462.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39089170/39089170.39692924.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39095314/39095314.65806796.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39111078/39111078.90423675.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39039911/39039911.41338812.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/39126891/39126891.54617112.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
