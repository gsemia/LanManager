
import $ = require("Libraries/jquery");

export = UrlManager;

class UrlManager {
    private baseUrl: string;

    constructor() {
        this.baseUrl = $('#requirejs').data('baseurl');
        if (this.baseUrl.length > 0 && this.baseUrl.charAt(this.baseUrl.length - 1) == '/')
            this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
    }

    public getSiteAddress(address: string): string {
        if (address.charAt(0) == '/')
            address = address.substring(1);
        return this.baseUrl + '/' + address;
    }


    public get<T>(address: string, success: (data: T) => void , data?: {}) {
        $.get(this.getSiteAddress(address),
            data || {},
            success,
            'json'
        );
    }

    public post<T>(address: string, data: {}, success?: (data: T) => void ) {
        $.post(this.getSiteAddress(address),
            data,
            success || () => { }
        );
    }
}