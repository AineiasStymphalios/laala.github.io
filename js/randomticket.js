function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm37618046', 'https://www.nicovideo.jp/watch/sm37654300', 'https://www.nicovideo.jp/watch/sm37670651', 'https://www.nicovideo.jp/watch/sm37654300', 'https://www.nicovideo.jp/watch/sm37654220', 'https://www.nicovideo.jp/watch/sm37652409', 'https://www.nicovideo.jp/watch/sm37634035', 'https://www.nicovideo.jp/watch/sm37650161', 'https://www.nicovideo.jp/watch/sm37685765', 'https://www.nicovideo.jp/watch/sm37651730'];

  var videoTitles = ['野獣先輩白玉みかん説', '【AIれい】れいくんでオナろう', 'みかんの天使しゅぎょう【プリパラ】', '【AIれい】れいくんでオナろう', '【Aviutl】3分でGB素材作ってみた', '【視聴回数\u300077回】キラっとエモ感のプリチャン☆アイドル', 'そうなんだ桃山.senpaiBB', '何でもとりあえず負けてくれるANNYUIチャン', 'ガンダムを継ぎはぎして「やったぜ。」朗読', '寿司を食べに行くルナ・マリウス']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/37618046/37618046.40351360.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37654300/37654300.82699919.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37670651/37670651.77492365.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37654300/37654300.82699919.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37654220/37654220.46356121.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37652409/37652409.16697511.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37634035/37634035.50950645.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37650161/37650161.32751033.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37685765/37685765.10315275.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37651730/37651730.55945496.L',];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
