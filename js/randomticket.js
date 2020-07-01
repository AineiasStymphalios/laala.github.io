function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ["https://www.nicovideo.jp/watch/sm37035370", "https://www.nicovideo.jp/watch/sm36977144", "https://www.nicovideo.jp/watch/sm36839060", "https://www.nicovideo.jp/watch/sm37058268", "https://www.nicovideo.jp/watch/sm36978552", "https://www.nicovideo.jp/watch/sm37068214", "https://www.nicovideo.jp/watch/sm37082113", "https://www.nicovideo.jp/watch/sm37010279", "https://www.nicovideo.jp/watch/sm36968710", "https://www.nicovideo.jp/watch/sm37006364", "https://www.nicovideo.jp/watch/sm37095288", "https://www.nicovideo.jp/watch/sm36734673", "https://www.nicovideo.jp/watch/sm36907465", "https://www.nicovideo.jp/watch/sm37049839", "https://www.nicovideo.jp/watch/sm36919372", "https://www.nicovideo.jp/watch/sm36953815"];

  var videoTitles = ["金ペチまいらBB", "そうなんだ桃山BB+使用例", "おしりパンパンするメルパン.BB", "色々なインテル長友先輩BB集.blend", "リゼ×シャロ式 2D音madの作り方", "レモネードを作るRUさん.mp4", "桃山", "ガァラプンプンプンプンプンプンプンプンプーン！", "ﾌｧﾗﾗﾏｲｸﾓ…", "野獣先輩ガァララ・ス・リープ説", "緑川さら先輩BB.// kawaii kiri", "まりあRB+.kawaii", "キラッと奴隷オークションやってみた！", "エモいオークションやってみた！", "レディー・オークション！.mp37.5", "ドキドキ！わくわく！ジュエル奴隷オーディション開幕だもん！"]

  var thumbLinks = ["https://nicovideo.cdn.nimg.jp/thumbnails/37035370/37035370.79803465.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36977144/36977144.38858969.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36839060/36839060.41176200.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37058268/37058268.14000473.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36978552/36978552.53622545.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37068214/37068214.53502379.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37082113/37082113.4083186.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37010279/37010279.29617323.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36968710/36968710.6250557.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37006364/37006364.61178228.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37095288/37095288.65996625.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36734673/36734673.16351639.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36907465/36907465.98874789.L", "https://nicovideo.cdn.nimg.jp/thumbnails/37049839/37049839.25658401.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36919372/36919372.52204549.L", "https://nicovideo.cdn.nimg.jp/thumbnails/36953815/36953815.24673555.L"];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
