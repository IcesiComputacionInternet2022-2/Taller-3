package co.edu.icesi.zoo.controller.mvc;

import co.edu.icesi.zoo.controller.rest.OstrichRestController;
import co.edu.icesi.zoo.dto.OstrichDTO;
import co.edu.icesi.zoo.error.exception.OstrichException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Controller
public class OstrichMVCController {

    private final OstrichRestController ostrichRestController;

    @GetMapping("/createOstrich")
    public String createOstrich(Model model) {
        model.addAttribute("ostrich", OstrichDTO.builder().gender(-1).age(-1).weight(-1).height(-1).build());
        return "create";
    }

    @GetMapping("/validation")
    public String validationRedirect() {
        return "redirect:/createOstrich";
    }

    @PostMapping("/validation")
    public String ostrichValidation(@ModelAttribute("ostrich") OstrichDTO ostrichDTO, BindingResult result, Model model) {
        if (!result.hasErrors()) {
            try {
                ostrichRestController.createOstrich(ostrichDTO);
                model.addAttribute("icon", "success");
                model.addAttribute("title", "Ostrich Created");
                model.addAttribute("text", "Ostrich created successfully");
            } catch (OstrichException e) {
                model.addAttribute("icon", "error");
                model.addAttribute("title", e.getError().getCode());
                model.addAttribute("text", e.getError().getMessage());
            }
        }
        return "create";
    }

    @GetMapping("/search")
    public String getSearch(Model model) {
        model.addAttribute("parameter", "");
        return "search";
    }

    @PostMapping("/search")
    public String postSearch(@ModelAttribute("parameter") String parameter, Model model) {
        try {
            List<OstrichDTO> ostrichResult;
            if(parameter.contains("-"))
                ostrichResult = List.of(ostrichRestController.getOstrichById(UUID.fromString(parameter)));
            else
                ostrichResult = ostrichRestController.getOstrichByName(parameter);
            System.out.println(ostrichResult);
            model.addAttribute("ostrichResult", ostrichResult);
        } catch (OstrichException e) {
            model.addAttribute("icon", "error");
            model.addAttribute("title", e.getError().getCode());
            model.addAttribute("text", e.getError().getMessage());
        }
        return "search";
    }
}
