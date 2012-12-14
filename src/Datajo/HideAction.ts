/// <reference path="Action.ts" />

class HideAction extends Action {
    constructor(sender: Element, data: any) {
        super('hide', sender, data);
        this.duration = data.duration;
        this.easing = data.easing;
    }
    duration: number;
    easing: string;
};