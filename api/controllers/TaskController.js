/*---------------------
	:: Task 
	-> controller

	El controlador está vacío porque sails abstrae las funciones básicas y son accequibles mediante
	las convenciones predeterminadas. Para más informacion ver /config/routes.js

---------------------*/



var TaskController = {

	//Esta funcion sirve para marcar la tarea completada, en vez de borrarla
	markCompleted : function(req, res){
		var id = req.param('id');
		if (id === undefined || id === null)
		{
			res.send('Error, falta el ID');
			return;
		}

		Task.findById(id, function(err, task){
			
			task.completed = true;
			task.save(function(err){
				res.send(task);
			});
			
			Task.update({'id': id}, {completed: true}, function(err, updated){
				res.send(task);
			});

		});
	}
};
module.exports = TaskController;