// ************************* フローティング *************************
$(function (){
    $('#goTop').hide(); //最初は隠しておく。CSSで隠してもオッケー
        $(window).on("scroll", function () {
        let topBtn = $('#goTop'); // ボタンを指定
        if( $(this).scrollTop() < $(".f_top").offset().top ){//スクロールした高さが０から1000pxまでの高さ
        topBtn.fadeOut();
        }else{
        if($(this).scrollTop() < $(".f_last").offset().top){//スクロールした高さが０から.s12までの高さ
        topBtn.fadeIn();
        }else{
        topBtn.fadeOut();
        }
        }
    });
});

// ************************* .objの付与されている要素はスクロールして画面下から1/5より上に要素が入ったらactiveとanimeクラスが付与される *************************
$(window).on('scroll', function () {
    //スクロールによる要素の位置
    //アニメーション表示用
    let elem = $('.obj') //このクラスのついた要素を監視
    let isAnimate = 'active anime'
    elem.each(function () {
        let elemOffset = $(this).offset().top
        let scrollPos = $(window).scrollTop()
        let wh = $(window).height()
        const start = elemOffset - wh + (wh / 5)
        const end = elemOffset + wh
        if (scrollPos > start && scrollPos < end) {
            $(this).addClass(isAnimate)
        }
        else if ((scrollPos < start + wh || scrollPos > end + wh)) {
            $(this).removeClass(isAnimate)
        }
    })

})

