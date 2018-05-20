package home.lpr.backbone.jpa;


import home.lpr.backbone.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cars", path = "cars")
public interface CarRepository extends JpaRepository<Car, Long> {
    Page<Car> findByBrandContainingIgnoreCase(@Param("brand") String brand, Pageable pageable);

    Page<Car> findByBrandContainingIgnoreCaseOrModelContainingIgnoreCase(@Param("brand") String brand, @Param("model") String model, Pageable pageable);
}
