import re
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text
        self.words = self._get_words()

    def _get_words(self):
        # Convert the text to lowercase and split by whitespace
        return re.findall(r'\b\w+\b', self.text.lower())
    
    def word_frequency(self, word):
        # Return frecuency of the word
        if not word:
            return None
        return self.words.count(word)
    
    def most_common_word(self):
        # Return the most common word
        if not self.words:
            return None
        word_counts = Counter(self.words)
        return word_counts.most_common(1)[0][0]
    
    def unique_words(self):
        # Return a list of unique words
        return list(set(self.words))
    
    @classmethod
    def from_file(cls, file_path):
        try:
            with open(file_path, 'r') as file:
                text = file.read()
                return cls(text)
        except FileNotFoundError:
            return None


import string
from nltk.corpus import stopwords

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)
    
    def remove_punctuation(self):
        # Remove punctuation from the text
        return self.text.translate(str.maketrans("", "", string.punctuation))
    
    def remove_stopwords(self):
        # Remove stopwords from the text
        stop_words = set(stopwords.words('english'))
        words_without_stopwords = [word for word in self.words if word not in stop_words]
        return ' '.join(words_without_stopwords)
    
    def remove_special_characters(self):
        # Remove special characters from the text
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)
    

# Usage example
# Create a Text instance from the file 'the_stranger.txt'
text_instance = Text.from_file('the_stranger.txt')

# Check if the instance was created successfully
if text_instance:
    # Print the most common word
    print("Most common word:", text_instance.most_common_word())
    
    # Print unique words
    print("Unique words:", text_instance.unique_words())
    
    # Example of word frequency (change 'word_to_check' to a word you want to check)
    word_to_check = 'example'  # Replace with the word you want to check
    print(f"Frequency of '{word_to_check}':", text_instance.word_frequency(word_to_check))
else:
    print("Failed to create Text instance from file.")
