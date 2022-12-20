package com.touriestMS.dao;

import org.springframework.data.repository.CrudRepository;

import com.touriestMS.entities.Country;


public interface CountryRepository extends CrudRepository<Country,Integer> {
	public Country findById(int id);

}
