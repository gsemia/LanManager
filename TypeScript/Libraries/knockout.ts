/// <reference path="../Scripts/typings/knockout/knockout.d.ts"/>
/// <amd-dependency path="Scripts/knockout-2.2.1.debug"/>

// Workaround until next knockout version
declare var arguments: any[];
var ko: KnockoutStatic = arguments[2];
window['ko'] = ko;

export = ko;