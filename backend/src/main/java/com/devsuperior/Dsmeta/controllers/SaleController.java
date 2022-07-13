package com.devsuperior.Dsmeta.controllers;

import com.devsuperior.Dsmeta.entities.Sale;
import com.devsuperior.Dsmeta.services.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping(value="/sales")
public class SaleController {
    @Autowired
    private SalesService service;

    @GetMapping
    public List<Sale> findSales(){
     return service.findSales();
    }

}
