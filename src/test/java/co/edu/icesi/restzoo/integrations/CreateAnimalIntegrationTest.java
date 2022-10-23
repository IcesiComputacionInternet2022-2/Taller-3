package co.edu.icesi.restzoo.integrations;

import co.edu.icesi.restzoo.integrations.config.InitialDataConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@ExtendWith(SpringExtension.class)
@ContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
        properties = { "spring.datasource.url=jdbc:h2:mem:testdb" })
@Import({InitialDataConfig.class})
@ActiveProfiles("test")
public class CreateAnimalIntegrationTest {

    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void init(){
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    }

    @Test
    @SneakyThrows
    public void testCreateAnimal() { // Positive Outcome

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalConflict() { // Negative Outcome: Repeated name

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalNameContent() { // Negative Outcome: Name contains numbers

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalNameLength() { // Negative Outcome: Name too long

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalDateFuture() { // Negative Outcome: Date is in the future

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalTooLight() { // Negative Outcome: Weight too little

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalTooHeavy() { // Negative Outcome: Weight too much

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalTooOld() { // Negative Outcome: Age too much

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalNegativeAge() { // Negative Outcome: Age is negative

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalTooShort() { // Negative Outcome: Length too little

    }

    @Test
    @SneakyThrows
    public void testCreateAnimalTooLong() { // Negative Outcome: Length too much

    }

}
