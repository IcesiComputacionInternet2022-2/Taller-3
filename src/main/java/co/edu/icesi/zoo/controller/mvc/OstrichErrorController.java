package co.edu.icesi.zoo.controller.mvc;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

@Controller
public class OstrichErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request, Model model) {
        int status = Integer.parseInt(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE).toString());
        model.addAttribute("timestamp", DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss").format(LocalDateTime.now()));
        model.addAttribute("path", request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI));
        model.addAttribute("error", Objects.requireNonNull(HttpStatus.resolve(status)).getReasonPhrase());
        model.addAttribute("status", status);
        return "error";
    }

}
