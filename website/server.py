from flask import Flask, render_template, request, jsonify
import database

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/task_setup', methods=['GET', 'POST'])
def task_setup():
    if request.method == 'POST':
        task_data = request.get_json()
        task = database.saveTask(task_data)
        return jsonify(task), 201
    return render_template('task_setup.html')

@app.route('/task_evaluation', methods=['GET', 'POST'])
def task_evaluation():
    if request.method == 'POST':
        task_data = request.get_json()
        evaluation = database.evaluateTask(task_data)
        return jsonify(evaluation), 201
    return render_template('task_evaluation.html')

@app.route('/saved_tasks', methods=['GET'])
def saved_tasks():
    tasks = database.loadTasks()
    return render_template('saved_tasks.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)