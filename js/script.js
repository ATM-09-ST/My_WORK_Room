$(function () {

  //ページ内スクロール
  let navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



function fadeAnime() {
  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
    let elemPos = $(this).offset().top + 10;//要素より、10px上の
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



function BgFadeAnime() {

  // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top + 10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    } else {
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  });

  // 文字列を囲う子要素
  $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top + 10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    } else {
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



function delayScrollAnime() {
  let time = 0.3;//遅延時間を増やす秒数の値
  let value = time;
  $('.delayScroll').each(function () {
    let parent = this;          //親要素を取得
    let elemPos = $(this).offset().top;//要素の位置まで来たら
    let scroll = $(window).scrollTop();//スクロール値を取得
    let windowHeight = $(window).height();//画面の高さを取得
    let childs = $(this).children();  //子要素を取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {

        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる

          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if ((childs.length - 1) == index) {
            $(parent).removeClass("play");
          }
        }
      })
    } else {
      $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
    }
  })
}

$(window).scroll(function () {
  delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述



function TextTypingAnime() {
  $('.TextTyping').each(function () {
    let elemPos = $(this).offset().top + 10;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        let time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  let element = $(".TextTyping");
  element.each(function () {
    let text = $(this).html();
    let textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



function moveAnimation() {

  //スクロールしたらランダムに出現 
  let randomElm2 = $(".randomScroll");//親要素取得
  let randomElm2Child = $(randomElm2).children(); //親の子要素を取得
  randomScrollAnime();
  function randomScrollAnime() {
    let elemPos = $(".randomScroll").offset().top + 10;//要素より、10px上まで来たら
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if (randomElm2Child.length > 0) { //配列数以上であれば処理をおこなう
        let rnd = Math.floor(Math.random() * randomElm2Child.length);//配列数から表示する数値をランダムで取得
        let moveData = "fadeUp";//アニメーション名＝CSSのクラス名を指定
        if (animeFlag) {//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにする
          animeFlag = false;//アニメーション処理が終わるまで一時的にfalseにする
          $(randomElm2Child[rnd]).addClass(moveData);//アニメーションのクラスを追加
          setTimeout(function () {
            animeFlag = true;//次の処理をおこなうためにtrueに変更
            randomScrollAnime();//自身の処理を繰り返す
          }, 300); //0.5秒間隔で。※ランダムのスピード調整はこの数字を変更させる
          randomElm2Child.splice(rnd, 1);//アニメーション追加となった要素を配列から削除
        }
      }

    } else {
      animeFlag = true;
    }

  }
}

let animeFlag = true;//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにするための定義

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  moveAnimation();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
