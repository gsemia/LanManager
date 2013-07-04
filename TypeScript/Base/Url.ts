
export = Url;

class Url {
    public baseAddress: string;
    public path: string;
    public domain: string;

    constructor(public address: string) {
        this.baseAddress = address.indexOf('#') > -1 ?
            address.substring(0, address.indexOf('#')) :
            address;

        var result = address.match(/^http(s?):\/\/[^\/]+\//g);
        if (result.length != 1)
            throw 'Address cannot be parsed: ' + address;

        this.domain = result.shift();

        result = address.match(/.+\//g);
        this.path = result.shift();
    }

    public contains(substring: string): bool {
        return this.address.indexOf(substring) > -1;
    }
    
    public resolveAddress(input: string): string {
        if (input.length == 0)
            return this.baseAddress;

        if (input.charAt(0) == '#')
            return this.baseAddress + input;

        if (input.charAt(0) == '/')
            return this.domain + input.substring(1);

        if (input.substring(0, 2) == './')
            return this.path + input.substring(2);

        if (input.substring(0, 3) == '../') {
            var result = input.match(/\.\.\//g);
            var cnt = result.length;
            for (var i = this.baseAddress.length; i > 8; --i) {
                if (this.baseAddress.charAt(i) == '/' && cnt-- == 0)
                    return this.baseAddress.substring(0, i + 1) + input.substring(result.length * 3);
            }
            throw 'Address could not be resolved: ' + this.baseAddress + ' => ' + input;
        }

        return this.path + input;
    }
}