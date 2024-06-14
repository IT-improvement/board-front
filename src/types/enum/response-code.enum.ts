enum ResponseCode {
    SUCCESS = "SU",
    SUCCES = "SU", 

    // HTTP Status 400
    VALIDATION_FAILED = "VE",
    DUPLICATE_EMAIL = "DE",
    DUPLICATE_TELNUMBER = "DT",
    DUPLICATE_NICKNAME = "DN",
    NOT_EXISTED_USER = "NU",
    NOT_EXISTED_BOARD = "NB",

    // HTTP Status 401
    SIGN_IN_FAIL = "SF",
    AUTHORIZATION_FAILED = "AF",

    // HTTP Status 403
    NO_PERMISSION = "NP",
    
    // HTTP Status 500
    DATABASE_ERROR= "DBE",

}

export default  ResponseCode;