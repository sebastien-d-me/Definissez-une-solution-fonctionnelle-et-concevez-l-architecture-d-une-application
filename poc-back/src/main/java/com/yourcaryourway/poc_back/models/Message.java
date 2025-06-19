package com.yourcaryourway.poc_back.models;

import lombok.Data;

@Data
public class Message {
    private String author;
    private String dateTime;
    private String content;
}
