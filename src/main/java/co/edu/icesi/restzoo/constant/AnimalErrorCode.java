package co.edu.icesi.restzoo.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AnimalErrorCode {

    DEF_E0x00("Empty error."),
    SER_E0x01("Requested name is taken by other specimen within Zoo.");

    private final String message;
}
