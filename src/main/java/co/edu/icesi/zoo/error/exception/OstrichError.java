package co.edu.icesi.zoo.error.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OstrichError {
    private String code;
    private String message;
}
