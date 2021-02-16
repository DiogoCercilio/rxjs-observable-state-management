import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class HeaderStateService {
    public count = new BehaviorSubject<number>(0);

    public increment() {
        this.count.next(this.count.getValue() + 1);
    }    
}
