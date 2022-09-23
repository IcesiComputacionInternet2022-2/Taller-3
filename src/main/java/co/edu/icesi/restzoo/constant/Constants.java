package co.edu.icesi.restzoo.constant;

public interface Constants {

    /*Values*/

    String ANIMAL_COMMON_NAME = "Giant Anteater";
    int MAX_LONGEVITY = 31;
    String MIN_HEALTHY_WEIGHT = "1600.0";
    String MAX_HEALTHY_WEIGHT = "50000.0";
    String MIN_BABY_HEIGHT = "0.0";
    String MAX_ELDER_HEIGHT = "0.0";
    String SEX_REGEX = "^(M|m|F|f)$";
    int MAX_NAME_LENGTH = 120;
    String NAME_REGEX = "^[a-zA-Z ]$";

    /*Validation Messages*/

    String AGE_MSG = "Age caps at " + MAX_LONGEVITY + " years for `" + ANIMAL_COMMON_NAME + "`.";
    String WEIGHT_MSG = "Weight must be between " + MIN_HEALTHY_WEIGHT + " grams (g) and " + MAX_HEALTHY_WEIGHT + " units.";
    String HEIGHT_MSG = "Height must be between " + MIN_BABY_HEIGHT + " units and " + MAX_ELDER_HEIGHT + " units.";
    String SEX_MSG = "Sex should be specified as either `M` for male, or `F` for female (Case insensitive)";
    String NAME_LENGTH_MSG = "Name length can't be greater than " + MAX_NAME_LENGTH + " characters.";
    String NAME_FORMAT_MSG = "Name can only contain letters and spaces";
    String NULL_FIELD = "Field can't be null";
    String BLANK_FIELD = "Field can't be blank";
}
