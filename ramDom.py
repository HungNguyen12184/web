import random
import json
import gc 
def generate_license_plate():
    numbers = ''.join(random.choices('0123456789', k=2))
    letter = random.choice('abcdefghijklmnopqrstuvwxyz')
    if random.choice([True, False]):
        dash = '-'
    else:
        dash = ' '
    numbers2 = ''.join(random.choices('0123456789', k=random.choice([4, 5])))
    license_plate = numbers + dash + letter + dash + numbers2 
    return license_plate

license_plates = [generate_license_plate() for _ in range(20000)]
license = json.dumps(license_plates)
print(license)
gc.collect()

# # Lưu danh sách biển số xe vào tệp JSON
# with open('license_plates.json', 'w') as json_file:
#     json.dump(license_plates, json_file)

# print("Xong! Biển số xe đã được lưu vào tệp 'license_plates.json'")






