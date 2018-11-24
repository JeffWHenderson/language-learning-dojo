package com.learningdojo.lessons.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@CrossOrigin(origins = "*") // TODO: MOVE TO ENVIRONMENT OR EXTRACT CONSTANTS
@RequestMapping("/")
public class Sentences {

    @ResponseBody
    @RequestMapping(method = GET, produces = "application/json")
    public ResponseEntity greeting() {
        return  ResponseEntity.status(HttpStatus.OK).body("{\"hello\":\"world\"}");
    }
}