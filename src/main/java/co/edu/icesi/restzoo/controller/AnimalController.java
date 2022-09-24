package co.edu.icesi.restzoo.controller;

import co.edu.icesi.restzoo.api.AnimalAPI;
import co.edu.icesi.restzoo.constant.AnimalErrorCode;
import co.edu.icesi.restzoo.dto.AnimalDTO;
import co.edu.icesi.restzoo.error.exception.AnimalError;
import co.edu.icesi.restzoo.error.exception.AnimalException;
import co.edu.icesi.restzoo.mapper.AnimalMapper;
import co.edu.icesi.restzoo.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class AnimalController implements AnimalAPI {

    public final AnimalMapper animalMapper;

    public final AnimalService animalService;

    public final String VALID_NAME_FORMAT = "^[a-zA-Z\\s]*$";

    public final int NAME_LENGTH_CAP = 120;

    @Override
    public AnimalDTO getAnimalById(UUID animalId) {
        return animalMapper.fromAnimal(animalService.getAnimal(animalId));
    }

    @Override
    public AnimalDTO getAnimalByName(String animalName) {
        return animalMapper.fromAnimal(animalService.getAnimal(animalName));
    }

    @Override
    public AnimalDTO createAnimal(AnimalDTO animalDTO) {
        validNameLength(animalDTO.getName());
        validNameFormat(animalDTO.getName());
        return animalMapper.fromAnimal(animalService.createAnimal(animalMapper.fromDTO(animalDTO)));
    }

    @Override
    public List<AnimalDTO> getAnimals() {
        return animalService.getAnimals().stream().map(animalMapper::fromAnimal).collect(Collectors.toList());
    }

    private void validNameFormat(String name) {
        if (!name.matches(VALID_NAME_FORMAT))
            throw new AnimalException(HttpStatus.BAD_REQUEST,
                    new AnimalError(AnimalErrorCode.CRL_E0x11, AnimalErrorCode.CRL_E0x11.getMessage()));
    }

    private void validNameLength(String name) {
        if (name.length() > NAME_LENGTH_CAP)
            throw new AnimalException(HttpStatus.BAD_REQUEST,
                    new AnimalError(AnimalErrorCode.CRL_E0x12, AnimalErrorCode.CRL_E0x12.getMessage()));
    }
}
