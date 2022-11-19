package co.edu.icesi.frontZoo.mapper;

import co.edu.icesi.frontZoo.dto.AnimalDTO;
import co.edu.icesi.frontZoo.model.Animal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnimalMapper {

    Animal fromDTO(AnimalDTO userDTO);
    AnimalDTO fromAnimal(Animal user);
}
