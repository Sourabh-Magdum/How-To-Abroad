package com.app.entities;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Program {
		    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;
	    private String name;
	    private String country;
	    private String degree;
	    private String language;
	    
	    

}
