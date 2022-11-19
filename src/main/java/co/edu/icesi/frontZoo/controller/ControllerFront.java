package co.edu.icesi.frontZoo.controller;

import co.edu.icesi.frontZoo.model.Animal;
import co.edu.icesi.frontZoo.service.impl.AnimalServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ControllerFront {

    AnimalServiceImpl animalService;

    @GetMapping("/")
    public String viewHomePage(Model model) {
        return "index";
    }

    @GetMapping("/add")
    public String addNewAnimal(Model model) {
        Animal animal = new Animal();
        model.addAttribute("animal", animal);
        return "addAnimal";
    }

    @PostMapping("/save")
    public String saveSales(@ModelAttribute Animal animal,BindingResult bindingResult,Model model,@RequestParam(value ="action",required = true) String action) {

        if (action.equalsIgnoreCase("Cancelar") || action.equalsIgnoreCase("Cancel")) {
            return "redirect:/";
        }

        if(bindingResult.hasErrors()) {

            return "/add";
        }

        if (!action.equalsIgnoreCase("Cancelar") || !action.equalsIgnoreCase("Cancel")) {

            animalService.createAnimal(animal);
        }
        return "redirect:/";
    }

    @GetMapping("/animals")
    public String listAnimals(Model model) {
        model.addAttribute("allAnimals");
        return "/listAnimals";
    }

    @GetMapping("/search")
    public String searchAnimal(Model model) {
        model.addAttribute("animal");
        return "/searchAnimal";
    }
}
