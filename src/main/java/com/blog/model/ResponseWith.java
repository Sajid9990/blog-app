package com.blog.model;

import lombok.Getter;
import lombok.Setter;

public class ResponseWith {

    @Getter@Setter
    private String status;
    @Getter@Setter
    private Object object;
    @Getter@Setter
    private String message;

    public ResponseWith() {
    }

    public ResponseWith(String status, Object object, String message) {
        this.status = status;
        this.object = object;
        this.message = message;
    }

    public ResponseWith(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseWith(String status, Object object) {
        this.status = status;
        this.object = object;
    }

    public ResponseWith(String status) {
        this.status = status;
    }
}
