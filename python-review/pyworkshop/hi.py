# in file: hi.py

import json
from pprint import pprint

def main():
    cities_data = []

    with open('cities.json') as cities_file:
        cities_data = json.load(cities_file)


    # for city in cities_data:
        # print(city['name'], city['pop'])

    # pprint(cities_data)

    greetings = ["Hello", "Bonjour", "Hola"]

    # for greeting in greetings:
    #     print(f"{greeting}, World!")

    # helpful REPL methods: help(), type(), and dir()

    # shortcut to check for mutability 
    # hash()

    # Python file names.py
    names = ["Jimmy", "Rose", "Max", "Nina", "Phillip"]

    for name in names:
        if len(name) != 4:
            continue

        # print(f"Hello, {name}")

        if name == "Nina":
            break

    # print("Done!")

    from vehicle import Vehicle, Car, Motorcycle

    my_car = Car("Ford", "Thunderbird")

    my_motorcycle = Motorcycle("Kawasaki", "Ninja")

    print(my_motorcycle.model)

if __name__ == '__main__':
    main()