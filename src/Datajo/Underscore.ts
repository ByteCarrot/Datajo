class _ {
    public static isArray(data: any): bool {
        return Object.prototype.toString.call(data) === '[object Array]';
    }

    public static isString(data: any): bool {
        return toString.call(data) == '[object String]';
    }

    public static normalize(data: string): string {
        return data.trim().toLowerCase();
    }
}