package co.edu.icesi.restzoo.dto;

import co.edu.icesi.restzoo.constant.Constants;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
public class AnimalDTO {

    @NotNull(message = Constants.NULL_FIELD)
    private UUID id;

    @NotBlank(message = Constants.BLANK_FIELD)
    @Size(max = Constants.MAX_NAME_LENGTH, message = Constants.NAME_LENGTH_MSG)
    @Pattern(regexp = Constants.NAME_REGEX, message = Constants.NAME_FORMAT_MSG)
    private String name;

    @NotBlank(message = Constants.BLANK_FIELD)
    @Pattern(regexp = Constants.SEX_REGEX, message = Constants.SEX_MSG)
    private char sex;

    @NotNull(message = Constants.NULL_FIELD)
    @DecimalMin(value =  Constants.MIN_HEALTHY_WEIGHT, message = Constants.WEIGHT_MSG)
    @DecimalMax(value =  Constants.MAX_HEALTHY_WEIGHT, message = Constants.WEIGHT_MSG)
    private float weight;

    @NotNull(message = Constants.NULL_FIELD)
    @Max(value = Constants.MAX_LONGEVITY, message = Constants.AGE_MSG)
    private int age;

    @NotNull(message = Constants.NULL_FIELD)
    @DecimalMin(value =  Constants.MIN_BABY_HEIGHT, message = Constants.HEIGHT_MSG)
    @DecimalMax(value =  Constants.MAX_ELDER_HEIGHT, message = Constants.HEIGHT_MSG)
    private float height;

    @NotNull(message = Constants.NULL_FIELD)
    @Past
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime arrivalDate;
}
