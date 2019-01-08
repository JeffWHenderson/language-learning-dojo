package com.learningdojo.lessons.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class Sentences {

    @RequestMapping(value = "/{language}/{lessonNumber}", method = GET, produces = "application/json")
    @ResponseBody
    public ResponseEntity greeting(@PathVariable String language, @PathVariable String lessonNumber) {
        Map results = MapResultsStub(language, lessonNumber);

        return  ResponseEntity.status(HttpStatus.OK).body(results);
    }

    private Map MapResultsStub(String language, String lessonNumber) {
        Map<String, String> results = new HashMap();
        results.put("hello", "world");
        results.put("language", language);
        results.put("lesson Number", lessonNumber);

        return results;
    }
}