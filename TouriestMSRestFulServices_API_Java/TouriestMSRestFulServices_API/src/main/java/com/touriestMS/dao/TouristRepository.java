package com.touriestMS.dao;

import org.springframework.data.repository.CrudRepository;

import com.touriestMS.entities.Tourist;


public interface TouristRepository extends CrudRepository<Tourist,Integer> {
	public Tourist findById(int id);

}
