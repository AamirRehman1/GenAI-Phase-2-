from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/project/<project_name>')
def project(project_name):
    return render_template('project.html', project_name=project_name)

@socketio.on('create_project')
def create_project(data):
    project_name = data['project_name']
    emit('redirect', {'url': f'/project/{project_name}'})

if __name__ == '__main__':
    socketio.run(app, debug=True)




