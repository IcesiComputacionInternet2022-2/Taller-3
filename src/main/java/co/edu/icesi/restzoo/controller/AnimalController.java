package co.edu.icesi.restzoo.controller;

import co.edu.icesi.restzoo.api.AnimalAPI;
import co.edu.icesi.restzoo.dto.AnimalDTO;
import co.edu.icesi.restzoo.mapper.AnimalMapper;
import co.edu.icesi.restzoo.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class AnimalController implements AnimalAPI {

    public final AnimalMapper animalMapper;

    public final AnimalService animalService;

    @Override
    public AnimalDTO getAnimal(UUID animalId) {
        return animalMapper.fromAnimal(animalService.getAnimal(animalId));
    }

    @Override
    public AnimalDTO createAnimal(AnimalDTO animalDTO) {
        return animalMapper.fromAnimal(animalService.createAnimal(animalMapper.fromDTO(animalDTO)));
    }

    @Override
    public List<AnimalDTO> getAnimals() {
        return animalService.getAnimals().stream().map(animalMapper::fromAnimal).collect(Collectors.toList());
    }
}
