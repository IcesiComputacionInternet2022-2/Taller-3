package co.edu.icesi.restzoo.service.impl;

import co.edu.icesi.restzoo.constant.AnimalErrorCode;
import co.edu.icesi.restzoo.error.exception.AnimalError;
import co.edu.icesi.restzoo.error.exception.AnimalException;
import co.edu.icesi.restzoo.model.Animal;
import co.edu.icesi.restzoo.repository.ZooRepository;
import co.edu.icesi.restzoo.service.AnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@RequiredArgsConstructor
public class AnimalServiceImpl implements AnimalService {

    public final ZooRepository zooRepository;

    @Override
    public Animal getAnimal(UUID animalId) { return zooRepository.findById(animalId).orElse(null); }

    @Override
    public Animal getAnimal(String animalName) { return zooRepository.findByName(animalName).orElse(null); }

    @Override
    public Animal createAnimal(Animal animal) {
        uniqueExhibit(animal.getName());
        return zooRepository.save(animal);
    }

    @Override
    public List<Animal> getAnimals() {
        return StreamSupport.stream(zooRepository.findAll().spliterator(),false).collect(Collectors.toList());
    }

    private void uniqueExhibit(String name) {
        if (zooRepository.findByName(name).isPresent())
            throw new AnimalException(HttpStatus.CONFLICT,
                    new AnimalError(AnimalErrorCode.SER_E0x01, AnimalErrorCode.SER_E0x01.getMessage()));
    }
}
