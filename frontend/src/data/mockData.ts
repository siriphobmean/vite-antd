// src/data/mockData.ts

export interface UserData {
    id: number
    name: string
    email: string
    role: string
    status: 'Active' | 'Inactive'
  }
  
  export const mockUsers: UserData[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? 'Admin' : 'User',
    status: i % 3 === 0 ? 'Inactive' : 'Active',
  }))
  