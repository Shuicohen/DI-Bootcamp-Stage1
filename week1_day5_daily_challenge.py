# Challenge 1
input_sequence = input("Enter a sequence of words separated by commas: ")
sorted_sequence = ','.join(sorted([word.strip() for word in input_sequence.split(',')]))

print("Sorted sequence:", sorted_sequence)


# Challenge 2
def longest_word(sentence):
    words = sentence.split()
    longest_word = max(words, key=len)
    return longest_word

print("Longest word:", longest_word(input("Enter a sentence: ")))