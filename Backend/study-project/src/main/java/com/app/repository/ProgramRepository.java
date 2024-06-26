package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Program;

@Repository
public interface ProgramRepository extends  JpaRepository<Program, Long>  {

}
