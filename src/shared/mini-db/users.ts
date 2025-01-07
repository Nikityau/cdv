type TripId = number;

export type User = {
    id: number;
    email: string;
    password: string;
    trips: TripId[]
}

export const users: User[] = [
    {
        id: 0,
        email: 'test@mail.com',
        password: 'test',
        trips: []
    }
]