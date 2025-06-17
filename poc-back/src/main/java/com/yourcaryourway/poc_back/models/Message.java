package com.yourcaryourway.poc_back.models;

import java.sql.Date;

import lombok.Data;

@Data
public class Message {
    private String author;
    private Date dateTime;
    private String content;
}
