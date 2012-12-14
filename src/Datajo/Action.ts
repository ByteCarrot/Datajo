/// <reference path="Exception.ts" />

class Action {
    constructor(action: string, sender: Element, data: any) {
        if (data.action !== action) {
            throw new Exception("'" + action + "' action expected");
        }
        if (data.target === undefined || data.target.trim() === '') {
            throw new Exception('Target of the action has not been defined');
        }
        this.sender = sender;
        this.action = data.action;
        this.target = data.target;
    }
    sender: Element;
    action: string;
    target: string;
};