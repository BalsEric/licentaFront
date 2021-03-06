import {Injectable} from '@angular/core';


@Injectable()
export class ErrorService {

  deleteErrorMessage(element: string) {
    return 'Something went wrong - could not delete ' + element;
  }

  modifyErrorMessage(status: number, element: string) {
    switch (status) {
      case 409:
        return 'A ' + element + ' with this name already exists';
      case 400:
        return 'Wrong input - fields do not match criteria';
      case 401:
        return 'Unauthorized';
      default:
        return 'Something went wrong, sorry';
    }
  }
}
