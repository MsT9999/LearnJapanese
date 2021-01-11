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

function PlaySound(melody, mode = 1) {
  let path = "gojuon_sound/";
  let snd = new Audio(path + melody + ".mp3");
  if (mode == 1) snd.play();
  else hwhAudioPlay(snd, mode, 1000);
}
function hwhAudioPlay(elem, max, times) {
  elem.play();
  var start = 0;
  elem.addEventListener("ended", function () {
    start++;
    if (start < max) {
      setTimeout(function () {
        elem.play();
      }, times);
    } else {
      elem.pause();
    }
  });
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
function hiraganaConvert(word_id) {
  let word = word_id.substr(0, 1);
  let num = parseInt(word_id.substr(1, 2));
  if (word == "a") {
    return hiraganaArr1[num - 1];
  } else if (word == "b") {
    return hiraganaArr2[num - 1];
  } else if (word == "c") {
    return hiraganaArr3[num - 1];
  }
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function question_rand(qnum = 10) {
  let q = ["a", "b", "c"];
  let n = [romajiA.length, romajiB.length, romajiC.length];
  var arr = [];
  var json = {};
  while (arr.length < qnum) {
    let r = Math.floor(Math.random() * q.length);
    let Q1 = q[r];
    let nr = Math.floor(Math.random() * n[r] + 1);
    let Q2 = nr < 10 ? "0" + nr : nr;
    var k = Q1 + Q2;
    if (!json[k]) {
      json[k] = true;
      arr.push(k);
    }
  }
  // console.log(arr);
  return arr;
}
function item_rand(ans) {
  let word = ans.substr(0, 1);
  let q = ["a", "b", "c"];
  let n = [romajiA.length, romajiB.length, romajiC.length];
  var arr = [];
  var json = {};
  arr.push(ans);
  while (arr.length < 4) {
    let r;
    if (word != "c") r = Math.floor(Math.random() * (q.length - 1));
    else r = 2;
    let Q1 = q[r];
    let nr = Math.floor(Math.random() * n[r] + 1);
    let Q2 = nr < 10 ? "0" + nr : nr;
    var k = Q1 + Q2;
    if (!json[k]) {
      json[k] = true;
      arr.push(k);
      //console.log(k);
    }
  }
  shuffle(arr);
  //console.log(arr);
  return arr;
}
function bar(correct, worng, total) {
  let bar_1 = document.getElementById("correct");
  let bar_2 = document.getElementById("wrong");
  bar_1.style.width = (100 * correct) / total + "%";
  bar_2.style.width = (100 * worng) / total + "%";
}
function next_question(Qarr) {
  bar(c, w, t);
  let question = document.getElementById("question");
  if (count == t) {
    question.innerHTML = "得分:" + (100 * c) / t;
    reTest();
    return "";
  }
  question.innerHTML = count + 1 + '<br><img src="test/Speaker.png"  style="width: 30%"/>';
  PlaySound(Qarr[count], 2);
  //console.log(Qarr[count]);
  item = item_rand(Qarr[count]);
  for (let i = 0; i < item.length; i++) {
    let text = hiraganaConvert(item[i]);
    document.getElementById("item" + (i + 1)).innerHTML = text;
  }
}

let count = 0;
let item;
let c = 0;
let w = 0;
let t = 10;
let q;
function reTest() {
  document.getElementById("item").style.visibility = "visible";
  document.getElementById("item1").style.visibility = "hidden";
  document.getElementById("item2").style.visibility = "hidden";
  document.getElementById("item3").style.visibility = "hidden";
  document.getElementById("item4").style.visibility = "hidden";
  let e = document.getElementById("Qnum");
  let strUser = e.options[e.selectedIndex].value;
  console.log("number=", strUser);
  t = strUser;
  c = 0;
  w = 0;
  q = question_rand(strUser);
  count = 0;
}
function first(Qarr) {
  document.getElementById("item").style.visibility = "hidden";
  document.getElementById("item1").style.visibility = "visible";
  document.getElementById("item2").style.visibility = "visible";
  document.getElementById("item3").style.visibility = "visible";
  document.getElementById("item4").style.visibility = "visible";
  next_question(Qarr);
}
function start() {
  q = question_rand(10);
  $("#setting").click(function () {
    reTest();
  });
  $("#question").click(function () {
    PlaySound(q[count]);
  });
  $("#item").click(function () {
    first(q);
  });
  $("#item1").click(function () {
    if (item[0] == q[count]) c++;
    else w++;
    count++;
    next_question(q);
  });
  $("#item2").click(function () {
    if (item[1] == q[count]) c++;
    else w++;
    count++;
    next_question(q);
  });
  $("#item3").click(function () {
    if (item[2] == q[count]) c++;
    else w++;
    count++;
    next_question(q);
  });
  $("#item4").click(function () {
    if (item[3] == q[count]) c++;
    else w++;
    count++;
    next_question(q);
  });
}
window.addEventListener("load", start, false);
