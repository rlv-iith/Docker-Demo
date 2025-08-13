from flask import Flask, request, jsonify
import your_script  # import your Python file without the .py extension

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run_script():
    try:
        data = request.get_json()
        # Correctly call the function from the imported 'your_script' module
        result = your_script.process_data(data["input"])
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # host='0.0.0.0' is essential to accept connections from outside the container
    app.run(host='0.0.0.0', port=5000)