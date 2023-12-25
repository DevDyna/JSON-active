 # Json as Programming language

[made on nodejs]

 ##  # REQUIRE NODEJS INSTALLED TO RUN

 #  ## Syntax
like normal standard json files
```js
{
	"name" : [value]
}

{
	"name" : [
			"index_1": 10,
			"index_2": "text127"
			]
}
```
also can be used as pure json if writen right


 ## Example 1
```js
{
    "main": {},

    "my_custom_function_name": {
        "return": null
    }

}
```

On this example you can find :
- main function empty
- a custom function with return value null that isn't used on main function


## function logic:

to call the function
	"output" : "function"
	"function" : "input"
input and output can be null as empty

## function structure:

### basic structure

"function_name" : {
	"return": [value]
}

### advanced structure

"main": {
	"function_name" : 10
}


"function_name" : {
	"return" : "$input"
}

$input is a system variable that is equal at input value/variable that was call as parameter like common myfunction(myparameter)
also it can be used as direct return value or applied some changes

### advanced structure #2

"main": {
	"function_name" : [
	"0" : 10,
	"1" : 2,
	"two" : 222
	]
}


"function_name" : {
	"return" : "$input[two]"
}

$input can be used as list with a name index

 ##list of system variables:

$input    		<- only usable on custom function system , outside still null
$input[name] 	<- also can be used as list based on a name index
$rnd[]			<- random variable

 ## Example 2
 
```js
{
    "main": {
		"null" : "my_custom_output_function"
		
	},

    "my_custom_output_function": {
		
		"sys.out": {
            "0": "Hello",
            "1": "World"
        },
		
        "return": null
    }

}
```

On this example you can find :
- main function with a function as equal null that can extend the main function without save any value as result
- custom function that contain same return as before example and a "sys.out" as system.output where as based on a priority system (0 first of 1) , it send on output values

 ## Example 3
 
```js
{
    "main": {
        "sys.var.set": [{
            "id": "my_var",
            "value": 10
        }]
    }
}
```

On this example you can find :
- main function with "sys.var.set" as variable.set where you can create a list of variables that require a id to define a name and optional a value
 
```js
{
    "main": {
        "sys.var.set": [{
            "id": "my_one_var",
            "value": 10
        },{
            "id": "my_two_var",
            "value": 222
        }]
    }
}
```

On this example you can find:
- same example before but with two variables : my_one_var and my_two_var
 
 
## list of default functions:

- sys : [
    - out 					<- output system
	- var : [				<- sys.var cannot be used
		set					<- create and define variables
		change				<- modify created variables
		]
		
	]
 
 ## Example 4
 
```js
{
    "main": {	
	 "var.set": [{
         "id": "my_var",
         "value": 10
        }]
		
		
	},
	"plusplus":{
		"return": "$input+2"
	}
	
}
```