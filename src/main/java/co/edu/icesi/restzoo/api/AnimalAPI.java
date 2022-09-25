package co.edu.icesi.restzoo.api;

import co.edu.icesi.restzoo.dto.AnimalDTO;
import co.edu.icesi.restzoo.dto.AnimalWithParentsDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/animals")
public interface AnimalAPI {

    @GetMapping("/id={animalId}")
    AnimalDTO getAnimalById(@PathVariable UUID animalId);

    @GetMapping("/name={animalName}")
    AnimalDTO getAnimalByName(@PathVariable String animalName);

    @PostMapping("/parents=false")
    AnimalDTO createAnimal(@RequestBody AnimalDTO animalDTO);

    @PostMapping("/parents=true")
    AnimalWithParentsDTO createAnimal(@RequestBody AnimalWithParentsDTO animalDTO);

    @GetMapping()
    List<AnimalDTO> getAnimals();
}
