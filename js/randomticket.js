function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm37289195', 'https://www.nicovideo.jp/watch/sm37303925', 'https://www.nicovideo.jp/watch/sm37326215', 'https://www.nicovideo.jp/watch/sm37330192', 'https://www.nicovideo.jp/watch/sm37150778', 'https://www.nicovideo.jp/watch/sm37300215', 'https://www.nicovideo.jp/watch/sm37342852', 'https://www.nicovideo.jp/watch/sm37344186', 'https://www.nicovideo.jp/watch/sm37385141', 'https://www.nicovideo.jp/watch/sm37363901', 'https://www.nicovideo.jp/watch/sm37393420', 'https://www.nicovideo.jp/watch/sm37369172', 'https://www.nicovideo.jp/watch/sm37441823'];

  var videoTitles = ['おつかいに行く先輩.asi', '泣くHNSGB', 'BME合作3 "TOKYO PAIN OLYMPICS 2020"', 'エージェントDKSG.torrent', 'キナコに地球（テラ）に呼ばれたルナ・マリウス', '犬の真似をする読モJCBB、他', 'きょうもいい料理☆.nhk', '石川まりなの頭がカービィのBGMに合わせて爆発したようです。', '紫藤める先輩GB.merumeru', 'ケツカラ♪ホット＊ケーキ!!!', 'こっちに向かって走るSIKBB', 'ソルルGB', '【合作】2020総統閣下祭 ~ 閣下の遺産【中華組】']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/37289195/37289195.86652900.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37303925/37303925.71574433.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37326215/37326215.6697995.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37330192/37330192.35238282.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37150778/37150778.95060492.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37300215/37300215.89188705.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37342852/37342852.29861780.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37344186/37344186.53942722.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37385141/37385141.51427177.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37363901/37363901.17335070.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37393420/37393420.74844097.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37369172/37369172.14173272.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37441823/37441823.92943604.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
