class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file) as file:
            self.words = set(file.read().lower().splitlines())

    def is_valid_word(self, word):
        word = word.lower().strip()
        return word in self.words
    
    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2) and word1 != word2
    
    def get_anagrams(self, word):
        word = word.lower().strip()
        if not self.is_valid_word(word):
            return []
        return [w for w in self.words if self.is_anagram(word, w)]
    
