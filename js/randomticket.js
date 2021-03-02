function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm38222547', 'https://www.nicovideo.jp/watch/sm38214564', 'https://www.nicovideo.jp/watch/sm38226749', 'https://www.nicovideo.jp/watch/sm38221881', 'https://www.nicovideo.jp/watch/sm38229915', 'https://www.nicovideo.jp/watch/sm38224167', 'https://www.nicovideo.jp/watch/sm38101069', 'https://www.nicovideo.jp/watch/sm38239144', 'https://www.nicovideo.jp/watch/sm38177688', 'https://www.nicovideo.jp/watch/sm38087647', 'https://www.nicovideo.jp/watch/sm38111753', 'https://www.nicovideo.jp/watch/sm38253099', 'https://www.nicovideo.jp/watch/sm38270468', 'https://www.nicovideo.jp/watch/sm38209646', 'https://www.nicovideo.jp/watch/sm38269362', 'https://www.nicovideo.jp/watch/sm38340644', 'https://www.nicovideo.jp/watch/sm38327627','https://www.nicovideo.jp/watch/sm38281269','https://www.nicovideo.jp/watch/sm38318159'];

  var videoTitles = ['画面をタッチしてUDK姉貴を助けてください！', '【バトル淫夢】大物YouTubeｒと戦う先輩', '114514色淫花蝶\u3000～ 赤豚 and 白豚', '世代交代する先輩', 'HOI HOI ホルカー', 'しゃみ子でござんす', 'ヤバい合作', 'ブームが始まってすぐ終わる～狂気の2軍淫夢', '合気ッ！ツインテールズ', 'インディビジュアル・ジュエル先輩', '対リランペル戦', '迫真zoom部・性の裏技', 'テレキャスターゲイボーイ', '証拠隠滅をはかる先輩', 'キンタマにハッカ油を塗られた野獣先輩のグルメレース', 'CHA-LA AHE-CHA-LA', 'キンタマにハッカ油を塗られた恋愛サーキュレーションのグルメレース','今日はいい天気♡','お太いのがお好き♡.musical']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/38222547/38222547.31266109.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38214564/38214564.59905409.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38226749/38226749.55603905.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38221881/38221881.17444146.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38229915/38229915.56401162.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38224167/38224167.56282210.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38101069/38101069.786886.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38239144/38239144.27621568.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38177688/38177688.83808155.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38087647/38087647.65036421.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38111753/38111753.32036090.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38253099/38253099.82247225.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38270468/38270468.19341123.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38209646/38209646.89517629.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38269362/38269362.7004367.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38281269/38281269.54268870.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38318159/38318159.22840250.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38340644/38340644.26547006.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38327627/38327627.44692913.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38281269/38281269.54268870.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38318159/38318159.22840250.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
