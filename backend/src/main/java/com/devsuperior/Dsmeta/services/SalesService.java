package com.devsuperior.Dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import com.devsuperior.Dsmeta.entities.Sale;
import com.devsuperior.Dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SalesService {
    @Autowired
    private SaleRepository repository;
    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable){
      LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

      LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
      LocalDate max = maxDate.equals("") ? today :LocalDate.parse(maxDate);


       return repository.findSales(min, max,pageable);
    }
}
