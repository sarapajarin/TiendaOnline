export interface UserInterface {
    username: string;
    password: string;
    roleName: "ADMIN" | "CLIENT" | "SELLER";
    firstName: string;
    lastName: string;
    address: string;
}

export type LoginInterface = Pick<UserInterface, "username" | "password"> //hace un type de interface y utiliza pick para coger los valores que le interesan
//export type LoginInterface2 = Omit<UserInterface, "roleName" | "firstName" | "lastName" | "address">
//export interface LoginInterface3 extends UserInterface {
  //  email:string;
//}
