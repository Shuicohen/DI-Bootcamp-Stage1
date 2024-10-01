import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectDay } from './tasksSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch(selectDay(date.toISOString().split('T')[0])); 
  };

  return (
    <div>
      <h3>Select a day</h3>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Calendar;
