import cv2 as cv2
import os

path = 'dossier46/src/assets/'
names = []
# for item in os.listdir(path):
#     if item.lower().endswith(('.png', '.jpg', '.jpeg')):
#         names.append(item)
#         # print(os.path.splitext(item))
# print(names)

def resize_image(item_path,max_size):
    img = cv2.imread(item_path,cv2.IMREAD_UNCHANGED)
                
    height, width, _ = img.shape
    if width > max_size:
        scale_factor = max_size/width
        dim = (int(width*scale_factor), int(height*scale_factor))
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
        cv2.imwrite(item_path,resized)
        # cv2.imshow("Resized image", resized)
        # cv2.waitKey(0)
        # cv2.destroyAllWindows() 

def lower_size(item_path):
    img = cv2.imread(item_path,cv2.IMREAD_UNCHANGED)
    cv2.imwrite(item_path,img)


for item in os.listdir(path):
    if os.path.isdir(os.path.join(path,item)):
        print(item)
        for item2 in os.listdir(os.path.join(path,item)):
            # lower_size(os.path.join(path,item,item2))
            if item2.lower().endswith(('.png','.jpg', '.jpeg')):
                print(item2)

                resize_image(os.path.join(path,item,item2),1080)


    if item.lower().endswith(('.png','.jpg', '.jpeg')):
        # lower_size(os.path.join(path,item))
        resize_image(os.path.join(path,item),1080)


# lower_size(os.path.join(path,'programma_bg.jpg'))