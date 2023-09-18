# import random
# import json
# import gc

# def generate_license_plate():
#     numbers = ''.join(random.choices('0123456789', k=2))
#     letter = random.choice('abcdefghijklmnopqrstuvwxyz')
#     if random.choice([True, False]):
#         dash = '-'
#     else:
#         dash = ' '
#     numbers2 = ''.join(random.choices('0123456789', k=random.choice([4, 5])))
#     license_plate = numbers + dash + letter + dash + numbers2 
#     return license_plate

# license_plates = [{"userID": f"{i+1}", "gia_tri": generate_license_plate()} for i in range(20000)]

# # Lưu dữ liệu vào tệp JSON
# with open('license_plates.json', 'w') as json_file:
#     json.dump(license_plates, json_file, ensure_ascii=False, indent=4)

# print("Tạo tệp JSON thành công.")

import json
import mysql.connector

with open('license_plates.json', 'r', encoding='utf-8') as file:
    json_data = file.read()
    json_obj = json.loads(json_data)

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    password='hung1234',
    database="IMG_LPR"
)

mycursor = mydb.cursor()

for item in json_obj:
    license_plate = item["gia_tri"]
    user_id = item["userID"]
    update_query = "UPDATE IMG_LPR SET plate_number = %s WHERE userId = %s"
    mycursor.execute(update_query, (license_plate, user_id))
    mydb.commit()
mycursor.close()
mydb.close()










