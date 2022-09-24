package co.edu.icesi.restzoo.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AnimalErrorCode {

    DEF_E0x00("Empty error."),
    SER_E0x01("Requested name is taken by other specimen within Zoo."),
    SER_E0x02_1("Father UUID not found."),
    SER_E0x02_2("Mother UUID not found."),
    SER_E0x03("Parent's sex incoherent with parental role. Agree 'Mother' with 'F' and 'Father' with 'M'."),
    SER_E0x04("Requested arrival date should be in the past, but is in the future instead."),
    CRL_E0x11("Requested name breaks valid format. Only use letters and spaces."),
    CRL_E0x12("Requested name exceeds 120 character limit.");

    private final String message;
}
