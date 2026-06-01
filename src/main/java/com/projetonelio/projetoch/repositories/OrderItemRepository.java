package com.projetonelio.projetoch.repositories;

import com.projetonelio.projetoch.entities.OrderItem;
import com.projetonelio.projetoch.entities.pk.OrderIntemPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderIntemPK> {
}
