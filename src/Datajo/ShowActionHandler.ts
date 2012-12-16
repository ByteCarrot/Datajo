/// <reference path="ActionHandler.ts" />
/// <reference path="ShowAction.ts" />
/// <reference path="TargetResolver.ts" />

class ShowActionHandler extends ActionHandler {
    execute(sender: Element, data: any) {
        var action = new ShowAction(sender, data);
        var target = TargetResolver.resolve(action);
        target.show(
            action.duration === undefined ? 200 : action.duration,
            action.easing === undefined ? 'linear' : action.easing);
    }
};