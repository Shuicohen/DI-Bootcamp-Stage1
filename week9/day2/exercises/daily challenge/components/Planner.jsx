import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskDatePicker from './TaskDataPicker';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = selectedDate.toISOString().split('T')[0];
  const tasks = useSelector((state) => state.tasks.days[formattedDate] || []);

  return (
    <div>
      <TaskDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TaskForm day={formattedDate} />
      <TaskList tasks={tasks} day={formattedDate} />
    </div>
  );
};

export default Planner;