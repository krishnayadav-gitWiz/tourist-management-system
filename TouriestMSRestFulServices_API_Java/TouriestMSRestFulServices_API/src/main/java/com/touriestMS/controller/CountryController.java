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

import com.touriestMS.dao.CountryRepository;
import com.touriestMS.entities.Country;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CountryController {
		
		
		@Autowired
		private CountryRepository countryRepository;
		@GetMapping("/country")
		public ResponseEntity<List<Country>> getCountry() {
			List<Country> list=(List<Country>) countryRepository.findAll();
			if(list.size()<=0) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			return (ResponseEntity<List<Country>>) ResponseEntity.of(Optional.of(list));
		}

		//get country by id
		@GetMapping("/country/{id}")
		public ResponseEntity<Country> getCountry(@PathVariable("id") int id) {
			Country country=countryRepository.findById(id);
			if(country==null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
			return ResponseEntity.of(Optional.of(country));		

		}
		//add country in database
		@PostMapping("/country")
		public ResponseEntity<Country> addCountry(@RequestBody Country country) {
			Country p=null;
			try {
				p=this.countryRepository.save(country);
				return ResponseEntity.of(Optional.of(p));
			}catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}

		}

	    //delete country by id
		@DeleteMapping("/country/{id}")
		public ResponseEntity<Void> deleteCountry(@PathVariable("id") int id) {
			try {
				this.countryRepository.deleteById(id);
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			}catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}

		}
	    // update country product 
		@PutMapping("/country/{id}")
		public ResponseEntity<Country> updateCountry(@RequestBody Country country,@PathVariable("id") int id) {
			try {
				this.countryRepository.save(country);
				return ResponseEntity.ok(country);
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}

}
