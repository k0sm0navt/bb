package home.lpr.backbone;

import home.lpr.backbone.entity.Car;
import home.lpr.backbone.jpa.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackboneApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackboneApplication.class, args);
    }

    @Bean
    CommandLineRunner init(CarRepository carRepository) {
        return (evt) -> createInitialCars(carRepository);
    }

    private void createInitialCars(CarRepository carRepository) {
        carRepository.save(new Car(null, "BMW", "E36", 1996, "535"));
        carRepository.save(new Car(null, "Audi", "A6", 2000, "600"));
        carRepository.save(new Car(null, "Nissan", "Sunny", 1992, "100"));
        carRepository.save(new Car(null, "VW", "Passat", 2005, "660"));
        carRepository.save(new Car(null, "Opel", "Vectra C", 2004, "490"));
        carRepository.save(new Car(null, "Subaru", "Impreza", 2005, "400"));
        carRepository.save(new Car(null, "Saab", "9-5", 2000, "600"));
        carRepository.save(new Car(null, "Ford", "Mustang", 2016, "1405"));
    }
}
