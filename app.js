(function(angular){

var app = angular.module("myApp", []);

app.component('calculadora', {
    bindings:{ display: "<" },
    controller: function(){
        console.log(this);
        this.display = 0;
        console.log(this);
        this.$onInit = function(){
            this.display = "0";
            this.memory = "0";
            this.operation = "";
            this.memoryM = "0"; 
            this.toClear = false;
       }

    this.buttonClicked = function(param){
            if(param === "MC"){
                this.memoryM = "0";
            }
            else if(param === "MR"){
                this.display = this.memoryM;
            }
            else if(param === "MS"){
                this.memoryM = String(this.display);
            }
            else if(param === "MM"){
                this.calculateMemory("+");
            }
            else if(param === "Mm"){
                this.calculateMemory("-"); 
            }
            else if(param === "CE"){
                this.clearDisplay();
                this.memory = "";
                this.memoryM = "";
            }
            else if(param === "C"){
                this.clearDisplay();
            }
            else if(param === "divide"){
                this.memory = Number(this.display);
                this.operation = "/";
                this.toClear = true;
                console.log(this.memory);
            }
            else if(param === "equal"){
                this.calculate();
                this.operation = "";
            }
            else if(param === "plus"){
                this.memory = Number(this.display);
                this.operation = "+";
                this.toClear = true;
                console.log(this.memory);
            }
            else if(param === "minus"){
                this.memory = String(this.display);
                this.operation = "-";
                this.toClear = true;
                console.log(this.memory);
            }
            else if(param === "mult"){
                this.memory = String(this.display);
                this.operation= "*";
                this.toClear = true;
                console.log(this.memory);
            }
            else{
                if(this.toClear){
                    this.clearDisplay(); 
                    this.toClear = false;
                }
                                      
                if(param != '.'){
                    if(String(this.display) === "0")
                        this.display = "";
                    this.display += param;
                }else {
                    if(!String(this.display).includes("."))
                        this.display += param;
                }
            }
       }
    
    this.clearDisplay = function(){
        this.display = "0";
    }

    this.calculate = function(){
        if(this.operation != ""){
            var res = eval("(" + this.memory + ")" + this.operation + "(" + String(this.display) + ")");
            this.display = res;
            console.log(res);
        }
    }

    this.calculateMemory = function(oper){
        var res = eval("(" + this.memoryM + ")" + oper + "(" + String(this.display) + ")");
        this.display = res;
        console.log(res);  
    }
    
},
   controllerAs: 'calc',
   templateUrl: 'calculadora.tpl.html'
});

})(window.angular);
