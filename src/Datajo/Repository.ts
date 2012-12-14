/// <reference path="Infrastructure/jquery.d.ts" />

class Repository {
    public findNotConfiguredElements(): Element[] {
        var result = new Element[];
        $('[data-jo]').each((i, item) => {
            if ((<any>item).datajo === undefined) {
                result.push(item);
            }
        });
        return result;
    };
};