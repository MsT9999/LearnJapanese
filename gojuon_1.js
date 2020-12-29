const hiraganaStr =
  "あ　い　う　え　お　か　き　く　け　こ　さ　し　す　せ　そ　た　ち　つ　て　と　な　に　め　ね　の　は　ひ　ふ　へ　ほ　ま　み　む　め　も　や　ゆ　よ　ら　り　る　れ　ろ　わ　を　ん";
const hiraganaStr2 =
  "が　ぎ　ぐ　げ　ご　ざ　じ　ず　ぜ　ぞ　だ　ぢ　づ　で　ど　ば　び　ぶ　べ　ぼ　ぱ　ぴ　ぷ　ぺ　ぽ";
const katakanaStr =
  "ア　イ　ウ　エ　オ　カ　キ　ク　ケ　コ　サ　シ　ス　セ　ソ　タ　チ　ツ　テ　ト　ナ　ニ　ヌ　ネ　ノ　ハ　ヒ　フ　ヘ　ホ　マ　ミ　ム　メ　モ　ヤ　ユ　ヨ　ラ　リ　ル　レ　ロ　ワ　ヲ　ン";
const katakanaStr2 =
  "ガ　ギ　グ　ゲ　ゴ　ザ　ジ　ズ　ゼ　ゾ　ダ　ヂ　ヅ　デ　ド　バ　ビ　ブ　ベ　ボ　パ　ピ　プ　ペ　ポ";
const hiraganaStr3 =
  "きゃ　きゅ　きょ　しゃ　しゅ　しょ　ちゃ　ちゅ　ちょ　にゃ　にゅ　にょ　ひゃ　ぴゅ　ひょ　みゃ　みゅ　みょ　りゃ　りゅ　りょ　ぎゃ　ぎゅ　ぎょ　じゃ　じゅ　じょ　びゃ　びゅ　びょ　ぴゃ　ぴゅ　ぴょ";
const katakanaStr3 =
  "キャ　キュ　キョ　シャ　シュ　ショ　チャ　チュ　チョ　ニャ　ニュ　ニョ　ヒャ　ピュ　ヒョ　ミャ　ミュ　ミョ　リャ　リュ　リョ　ギャ　ギュ　ギョ　ジャ　ジュ　ジョ　ビャ　ビュ　ビョ　ピャ　ピュ　ピョ";
const romajiAstr =
  "a　i　u　e　o　ka　ki　ku　ke　ko　sa　shi　su　se　so　ta　chi　tsu　te　to　na　ni　me　ne　no　ha　hi　fu　he　ho　ma　mi　mu　me　mo　ya　yu　yo　ra　ri　ru　re　ro　wa　wo　n";
const romajiBstr =
  "ga　gi　gu　ge　go　za　ji　zu　ze　zo　da　ji　zu　de　do　ba　bi　bu　be　bo　pa　pi　pu　pe　po";
const romajiCstr =
  "kya　kyu　kyo　sha　shu　sho　cha　chu　cho　nya　nyu　nyo　hya　hyu　hyo　mya　myu　myo　rya　ryu　ryo　gya　gyu　gyo　ja　ju　jo　bya　byu　byo　pya　pyu　pyo";
const hiraganaArr1 = hiraganaStr.split("　");
const hiraganaArr2 = hiraganaStr2.split("　");
const katakanaArr1 = katakanaStr.split("　");
const katakanaArr2 = katakanaStr2.split("　");
const hiraganaArr3 = hiraganaStr3.split("　");
const katakanaArr3 = katakanaStr3.split("　");
const romajiA = romajiAstr.split("　");
const romajiB = romajiBstr.split("　");
const romajiC = romajiCstr.split("　");
function switchTable(ver) {
  let a_Arr, b_Arr;
  if (ver) {
    a_Arr = hiraganaArr1;
    b_Arr = hiraganaArr2;
    c_Arr = hiraganaArr3;
  } else {
    a_Arr = katakanaArr1;
    b_Arr = katakanaArr2;
    c_Arr = katakanaArr3;
  }

  for (let i = 1; i <= a_Arr.length; i++) {
    let id = i < 10 ? "0" + i : i;
    id = "a" + id;
    document.getElementById(id).innerText = a_Arr[i - 1];
  }
  for (let i = 1; i <= b_Arr.length; i++) {
    let id = i < 10 ? "0" + i : i;
    id = "b" + id;
    document.getElementById(id).innerText = b_Arr[i - 1];
  }
  for (let i = 1; i <= c_Arr.length; i++) {
    let id = i < 10 ? "0" + i : i;
    id = "c" + id;
    document.getElementById(id).innerText = c_Arr[i - 1];
  }
}
function PlaySound(melody) {
  let path = "gojuon_sound/";
  let snd = new Audio(path + melody + ".mp3");
  snd.play();
}
function mouseEnter(tar) {
  document.getElementById(tar).style.background = "pink";
}
function mouseLeave(tar) {
  document.getElementById(tar).style.background = "";
}
function romajiConvert(word_id) {
  let word = word_id.substr(0, 1);
  let num = parseInt(word_id.substr(1, 2));
  if (word == "a") {
    return romajiA[num - 1];
  } else if (word == "b") {
    return romajiB[num - 1];
  } else if (word == "c") {
    return romajiC[num - 1];
  }
}
let mode = false;
function start() {
  $("#swithchBtn").click(function () {
    switchTable(mode);
    mode = !mode;
    this.innerText = mode ? "切換平仮名（ひらがな）" : "切換片仮名（カタカナ）";
  });
  $("td").click(function () {
    if (this.id) {
      let name =this.id;
      let tmp = this.innerText;
      let romaji = romajiConvert(this.id);
      this.innerText = romaji;
      PlaySound(this.id);
      setTimeout(function () {
        document.getElementById(name).innerText = tmp;
      }, 1000);
    }
  });
  $("td").mouseenter(function () {
    if (this.id) mouseEnter(this.id);
  });
  $("td").mouseleave(function () {
    if (this.id) mouseLeave(this.id);
  });
}
window.addEventListener("load", start, false);
