/// <reference path="Configuration.ts" />

class ActivityIndicator {
    private showMe: () => void;
    private hideMe: () => void;
    constructor(configuration: Configuration) {
        var selector = configuration.activityIndicator;
        if (selector === undefined || selector.trim() === '') {
            this.showMe = () => { };
            this.hideMe = () => { }
        } else {
            var obj = $(selector);
            obj.hide();
            this.showMe = () => { obj.show(); };
            this.hideMe = () => { obj.hide(); };
        }
    }
    public show() {
        this.showMe();
    }
    public hide() {
        this.hideMe();
    }
}