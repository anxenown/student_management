'use client';
import { useState } from 'react';
import Table from './Table';
import { Person, Role, Attendance } from '../pages/api';

const HomeClient = ({
  teachers,
  staff,
  students,
  roles,
  attendance,
}: {
  teachers: Person[];
  staff: Person[];
  students: Person[];
  roles: Role[];
  attendance: Attendance[];
}) => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'staff' | 'students'>('teachers');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management System</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'teachers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('teachers')}
        >
          Teachers
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'staff' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('staff')}
        >
          Staff
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'students' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('students')}
        >
          Students
        </button>
      </div>
      {activeTab === 'teachers' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Teacher Management</h2>
          <Table data={teachers} type="teacher" roles={roles} attendance={attendance} />
        </div>
      )}
      {activeTab === 'staff' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Staff Management</h2>
          <Table data={staff} type="staff" roles={roles} attendance={attendance} />
        </div>
      )}
      {activeTab === 'students' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Student Management</h2>
          <Table data={students} type="student" roles={roles} attendance={attendance} />
        </div>
      )}
    </div>
  );
};

export default HomeClient;
