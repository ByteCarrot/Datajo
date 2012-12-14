/// <reference path="ActionHandler.ts" />
/// <reference path="TargetResolver.ts" />
/// <reference path="HideAction.ts" />

class HideActionHandler extends ActionHandler {
    execute(sender: Element, data: any) {
        var action = new HideAction(sender, data);
        var target = TargetResolver.resolve(action);
        target.hide(
            action.duration === undefined ? 200 : action.duration,
            action.easing === undefined ? 'linear' : action.easing);
    }
};