/// <reference path="Infrastructure/jquery.d.ts" />
/// <reference path="QueryString.ts" />
/// <reference path="Underscore.ts" />

class ErrorHandler {
    private debugMode: bool;
    constructor() {
        this.debugMode = QueryString.find('datajo') === 'debug';
    }
    private prepareMessage(event: any, xhr: any, options: any, error: any): string {
        return '\n\n--- Datajo Ajax Error --- \n',
            'Status:      ' + xhr.status + '\n' +
            'Status Text: ' + xhr.statusText + '\n' +
            'Response Text:\n' + xhr.responseText + '\n' +
            '------------------------';
    }
    private X(event: any, xhr: any, options: any, error: any) {
        var contentType:string = xhr.getResponseHeader('Content-Type');
        var htmlContent = _.isString(contentType) && contentType.toLowerCase().indexOf('text/html') >= 0;

        var body = $('body');
        body.prepend(
            '<div id="datajo-debug" style="font-size:.9em;padding:0px;z-index:10000;overflow:auto;position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#f00;color:#fff">' +
                '<table style="margin:0px;padding:0px;width:100%;height:100%;border:0px;">' + 
                    '<tr>' + 
                        '<td style="height:1%; padding:10px 20px 20px 20px;">' + 
                            '<button style="float:right;font-weight:bold;color:#fff;background-color:#f00;border:0px;">x</button>' +
                            '<h3 style="margin:0px;padding:0px;">Datajo Ajax Error</h3>' + 
                            'Status: ' + xhr.status + '<br />' +
                            'Status Text: ' + xhr.statusText + '<br>' +
                            'Headers: ' + 
                            '<div style="margin-left:30px;">' +
                                (<string>xhr.getAllResponseHeaders()).replace(/\n/g, '<br />') +
                            '</div>' +
                        '</td>' + 
                    '</tr>' + 
                    '<tr>' + 
                        '<td>' + 
                            '<iframe style="width:100%;height:100%;border:0px;"></iframe>' + 
                        '</td>' + 
                    '</tr>' + 
                '</table>' +
            '</div>');
        var viewer = $('#datajo-debug');
        var button = viewer.find('button').click(() => {
            viewer.replaceWith('');
        });
        var iframe = viewer.find('iframe').get(0).contentDocument;
        iframe.open();
        iframe.write(xhr.responseText);
        iframe.close();
    }
    public onAjaxError(event: any, xhr: any, options: any, error: any) : any {
        var message = this.prepareMessage(event, xhr, options, error);
        if (this.debugMode) {
            this.X(event, xhr, options, error);
        }
        if (console === undefined && event.type !== 'ajaxError') {
            return;
        }
        console.error(message);
    }
}