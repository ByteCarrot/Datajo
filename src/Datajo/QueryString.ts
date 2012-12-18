class QueryString {
    public static find(key: string): string {
        var result = {}, queryString = location.search.substring(1),
        re = /([^&=]+)=([^&]*)/g, m;
        while (m = re.exec(queryString)) {
            if (decodeURIComponent(m[1]) === key) {
                return decodeURIComponent(m[2]);
            }
        }
        return undefined;
    }
}