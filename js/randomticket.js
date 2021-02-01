function randomtext() { //広告できなかったやつをランダムに表示
  var videoUrls = ['https://www.nicovideo.jp/watch/sm37887416', 'https://www.nicovideo.jp/watch/sm37903763', 'https://www.nicovideo.jp/watch/sm37953751', 'https://www.nicovideo.jp/watch/sm37894860', 'https://www.nicovideo.jp/watch/sm37897378', 'https://www.nicovideo.jp/watch/sm37942687', 'https://www.nicovideo.jp/watch/sm37953751', 'https://www.nicovideo.jp/watch/sm37950593', 'https://www.nicovideo.jp/watch/sm37947660', 'https://www.nicovideo.jp/watch/sm37962879', 'https://www.nicovideo.jp/watch/sm37983980', 'https://www.nicovideo.jp/watch/sm37965711', 'https://www.nicovideo.jp/watch/sm37995928', 'https://www.nicovideo.jp/watch/sm37981846', 'https://www.nicovideo.jp/watch/sm38000743', 'https://www.nicovideo.jp/watch/sm36684450', 'https://www.nicovideo.jp/watch/sm38006245', 'https://www.nicovideo.jp/watch/sm38051139', 'https://www.nicovideo.jp/watch/sm38067748', 'https://www.nicovideo.jp/watch/sm38066582', 'https://www.nicovideo.jp/watch/sm38096284', 'https://www.nicovideo.jp/watch/sm38083277', 'https://www.nicovideo.jp/watch/sm38053140', 'https://www.nicovideo.jp/watch/sm38049870', 'https://www.nicovideo.jp/watch/sm38100753', 'https://www.nicovideo.jp/watch/sm38130021', 'https://www.nicovideo.jp/watch/sm38158185', 'https://www.nicovideo.jp/watch/sm38163703', 'https://www.nicovideo.jp/watch/sm38168191', 'https://www.nicovideo.jp/watch/sm38130859', 'https://www.nicovideo.jp/watch/sm38099243', 'https://www.nicovideo.jp/watch/sm38184638', 'https://www.nicovideo.jp/watch/sm38183453'];

  var videoTitles = ['ホモビチャンピオン\u3000夏休み！淫夢＆クッキー☆王選手権', 'SUPER IKISO SUPER GIRL', 'オメグミアレアレ', '【合作告知】愛フレンド湯合作', '2021年の材料屋さんについて激論を交わすNYNICG', 'ビルマ／大日本帝国', 'オメグミアレアレ', '禁じられた｢やりますねぇ｣をどうしても言いたい先輩', '野獣先輩呉織あぎり説.Killmebaby', 'mur智将の運転免許.adhd', 'マスクおしゃまBB', 'Merry Merry Ahikiso!.MelPan4', 'おやじ狩りをする先輩.hukushi', '変態糞パレード（映画『ドバブリカ』挿入歌）', '郵便屋さん先輩', '六尺バーに行くＭＵＲ', 'つなふとない', '盗んだバイクで走り出す先輩', '牛と化した先輩', '初めて電車に乗ったNYN姉貴', '愛フレンド湯合作', 'バイオテロを起こすMKMK姉貴', '2020MAD供養', 'ヤッベーマウスマーチ', '【合作】Reiwanna.INC☆Medley', '妹山ダンスGB＋おまけ他', 'p〇rnhubを楽しむ春画要求姉貴+α', 'ピョンギョ', 'おひるねする現ちゃん', 'きせかえだいあヘッド先輩GB.￥11000', '【プリティーシリーズ実況】スライムランCHUー！.1【スライムランチャー】', '下北沢産高級霜降り野牛先輩BB＋使用例', '初めて船に乗ったNYN姉貴']

  var thumbLinks = ['https://nicovideo.cdn.nimg.jp/thumbnails/37887416/37887416.41475695.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37903763/37903763.57410355.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37953751/37953751.13387297.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37894860/37894860.63335733.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37897378/37897378.49391350.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37942687/37942687.68973894.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37953751/37953751.13387297.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37950593/37950593.54388833.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37947660/37947660.32506294.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37962879/37962879.16125982.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37983980/37983980.68448152.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37965711/37965711.59189138.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37995928/37995928.98935641.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/37981846/37981846.94830829.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38000743/38000743.65138582.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/36684450/36684450.19634019.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38006245/38006245.8263260.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38051139/38051139.59307459.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38067748/38067748.74967321.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38066582/38066582.88099096.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38096284/38096284.41206006.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38083277/38083277.39701197.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38053140/38053140.75608214.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38049870/38049870.86709931.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38100753/38100753.73669675.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38130021/38130021.50811765.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38158185/38158185.96938407.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38163703/38163703.72322681.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38168191/38168191.20559217.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38130859/38130859.67480325.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38099243/38099243.15420114.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38184638/38184638.56172280.L',
'https://nicovideo.cdn.nimg.jp/thumbnails/38183453/38183453.10819850.L'];

  var dataIndex = Math.floor(Math.random() * videoUrls.length);

  return '<img src="'+ thumbLinks[dataIndex] + '">' + '<br>' + '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>';
  // return '<a href=\"' + videoUrls[dataIndex] + '">' + videoTitles[dataIndex] + '</a>' + '<b> uiaeggawerg</b>';
  }

document.getElementById("randomticket").innerHTML = randomtext();
