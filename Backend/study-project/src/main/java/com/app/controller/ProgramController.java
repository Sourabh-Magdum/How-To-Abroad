package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Program;
import com.app.repository.ProgramRepository;

@RestController // =@Controller + @ResponseBody
@RequestMapping("/Program")
@CrossOrigin(origins = "http://localhost:3000")
public class ProgramController {

	 @Autowired
	    private ProgramRepository programRepository;

	    @GetMapping("/api/programs")
	    public List<Program> getPrograms(@RequestParam(required = false) String country,
	                                     @RequestParam(required = false) String degree,
	                                     @RequestParam(required = false) String language) {
	        
	        return programRepository.findAll();
	    }
	
}
