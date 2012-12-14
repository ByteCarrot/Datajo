class Exception {
    private message: string;
    constructor(message: string) {
        this.message = message;
    }
    toString() {
        return 'Datajo exception: ' + this.message;
    }
}