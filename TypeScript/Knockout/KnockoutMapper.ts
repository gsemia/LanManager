/// <reference path="../Scripts/typings/requirejs/require.d.ts"/>

import $ = require("Libraries/jquery");
import ko = require("Libraries/knockout");
import IRunnable = require("Base/IRunnable");

var $: JQueryStatic = $;

export = KnockoutMapper;

class KnockoutMapper implements IRunnable {
    public run() {
        KnockoutMapper.apply();
    }

    static apply() {
        $('.knockout').each((index, element) => {
            $(element).removeClass('knockout');
            var koFile = $(element).data('ko');
            if (koFile.length > 0) {
                try {
                    require(['Knockout/' + koFile], function (KnockoutClass) {
                        ko.applyBindings(new KnockoutClass(), element);
                    });
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
}