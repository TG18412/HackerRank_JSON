
const Joi = require('joi');
const fss =require('fs');
const jsfile=require('./tindex.js');



//const personSchema = Joi.array().has(innerObject);

var outputData="";

try{
  outputData=jsfile();
}catch(e){
	outputData={};
}



const perObj=Joi.object().keys({
 sub1:Joi.number().integer().required(),
 sub2:Joi.number().integer().required(),
 sub3:Joi.number().integer().required()
})

const innerArray=Joi.array().min(1).has(perObj.required())

const innerObject=Joi.object().keys({
  name:Joi.string().required(),
  aggregate:Joi.number().integer().required(),
  percentages:innerArray.required()
})


const innerArray2=Joi.array().min(5).has(innerObject)

const finalObject=Joi.object().keys({
  studentData:innerArray2
})




var XMLWriter = require('xml-writer');
    xw = new XMLWriter;
    





// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate(outputData, finalObject, function (err, value) {
if(err==null && typeof outputData!='undefined')
{   console.log("Returned JSON is in required format");
    console.log("Status : PASS");

}else{
console.log("Returned JSON is not in required format");
    console.log("Status : FAIL");
}

});  



