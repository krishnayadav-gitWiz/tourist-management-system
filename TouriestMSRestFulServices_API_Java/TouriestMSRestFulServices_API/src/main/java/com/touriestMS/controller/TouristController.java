package com.touriestMS.controller;

import java.util.List;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.touriestMS.dao.TouristRepository;
import com.touriestMS.entities.Tourist;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TouristController {
	@Autowired
	private TouristRepository touristRepository;
	@GetMapping("/tourist")
	public ResponseEntity<List<Tourist>> getTourist() {
		List<Tourist> list=(List<Tourist>) touristRepository.findAll();
		if(list.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return (ResponseEntity<List<Tourist>>) ResponseEntity.of(Optional.of(list));
	}

	//get tourist by id
	@GetMapping("/tourist/{id}")
	public ResponseEntity<Tourist> getTourist(@PathVariable("id") int id) {
		Tourist tourist=touristRepository.findById(id);
		if(tourist==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(tourist));		

	}
	//add tourist in database
	@PostMapping("/tourist")
	public ResponseEntity<Tourist> addTourist(@RequestBody Tourist tourist) {
		Tourist t=null;
		try {
			t=this.touristRepository.save(tourist);
			return ResponseEntity.of(Optional.of(t));
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}

    //delete tourist by id
	@DeleteMapping("/tourist/{id}")
	public ResponseEntity<Void> deleteTourist(@PathVariable("id") int id) {
		try {
			this.touristRepository.deleteById(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}
    // update tourist product 
	@PutMapping("/tourist/{id}")
	public ResponseEntity<Tourist> updateTourist(@RequestBody Tourist tourist,@PathVariable("id") int id) {
		try {
			this.touristRepository.save(tourist);
			return ResponseEntity.ok(tourist);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}}

