import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskDataPicker = ({ selectedDate, setSelectedDate }) => {
    return (
        <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    );
};

export default TaskDataPicker