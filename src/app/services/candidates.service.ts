import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { Candidate, CandidatesFilter, Status, EnglishLevel, Specialization } from '../types/candidate';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CandidatesService {

	private candidatesInTeam: BehaviorSubject<object>

	constructor(private httpClient: HttpClient) {
		this.candidatesInTeam = new BehaviorSubject<object[]>([])
	 }

	 getSelectedCandidate(): Observable<object> {
		return this.candidatesInTeam.asObservable();
	}

	setSelectedCandidate(value) {
		this.candidatesInTeam.next(value);
	};






	loadCandidates(filter?: CandidatesFilter): Observable<Candidate[]> {
		// return this.httpClient.post<Candidate[]>('http://backend.com/candidates', {filter});
		const candidates = [
			{
				id: 1,
				firstName: 'John',
				lastName: 'Smith',
				email: 'jsmith@gmail.com',
				skype: 'jsmith332',
				phone: '+827169129317',
				specialization: 'front-end' as Specialization,
				location: 'New-Your, USA',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 2,
				firstName: 'Anna',
				lastName: 'Donovan',
				email: 'donovan721@yahoo.com',
				skype: 'Annie78',
				phone: '+912313871293',
				specialization: 'back-end' as Specialization,
				location: 'Colchester, England',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: false,
				isInterviewedByTech: false,
			},
			{
				id: 3,
				firstName: 'Rick',
				lastName: 'Gonsales',
				email: 'neversleep@gmail.com',
				skype: 'rick gonsales',
				phone: '+183131831',
				specialization: 'business analyst' as Specialization,
				location: 'Mexico, Mexico',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 4,
				firstName: 'Mark',
				lastName: 'Tornhes',
				email: 'markT@gmail.com',
				skype: 'tornhes99',
				phone: '+878247878782',
				specialization: 'business analyst' as Specialization,
				location: 'Oslo, Norway',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 5,
				firstName: 'Britney',
				lastName: 'Sterry',
				email: 'kittieB@domain.com',
				skype: 'kittiekittie',
				phone: '+19128828112',
				specialization: 'front-end' as Specialization,
				location: 'Toronto, Canada',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Questionable
			},
			{
				id: 6,
				firstName: 'George',
				lastName: 'McTanney',
				email: 'george@gmail.com',
				skype: 'georgeC++',
				phone: '+192381378217',
				specialization: 'back-end' as Specialization,
				location: 'Helsinki, Finland',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 7,
				firstName: 'Chainik',
				lastName: 'Redmond',
				email: 'bred@mail.ru',
				skype: 'imnot',
				phone: '+192381283921',
				specialization: 'business analyst' as Specialization,
				location: 'Moscow, Russia',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Declined
			},
			{
				id: 8,
				firstName: 'Morgan',
				lastName: 'Freeman',
				email: 'justagod@gmail.com',
				skype: 'godlike',
				phone: '+1111111111111111',
				specialization: 'back-end' as Specialization,
				location: 'Washington, USA',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: false,
				isInterviewedByTech: false,
			},
			{
				id: 9,
				firstName: 'Lucas',
				lastName: 'Tounsend',
				email: 'lucaslucas@gmail.com',
				skype: 'TounsendL',
				phone: '+93824787284',
				specialization: 'back-end' as Specialization,
				location: 'Kingston, Jamaica',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 10,
				firstName: 'Charles',
				lastName: 'Brighton',
				email: 'charleyb@gmail.com',
				skype: 'chrlsbrghtn',
				phone: '+2389482982',
				specialization: 'front-end' as Specialization,
				location: 'Ontario, Canada',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Declined
			},
			{
				id: 11,
				firstName: 'Patrick',
				lastName: 'Stones',
				email: 'pppatr@gmail.com',
				skype: 'stoneSP',
				phone: '+35435129317',
				specialization: 'back-end' as Specialization,
				location: 'Sacramento, USA',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 12,
				firstName: 'Bridge',
				lastName: 'Johnson',
				email: 'skyisover721@yahoo.com',
				skype: 'bridge90',
				phone: '+412413871293',
				specialization: 'business analyst' as Specialization,
				location: 'London, England',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: false,
				isInterviewedByTech: false,
			},
			{
				id: 13,
				firstName: 'Neil',
				lastName: 'Harris',
				email: 'NH@gmail.com',
				skype: 'gogogo112',
				phone: '+6342331831',
				specialization: 'front-end' as Specialization,
				location: 'Mexico, Mexico',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 14,
				firstName: 'Vasili',
				lastName: 'Pupkin',
				email: 'vasia_pupkin@gmail.com',
				skype: 'vasia93',
				phone: '+357297368474',
				specialization: 'front-end' as Specialization,
				location: 'Minsk, Belarus',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 15,
				firstName: 'Timmy',
				lastName: 'Tompson',
				email: 'timmyT@domain.com',
				skype: 'timtom',
				phone: '+323228828112',
				specialization: 'front-end' as Specialization,
				location: 'Toronto, Canada',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 16,
				firstName: 'George',
				lastName: 'Wizley',
				email: 'wizley-g@gmail.com',
				skype: 'wizzzz',
				phone: '+3453451378217',
				specialization: 'back-end' as Specialization,
				location: 'Helsinki, Finland',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 17,
				firstName: 'Plita',
				lastName: 'Bosh',
				email: 'sila@mail.ru',
				skype: 'thebestplita',
				phone: '+3255233921',
				specialization: 'back-end' as Specialization,
				location: 'Moscow, Russia',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Declined
			},
			{
				id: 18,
				firstName: 'Michael',
				lastName: 'Broudy',
				email: 'justmick@gmail.com',
				skype: 'mickie79',
				phone: '+2344554723324',
				specialization: 'business analyst' as Specialization,
				location: 'Lissabon, Portugal',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 19,
				firstName: 'James',
				lastName: 'Potter',
				email: 'magicboy@gmail.com',
				skype: 'jamessss',
				phone: '+25353464364634',
				specialization: 'front-end' as Specialization,
				location: 'Madrid, Spain',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 20,
				firstName: 'Moisha',
				lastName: 'Abramovich',
				email: 'AbrMoisha@gmail.com',
				skype: 'MoishaA',
				phone: '+9838113982',
				specialization: 'back-end' as Specialization,
				location: 'Tel Aviv, Israel',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Declined
			},
			{
				id: 21,
				firstName: 'Ronald',
				lastName: 'Bradger',
				email: 'ron87@gmail.com',
				skype: 'ronald-B',
				phone: '+823423423634',
				specialization: 'business analyst' as Specialization,
				location: 'Las Vegas, USA',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 22,
				firstName: 'Marcus',
				lastName: 'Raise',
				email: 'marcus-marcus@yahoo.com',
				skype: 'RaiseM',
				phone: '+365647456456',
				specialization: 'front-end' as Specialization,
				location: 'Manchester, England',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 23,
				firstName: 'Charlie',
				lastName: 'Drinkwater',
				email: 'wannadrink@gmail.com',
				skype: 'drinkwater',
				phone: '+7613123831',
				specialization: 'back-end' as Specialization,
				location: 'London, England',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 24,
				firstName: 'Alisher',
				lastName: 'Tambekov',
				email: 'tAlisher@gmail.com',
				skype: 'alisherT90',
				phone: '+878247878782',
				specialization: 'front-end' as Specialization,
				location: 'Karaganda, Kazakhstan',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 25,
				firstName: 'Julie',
				lastName: 'Stepanenko',
				email: 'StepanenkoJulie@domain.com',
				skype: 'julie95',
				phone: '+723290331',
				specialization: 'business analyst' as Specialization,
				location: 'Krasnodar, Russia',
				englishLevel: 'beginner' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Questionable
			},
			{
				id: 26,
				firstName: 'Peter',
				lastName: 'Harris',
				email: 'pete_harris@gmail.com',
				skype: 'pete89-21-04',
				phone: '+1321435346',
				specialization: 'back-end' as Specialization,
				location: 'Dublin, Ireland',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 27,
				firstName: 'Notebook',
				lastName: 'Dell',
				email: 'buyme@gmail.com',
				skype: 'thebestnotebook',
				phone: '+2233213543',
				specialization: 'back-end' as Specialization,
				location: 'Prague, Czech',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 8,
				firstName: 'Harry',
				lastName: 'Partymaker',
				email: 'dancedance@gmail.com',
				skype: 'partymaker',
				phone: '+34244556352',
				specialization: 'front-end' as Specialization,
				location: 'New-York, USA',
				englishLevel: 'pre-intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: false,
			},
			{
				id: 9,
				firstName: 'William',
				lastName: 'Dunker',
				email: 'will-dunk@gmail.com',
				skype: 'willie-willie',
				phone: '+13343535435242',
				specialization: 'front-end' as Specialization,
				location: 'London, England',
				englishLevel: 'advanced' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Accepted
			},
			{
				id: 30,
				firstName: 'Artur',
				lastName: 'Pirozhkov',
				email: 'pirozhok@bk.ru',
				skype: 'pirozhochek',
				phone: '+133143545464',
				specialization: 'front-end' as Specialization,
				location: 'Moscow, Russia',
				englishLevel: 'intermediate' as EnglishLevel,
				isInterviewedByHr: true,
				isInterviewedByTech: true,
				status: Status.Declined
			}
		].filter(candidate => {
			if (!filter) {
				return true
			}
			const fitsStatus = filter.status === 'all' ? candidate : filter.status === null || filter.status === candidate.status;
			const fitsSpecialization = filter.specialization === 'all' ? candidate : filter.specialization === null || filter.specialization === candidate.specialization;
			return fitsStatus && fitsSpecialization;
		});

		return of(candidates);
	}



}
