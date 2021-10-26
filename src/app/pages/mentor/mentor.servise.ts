import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MentorServise {

    getUserData(id: number) {
        return new Observable((subscriber) => {
            subscriber.next({
                ratings: {
                    html: 3,
                    css: 2,
                    javascript: 3,
                    english: 3,
                    portfolio: 2,
                    communicationScills: 2
                },
                review: 'good man'
            })
        })
    }
}