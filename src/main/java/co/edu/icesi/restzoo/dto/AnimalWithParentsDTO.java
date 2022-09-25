package co.edu.icesi.restzoo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AnimalWithParentsDTO extends AnimalDTO {

    private UUID father;

    private UUID mother;
}
