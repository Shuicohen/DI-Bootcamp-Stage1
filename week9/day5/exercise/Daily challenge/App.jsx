import { useState } from 'react';
import TaskList from './featutes/tasks/TaskList';
import CategorySelector from './featutes/categories/CategorySelector';
import './App.css'

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(Number(categoryId));
  };

  return (
    <>
     <div>
        <h1>Productivity Tracker</h1>
        
        <CategorySelector onCategorySelect={handleCategorySelect} />

        {selectedCategoryId ? (
          <TaskList selectedCategoryId={selectedCategoryId} />
        ) : (
          <p>Please select a category to view tasks.</p>
        )}
      </div>
    </>
  )
}

export default App
