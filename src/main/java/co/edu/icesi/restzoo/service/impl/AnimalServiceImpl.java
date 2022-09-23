package co.edu.icesi.restzoo.service.impl;

import co.edu.icesi.restzoo.model.Animal;
import co.edu.icesi.restzoo.service.AnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AnimalServiceImpl implements AnimalService {

    @Override
    public Animal getAnimal(UUID animalId) {
        return null;
    }

    @Override
    public Animal createAnimal(Animal animal) {
        return null;
    }

    @Override
    public List<Animal> getAnimals() {
        return null;
    }
}
