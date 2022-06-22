export interface IRegister { 
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    sport: string;
    userType: Roles;
  }
  export enum Roles {
    Player = 'Player',
    Team = 'Team',
    Coach = 'Coach',
    Admin = 'Admin',
  }
  export interface ILogin { 
    email: string; 
    password: string; 
  }