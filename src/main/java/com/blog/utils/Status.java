package com.blog.utils;

public enum Status {
    PENDING(0, "PENDING"),
    CONFIRM(1, "CONFIRM"),
    NOT_CONFIRM(2, "NOT_CONFIRM"),
    PAYMENT_CONFIRM(3, "PAYMENT_CONFIRM"),
    PAYMENT_NOT_CONFIRM(4, "PAYMENT_NOT_CONFIRM"),
    REJECT(5, "REJECT"),
    SUCCESS(6, "SUCCESS"),
    APPROVE(7, "APPROVE"),
    DISAPPROVE(8, "DISAPPROVE"),
    DUPLICATE(9, "DUPLICATE"),
    NO_CONTENT(10, "NO_CONTENT"),
    EXISTS(11, "EXISTS"),
    FAILED(12, "FAILED");


    private int code;
    private String name;

    Status(int code, String name) {
        this.code = code;
        this.name = name;
    }

    public int getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

}
