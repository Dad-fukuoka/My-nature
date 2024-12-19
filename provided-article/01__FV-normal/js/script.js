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

// ************************* 紙吹雪 *************************
document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("offer");
    let hasTriggered = false; // 一度だけ発動するためのフラグ

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;

                // 画面中央に来ているかどうかを判定
                const isCentered =
                    rect.top >= window.innerHeight / 3 &&
                    rect.bottom <= (window.innerHeight / 3) * 2;

                if (isCentered && !hasTriggered) {
                    // confetti を発動
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                    hasTriggered = true; // 再発動を防ぐ
                }
            }
        });
    }, {
        threshold: 0, // 要素の一部が表示されていれば検知
    });

    observer.observe(target);

    // スクロール時に再評価
    window.addEventListener("scroll", () => {
        const rect = target.getBoundingClientRect();
        const isCentered =
            rect.top >= window.innerHeight / 3 &&
            rect.bottom <= (window.innerHeight / 3) * 2;

        if (isCentered && !hasTriggered) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            hasTriggered = true; // 再発動を防ぐ
        }
    });
});