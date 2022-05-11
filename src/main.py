import os
import requests
import yaml

def get_config():
    file = open('config.yml', 'r', encoding="utf-8")
    #使用文件对象作为参数
    file_data = file.read()                 
    file.close()
    #指定Loader
    data = yaml.load(file_data,Loader=yaml.FullLoader)    
    return data

def get_envs():
    myenvs = {}
    myenvs['WX_COMPANY_ID'] = os.getenv('WX_COMPANY_ID')
    myenvs['WX_APP_ID'] = os.getenv('WX_APP_ID')
    myenvs['WX_APP_SECRET'] = os.getenv('WX_APP_SECRET')
    myenvs['HEFENG_API_KEY'] = os.getenv('HEFENG_API_KEY')
    return myenvs

def get_access_token(my):
    response = requests.get("https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid={corpid}&corpsecret={corpsecret}".format(corpid=corpid, corpsecret=corpsecret))
    data = json.loads(response.text)
    return data['access_token']

if __name__ == '__main__':
    config = get_config()
    envs = get_envs()
    print(config)
    print(envs)
    
