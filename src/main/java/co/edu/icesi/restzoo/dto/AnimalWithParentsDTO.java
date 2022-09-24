package co.edu.icesi.restzoo.dto;

import co.edu.icesi.restzoo.model.Animal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalWithParentsDTO {

    private UUID id;

    private String name;

    private char sex;

    private double weight;

    private int age;

    private double height;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime arrivalDate;

    private Animal father;

    private Animal mother;
}
