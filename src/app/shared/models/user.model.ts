
export interface IUser {
    uid: string,
    name: string,
    email: string
}

export class UserClass {
    static fromFirebase({ uid, name, email }: { uid: string; name: string, email: string }) {
        return new UserClass(uid, name, email);
    }
    constructor(
        public uid: string,
        public name: string,
        public email: string
    ) { }

}
