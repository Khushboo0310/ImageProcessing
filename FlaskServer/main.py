from flask import *
from flask_cors import *
import json
app = Flask(__name__)
cors= CORS(app)

@app.route('/plugins/',methods=['GET'])
def loadPlugin():
    data=json.loads(open("names.json").read())
    return make_response(json.dumps(data),200,{"content-type":"application/json"})

@app.route('/plugin/<name>',methods=['GET'])
def showPlugin(name):
    data=json.loads(open("plugins.json").read())
    return make_response(json.dumps(data[name]),200,{"content-type":"application/json"})

@app.route('/executePlugin',methods=['GET'])
def executePlugin():
    print("Accepted!!!")
    data=json.loads(open("data.json").read())
    return make_response(json.dumps(data["results"]),200,{"content-type":"application/json"})

app.run(debug=True)