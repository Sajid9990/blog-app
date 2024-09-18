package com.blog.model;

import com.blog.utils.Status;
import lombok.Getter;
import lombok.Setter;

public class ResponseWith {

    @Getter
    @Setter
    private Status status;
    @Getter
    @Setter
    private Object object;
    @Getter
    @Setter
    private String message;

    public ResponseWith() {
    }

    public ResponseWith(Status status, Object object, String message) {
        this.status = status;
        this.object = object;
        this.message = message;
    }

    public ResponseWith(Status status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseWith(Status status, Object object) {
        this.status = status;
        this.object = object;
    }

    public ResponseWith(Status status) {
        this.status = status;
    }
}
