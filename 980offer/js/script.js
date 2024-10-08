var id = [];

$(function() {
  $(document).ready(function() {
    (function($) {
      var c = function() {
        this.initialize();
      };
      c.prototype = {
        initialize: function() {
          history.replaceState("beforeunload", null, null);
          history.pushState(null, null, null);
          // popstate イベントにリスナーを追加
          window.addEventListener("popstate", this.popstate);
        },
        popstate: function(event) {
          if (event.state === "beforeunload") {
            viewBackGuide();
          }
        },
      };
      new c();
    })($);
  });

  // ポップアップ領域をクリックされた場合、ポップアップを閉じる
  $("#backGuide .close").on("click", function() {
    $("#backGuide").hide();
    // 戻るボタンを連打された場合のための対策
    id.forEach(function(idx) {
      // インターバルを全てクリア
      clearInterval(idx);
    });
  });

  function viewBackGuide() {
    // 戻るボタン2回以上押下されたときの対策
    history.pushState(null, null, null);
    $('#backGuide').show();
  }
});


