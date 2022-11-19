package co.edu.icesi.frontZoo.dto;

import co.edu.icesi.frontZoo.model.Animal;
import co.edu.icesi.frontZoo.model.Sex;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalDTO {

    private UUID id;

    private String name;

    private Sex sex;

    private double weight;

    private int age;

    private  double height;

    private LocalDateTime arrival_date;

    private Animal[] parents = new Animal[2];
}
