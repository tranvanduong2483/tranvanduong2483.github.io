﻿//var hot14EmbedDomain = "https://embed.hot14.vn";
var hot14EmbedDomain = "https://v79.cnnd.vn";
//var hot14EmbedDomain = "https://local.embed.hot14.vn";
$.ajax({
    url: hot14EmbedDomain + "/k14-handler.htm",
    data: {
        m: 'get-list-video',
        pIndex: 1,
        pSize: 3,
    },
    crossDomain: true,
    dataType: 'jsonp',
    type: "POST",
    beforeSend: function () {

    },
    success: function (rs) {
        let arrCss = rs.ExtData.split(",");
        for (var i = 0; i < arrCss.length; i++) {
            let link = document.createElement("link");
            link.href = hot14EmbedDomain + arrCss[i];
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.getElementsByTagName("head")[0].appendChild(link);
        }

        let arrJs = rs.ExSize.split(",");
        for (var i = 0; i < arrJs.length; i++) {
            let flag = false;
            if ((i + 1) == arrJs.length) flag = true;
            $.getScript(hot14EmbedDomain + arrJs[i], function () {
                if (flag) {
                    EmbedVideoHot14.init(rs);
                }
            });
        }
    }
});
