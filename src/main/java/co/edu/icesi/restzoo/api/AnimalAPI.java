package co.edu.icesi.restzoo.api;

import co.edu.icesi.restzoo.dto.AnimalDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/animals")
public interface AnimalAPI {

    @GetMapping("/{animalId}")
    AnimalDTO getAnimalById(@PathVariable UUID animalId);

    @GetMapping("/{animalName}")
    AnimalDTO getAnimalByName(@PathVariable String animalName);

    @PostMapping()
    AnimalDTO createAnimal(@RequestBody AnimalDTO userDTO);

    @GetMapping()
    List<AnimalDTO> getAnimals();
}
