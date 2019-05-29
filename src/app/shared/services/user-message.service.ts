import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class UserMessageService {
  error(message: string) {
    console.error(message);
  }
}
