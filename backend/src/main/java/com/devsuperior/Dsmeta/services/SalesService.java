package com.devsuperior.Dsmeta.services;

import java.util.List;
import com.devsuperior.Dsmeta.entities.Sale;
import com.devsuperior.Dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalesService {
    @Autowired
    private SaleRepository repository;
    public List<Sale>findSales(){
       return repository.findAll();
    }
}
