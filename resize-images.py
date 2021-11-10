import cv2 as cv2
import os

path = 'dossier46/src/assets/'
names = []
# for item in os.listdir(path):
#     if item.lower().endswith(('.png', '.jpg', '.jpeg')):
#         names.append(item)
#         # print(os.path.splitext(item))
# print(names)

def resize_image(item_path):
    img = cv2.imread(item_path)
                
    height, width, _ = img.shape
    if width > 1920:
        scale_factor = 1920/width
        dim = (int(width*scale_factor), int(height*scale_factor))
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
        cv2.imwrite(item_path,resized)
        # cv2.imshow("Resized image", resized)
        # cv2.waitKey(0)
        # cv2.destroyAllWindows() 


for item in os.listdir('dossier46/src/assets'):
    if os.path.isdir(os.path.join(path,item)):
        print(item)
        for item2 in os.listdir(os.path.join(path,item)):
            if item2.lower().endswith(('.png', '.jpg', '.jpeg')):
                print(item2)

                resize_image(os.path.join(path,item,item2))


    if item.lower().endswith(('.png', '.jpg', '.jpeg')):
        resize_image(os.path.join(path,item))


