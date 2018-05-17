package home.lpr.backbone.jpa;


import home.lpr.backbone.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "cars", path = "cars")
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByModel(@Param("model") String model);

    List<Car> findByBrand(@Param("brand") String brand);
}
