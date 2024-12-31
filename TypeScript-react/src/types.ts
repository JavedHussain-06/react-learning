export interface Info {
    name: string,
    age: number,
    email: string
}

export interface AdminInfoList extends Info {
    role: string,
    lastLogin: Date
}

export interface UserList {
    name: string,
    phone: string,
    email: string,
    username : string,
    id : number
}