1. Exported Variables:
   - `neuralNet`: The neural network object created in `neat.js` and used in `task.js` and `user_interface.js`.
   - `taskList`: The list of tasks created in `task.js` and used in `user_interface.js` and `saved_tasks.html`.

2. Data Schemas:
   - `TaskSchema`: Used in `task.js`, `user_interface.js`, `saved_tasks.html`, and `database.py` to structure the tasks.
   - `NeuralNetSchema`: Used in `neat.js`, `task.js`, and `database.py` to structure the neural network.

3. ID Names of DOM Elements:
   - `task-setup-form`: The form for setting up tasks in `task_setup.html` and used in `user_interface.js`.
   - `task-evaluation-form`: The form for evaluating tasks in `task_evaluation.html` and used in `user_interface.js`.
   - `saved-tasks-list`: The list of saved tasks in `saved_tasks.html` and used in `user_interface.js`.

4. Message Names:
   - `task-setup`: Message sent from `user_interface.js` to `task.js` when a new task is set up.
   - `task-evaluation`: Message sent from `user_interface.js` to `task.js` when a task is evaluated.
   - `task-save`: Message sent from `user_interface.js` to `database.py` when a task is saved.

5. Function Names:
   - `setupTask()`: Function defined in `task.js` and called in `user_interface.js`.
   - `evaluateTask()`: Function defined in `task.js` and called in `user_interface.js`.
   - `saveTask()`: Function defined in `database.py` and called in `user_interface.js`.
   - `loadTasks()`: Function defined in `database.py` and called in `user_interface.js`.
   - `createNeuralNet()`: Function defined in `neat.js` and called in `task.js`.