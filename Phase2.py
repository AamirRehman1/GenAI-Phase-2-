import os
from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = '1224567'  # Use a different key for production

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_project', methods=['POST'])
def create_project():
    project_name = request.form['project_name']
    return redirect(url_for('wbs_diagram', project_name=project_name))

@app.route('/wbs_diagram')
def wbs_diagram():
    project_title = request.args.get('project_name', 'Default Project Name')
    return render_template('wbs_diagram.html', project_title=project_title)

@socketio.on('connect')
def test_connect():
    print('Client connected')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    socketio.run(app, host='0.0.0.0', port=port)
