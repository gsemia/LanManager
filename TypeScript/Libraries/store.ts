/// <reference path="../Scripts/typings/storejs/storejs.d.ts"/>
/// <amd-dependency path="Scripts/store.min"/>

// Workaround until next knockout version
declare var arguments: any[];
var store: StoreJSStatic = arguments[2];
window['store'] = store;

export = store;