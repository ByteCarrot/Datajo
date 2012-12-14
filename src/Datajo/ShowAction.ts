/// <reference path="Action.ts" />

class ShowAction extends Action {
    constructor(sender: Element, data: any) {
        super('show', sender, data);
        this.duration = data.duration;
        this.easing = data.easing;
    }
    duration: number;
    easing: string;
};