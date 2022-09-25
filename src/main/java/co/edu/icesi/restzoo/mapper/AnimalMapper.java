package co.edu.icesi.restzoo.mapper;

import co.edu.icesi.restzoo.dto.AnimalDTO;
import co.edu.icesi.restzoo.dto.AnimalWithParentsDTO;
import co.edu.icesi.restzoo.model.Animal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface AnimalMapper {

    Animal fromDTO(AnimalDTO animalDTO);

    Animal fromDTO(AnimalWithParentsDTO animalWithParentsDTO);
    AnimalDTO fromAnimal(Animal animal);

    @Mapping(source = "child.id", target = "id")
    @Mapping(source = "child.name", target = "name")
    @Mapping(source = "child.sex", target = "sex")
    @Mapping(source = "child.weight", target = "weight")
    @Mapping(source = "child.age", target = "age")
    @Mapping(source = "child.length", target = "length")
    @Mapping(source = "child.arrivalDate", target = "arrivalDate")
    @Mapping(source = "father", target = "father")
    @Mapping(source = "mother", target = "mother")
    AnimalWithParentsDTO fromAnimals(Animal child, UUID father, UUID mother);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "sex", target = "sex")
    @Mapping(source = "weight", target = "weight")
    @Mapping(source = "age", target = "age")
    @Mapping(source = "length", target = "length")
    @Mapping(source = "arrivalDate", target = "arrivalDate")
    AnimalDTO fromParentsDTO(AnimalWithParentsDTO animalWithParentsDTO);

    default String fromUUID(UUID uuid) { return uuid.toString(); }

    default UUID fromUUID(String uuid) { return UUID.fromString(uuid); }
}
