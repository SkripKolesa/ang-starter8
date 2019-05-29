import {HttpErrorResponse} from "@angular/common/http";
import {of, throwError} from "rxjs";
import {UserMessageService} from "./user-message.service";

export abstract class BaseService {
  constructor(private userMessageService: UserMessageService) {
  }

  protected handleError<T>(operation = "operation", defaultResult?: T) {
    return (error: HttpErrorResponse) => {
      let message = `An error occurred within ${operation}`;
      if (error.error instanceof ErrorEvent) {
        message += `: ${error.error.message}`;
      } else {
        message += `: Backend returned code ${error.status}, ` +
          `body was: ${error.error}`;
      }
      setTimeout(() => this.userMessageService.error(message), 0);
      return of(defaultResult as T);
    }
  }
}
