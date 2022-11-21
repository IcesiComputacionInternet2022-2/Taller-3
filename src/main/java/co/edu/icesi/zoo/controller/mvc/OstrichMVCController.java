package co.edu.icesi.zoo.controller.mvc;

import co.edu.icesi.zoo.controller.rest.OstrichRestController;
import co.edu.icesi.zoo.dto.OstrichDTO;
import co.edu.icesi.zoo.error.exception.OstrichError;
import co.edu.icesi.zoo.error.exception.OstrichException;
import co.edu.icesi.zoo.mapper.OstrichMapper;
import co.edu.icesi.zoo.service.OstrichService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class OstrichMVCController {

    private final OstrichRestController ostrichRestController;

    @GetMapping("/createOstrich")
    public String createOstrich(Model model) {
        model.addAttribute("ostrich", OstrichDTO.builder().gender(-1).age(-1).weight(-1).height(-1).build());
        return "CreateOstrich";
    }

    @GetMapping("/validation")
    public String validationRedirect() {
        return "redirect:/createOstrich";
    }

    @PostMapping("/validation")
    public String ostrichValidation(@ModelAttribute("ostrich") OstrichDTO ostrichDTO, BindingResult result, Model model) {
        if(result.hasErrors()){
            return "CreateOstrich";
        } else {
            try {
                System.out.println(ostrichDTO);
                ostrichRestController.createOstrich(ostrichDTO);
                model.addAttribute("Status", "success");
                model.addAttribute("Title", "Ostrich Created");
                model.addAttribute("Message", "Ostrich created successfully ");
            } catch (OstrichException e) {
                model.addAttribute("Status", "error");
                model.addAttribute("Title", e.getError().getCode());
                model.addAttribute("Message", e.getError().getMessage());
            }
            return "CreateOstrich";
        }
    }
}
