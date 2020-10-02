function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm37455495.L', 'https://www.nicovideo.jp/watch/sm37467716.L', 'https://www.nicovideo.jp/watch/sm37492462.L', 'https://www.nicovideo.jp/watch/sm37508651.L', 'https://www.nicovideo.jp/watch/sm37495086.L', 'https://www.nicovideo.jp/watch/sm37538129.L', 'https://www.nicovideo.jp/watch/sm37549899.L', 'https://www.nicovideo.jp/watch/sm37562252.L', 'https://www.nicovideo.jp/watch/sm37560112.L', 'https://www.nicovideo.jp/watch/sm37571506.L', 'https://www.nicovideo.jp/watch/sm37567830.L', 'https://www.nicovideo.jp/watch/sm37515537 .L', 'https://www.nicovideo.jp/watch/sm37495950.L', 'https://www.nicovideo.jp/watch/sm37578331.L', 'https://www.nicovideo.jp/watch/sm37589700'];

  var videoTitles = ['ウェディング拓也', 'ぢゆしそとルナ・マリウス', 'ゲイ探偵タドコロナン（前編）', '女児と見る遭難だ桃山', 'えもちゃん\u3000ドンチャカ♪', '第一回ごちマニ合作単品', '覚醒UDK姉貴・暴走HNS姉貴GB＋使用例', '邪淫ディビジュアル・じゅるじゅる', '赤城あんな先輩BB.&ruby(セレブリティー){Celebrity}', '汚い海の水を吹き出すキラッCHU GB', 'お久しﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞブリ大根ですわ', 'アクシィドリーミー', "Skull 'n' Bones☆.ｍｐ４", '【Capsule】Look to the StarrySky', '【名誉会長応援歌】あなたがいなければSGIもない']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/37455495/37455495.13910784.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37467716/37467716.46053448.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37492462/37492462.35117724.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37508651/37508651.17195986.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37495086/37495086.37799041.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37538129/37538129.50831619.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37549899/37549899.55239562.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37562252/37562252.47302141.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37560112/37560112.43772079.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37571506/37571506.83195901.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37567830/37567830.32523588.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37515537/37515537.28261994.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37495950/37495950.33233140.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37578331/37578331.67300771.L', 'https://nicovideo.cdn.nimg.jp/thumbnails/37589700/37589700.45229016.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
