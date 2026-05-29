package com.projetonelio.projetoch.repositories;

import com.projetonelio.projetoch.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
