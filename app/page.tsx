import React from 'react';
import './globals.css';
import HomeClient from '../components/HomeClient';


// Server Component for data fetching
export default async function Home() {
  try {
    const [teachers, staff, students, roles, attendance] = await Promise.all([
      fetch('http://localhost:3000/data/teachers.json').then(res => res.json()),
      fetch('http://localhost:3000/data/staff.json').then(res => res.json()),
      fetch('http://localhost:3000/data/students.json').then(res => res.json()),
      fetch('http://localhost:3000/data/roles.json').then(res => res.json()),
      fetch('http://localhost:3000/data/attendance.json').then(res => res.json()),
    ]);

    return (
      <HomeClient
        teachers={teachers}
        staff={staff}
        students={students}
        roles={roles}
        attendance={attendance}
      />
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Student Management System</h1>
        <p className="text-red-500">Error loading data. Please try again later.</p>
      </div>
    );
  }
}

