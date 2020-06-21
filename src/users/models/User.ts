export interface User {
  firstName: string;
  lastName: string;
  avatar?: string;
  age?: number;
  description: string;
  connections: number;
}

export default User;
