import { IUser } from './IUser';
export class User implements IUser {
    id: number;
    name: string;
    nikname: string;
    constructor(options){
        this.id = options.id || null;
        this.name = options.name || 'Demo';
        this.nikname = options.nikname || '';
    }
}