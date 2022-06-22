export interface IRegister {
    id?: string;
    email: string;
    password: string;
    userType: Roles;
  }
  export enum Roles {
    Player = 'Player',
    Team = 'Team',
    Coach = 'Coach',
    Admin = 'Admin',
  }