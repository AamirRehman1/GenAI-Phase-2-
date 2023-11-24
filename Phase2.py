from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    # Use 0.0.0.0 as the host to allow external connections
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))


