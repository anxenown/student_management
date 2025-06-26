export interface Person {
    id: number;
    name: string;
  }
  
  export interface Role {
    id: number;
    type: 'teacher' | 'staff' | 'student';
    role: string;
  }
  
  export interface Attendance {
    id: number;
    type: 'teacher' | 'staff' | 'student';
    date: string;
    status: 'Present' | 'Absent';
  }