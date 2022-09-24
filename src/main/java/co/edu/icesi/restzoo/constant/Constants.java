package co.edu.icesi.restzoo.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Constants {

    ANIMAL_COMMON_NAME("Giant Anteater", ""),
    MAX_LONGEVITY("31", "Age caps at 31 years for `" + ANIMAL_COMMON_NAME.value + "`."),
    MIN_HEALTHY_WEIGHT("1600.0", "Weight should be over 1600 grams (g)."),
    MAX_HEALTHY_WEIGHT("50000.0", "Weight should be under 50000 grams (g)."),
    MIN_BABY_HEIGHT("30", "Length should not be inferior to 30 centimeters (cm)."),
    MAX_ELDER_LENGTH("220", "Length should not exceed 220 centimeters (cm).");

    final String value;
    final String validationMessage;
}
