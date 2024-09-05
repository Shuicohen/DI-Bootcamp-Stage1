function areAnagrams(str1, str2) {
    // Helper function to clean and sort a string
    const cleanAndSort = str => {
      return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    };
  
    // Clean and sort both strings
    return cleanAndSort(str1) === cleanAndSort(str2);
  }
  
  // Example usage:
  console.log(areAnagrams('Astronomer', 'Moon starer')); // true
  console.log(areAnagrams('School master', 'The classroom')); // true
  console.log(areAnagrams('The Morse Code', 'Here come dots')); // true
  console.log(areAnagrams('Hello', 'World')); // false
  