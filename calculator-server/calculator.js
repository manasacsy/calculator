
function calculator(req,res) {
    //calculator computations
    var operation = req.params.operation;
    var valFinal;
    if(parseInt(operation) === 1){
        valFinal = parseInt(req.params.val1) + parseInt(req.params.val2);
    }
    else if(parseInt(operation) === 2){
        valFinal = parseInt(req.params.val1) - parseInt(req.params.val2);
    }
    else if(parseInt(operation) === 3){
        valFinal = parseInt(req.params.val1) * parseInt(req.params.val2)
    }
    else if(parseInt(operation) === 4){
        if(parseInt(req.params.val2) == 0){
        valFinal = "undefined";
        }
        else{
        valFinal = parseInt(req.params.val1) /parseInt(req.params.val2);
        }
    }
    var result = {
        'valFinal' :valFinal
    }
    res.send(result);
}

exports.calculator=calculator;