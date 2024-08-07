def decode_matrix(matrix_str):
    rows = matrix_str.strip().split('\n')
    matrix = [list(row) for row in rows]

    num_rows = len(matrix)
    num_columns = len(matrix[0])

    result = []

    for col in range(num_columns):
        temp_string = ''
        for row in range(num_rows):
            char = matrix[row][col]
            if char.isalpha():
                if temp_string and not temp_string[-1].isspace():
                    result.append(' ')
                temp_string += char
            else:
                if temp_string and temp_string[-1].isalpha():
                    result.append(temp_string)
                    temp_string = ''

        if temp_string:
            result.append(temp_string)

    decoded_message = ''.join(result)
    return decoded_message


matrix_str = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

decoded_message = decode_matrix(matrix_str)
print(decoded_message)
