import os

import yaml
 
file = open('config.yml', 'r', encoding="utf-8")
#使用文件对象作为参数
data = yaml.load(file)      
print(data)

print('WX_COMPANY_ID',os.getenv('WX_COMPANY_ID'))
print(os.getenv('WX_APP_ID'))
print(os.getenv('WX_APP_SECRET'))
print(os.getenv('HEFENG_API_KEY'))
