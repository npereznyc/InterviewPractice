def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Create a dictionary to store the numbers and words
    message_dict = {}
    for line in lines:
        number, word = line.split()
        message_dict[int(number)] = word

    # Determine the number of lines in the pyramid
    pyramid_height = 1
    while pyramid_height * (pyramid_height + 1) // 2 <= max(message_dict.keys()):
        pyramid_height += 1

    # Extract the words at the end of each pyramid line
    message_words = []
    index = 1
    for i in range(1, pyramid_height):
        if index in message_dict:
            message_words.append(message_dict[index])
        index += i +1

    return ' '.join(message_words)


decoded_message = decode('coding_qual_input.txt')
print(decoded_message)