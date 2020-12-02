function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm37618046', 'https://www.nicovideo.jp/watch/sm37654300', 'https://www.nicovideo.jp/watch/sm37670651', 'https://www.nicovideo.jp/watch/sm37654300', 'https://www.nicovideo.jp/watch/sm37654220', 'https://www.nicovideo.jp/watch/sm37652409', 'https://www.nicovideo.jp/watch/sm37634035', 'https://www.nicovideo.jp/watch/sm37650161', 'https://www.nicovideo.jp/watch/sm37685765', 'https://www.nicovideo.jp/watch/sm37651730'];

  var videoTitles = ['野獣先輩白玉みかん説', '【AIれい】れいくんでオナろう', 'みかんの天使しゅぎょう【プリパラ】', '【AIれい】れいくんでオナろう', '【Aviutl】3分でGB素材作ってみた', '【視聴回数\u300077回】キラっとエモ感のプリチャン☆アイドル', 'そうなんだ桃山.senpaiBB', '何でもとりあえず負けてくれるANNYUIチャン', 'ガンダムを継ぎはぎして「やったぜ。」朗読', '寿司を食べに行くルナ・マリウス']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/37751776/37751776.77291598.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37732866/37732866.34367775.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37776983/37776983.38864409.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37776983/37776983.38864409.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37350173/37350173.67970690.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37810715/37810715.69319042.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37839089/37839089.41777305.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37839260/37839260.50962668.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37696653/37696653.79243484.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37846961/37846961.38192877.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37880642/37880642.85061059.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37895628/37895628.34438065.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37447121/37447121.41882665.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37893479/37893479.1039170.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37881604/37881604.20918508.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
