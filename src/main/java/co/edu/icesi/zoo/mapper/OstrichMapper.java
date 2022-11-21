package co.edu.icesi.zoo.mapper;

import org.mapstruct.Mapper;

import co.edu.icesi.zoo.dto.OstrichDTO;
import co.edu.icesi.zoo.model.Ostrich;

import java.util.UUID;

@Mapper(componentModel = "spring") 
public interface OstrichMapper {
	
    Ostrich fromDTO(OstrichDTO ostrichDTO);

    OstrichDTO fromOstrich(Ostrich ostrich);
    
}
