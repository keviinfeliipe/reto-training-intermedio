package co.com.sofka.questions.handler;

import co.com.sofka.questions.model.PageDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.usecases.PaginationUseCase;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class QuestionHandler {
    private final PaginationUseCase paginationUseCase;

    public QuestionHandler(PaginationUseCase paginationUseCase) {
        this.paginationUseCase = paginationUseCase;
    }

    public Mono<ServerResponse> paginable(ServerRequest request){

        return ServerResponse
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromPublisher(paginationUseCase.apply(
                        new PageDTO(Integer.parseInt(request.pathVariable("page")))
                ), QuestionDTO.class));
    }
}
