package co.edu.icesi.restzoo.dto;

import co.edu.icesi.restzoo.model.Animal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AnimalWithParentsDTO extends AnimalDTO {

    private UUID father;

    private UUID mother;
}
