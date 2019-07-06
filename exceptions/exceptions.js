class ServerError extends Error {
    constructor(errorMessage, errorCode) {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}