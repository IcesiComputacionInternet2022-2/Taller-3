package co.edu.icesi.frontZoo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Animal {

    @Id
    private UUID id;

    private String name;

    private Sex sex;

    private double weight;

    private int age;

    private  double height;

    private LocalDateTime arrival_date;

    private Animal [] parents = new Animal[2];



}
