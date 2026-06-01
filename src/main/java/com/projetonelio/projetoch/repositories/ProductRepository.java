package com.projetonelio.projetoch.repositories;

import com.projetonelio.projetoch.entities.Category;
import com.projetonelio.projetoch.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product, Long> {
}
