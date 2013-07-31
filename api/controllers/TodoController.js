/*---------------------
	:: Todo 
	-> controller

	Estes es el controlador usado para desplegar los TODOs. Su único proposito es renderizar un view

---------------------*/
var TodoController = {
	index: function(req, res){
		res.view();
	}
};
module.exports = TodoController;