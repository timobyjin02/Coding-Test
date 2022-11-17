def solution(array, height):
    return len(list(filter(lambda temp: temp > height, array)))