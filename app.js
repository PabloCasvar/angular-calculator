(function(angular){

var app = angular.module("myApp", []);

app.controller('ExampleController', ['$scope', function($scope){
}]);

app.component('calculadora', {
    bindings:{ 
        display: "="
    },

   controller: ['$scope', function($scope){

       this.$onInit = function(){
            $scope.display = 0;
            $scope.memory = "0";
            $scope.operation = "";
            $scope.memoryM = "0"; 
       }

    $scope.buttonClicked = function(param){
            if(param === "MC"){
                $scope.memoryM = "0";
            }
            else if(param === "MR"){
                $scope.memoryM = String($scope.display);
                clearDisplay();
            }
            else if(param === "MM"){
                calculateMemory("+");
            }
            else if(param === "Mm"){
                calculateMemory("-"); 
            }
            else if(param === "CE"){
                clearDisplay();
                $scope.memory = "";
                $scope.memoryM = "";
            }
            else if(param === "C"){
                clearDisplay();
            }
            else if(param === "divide"){
                $scope.memory = Number($scope.display);
                $scope.operation = "/";
                clearDisplay();
                console.log($scope.memory);
            }
            else if(param === "equal"){
                calculate();
            }
            else if(param === "plus"){
                $scope.memory = Number($scope.display);
                $scope.operation = "+";
                clearDisplay();
                console.log($scope.memory);
            }
            else if(param === "minus"){
                $scope.memory = String($scope.display);
                $scope.operation = "-";
                clearDisplay();
                console.log($scope.memory);
            }
            else if(param === "mult"){
                $scope.memory = String($scope.display);
                $scope.operation= "*";
                clearDisplay();
                console.log($scope.memory);
            }
            else{
                if(param != '.'){
                    if(String($scope.display) === "0")
                        $scope.display = "";
                    $scope.display += param;
                }else {
                    if(!String($scope.display).includes("."))
                        $scope.display += param;
                }

                
            }
       }
    
    function clearDisplay(){
        $scope.display = "0";
    }

    function calculate(){
        if($scope.operation != ""){
            var res = eval("(" + $scope.memory + ")" + $scope.operation + "(" + String($scope.display) + ")");
            $scope.display = res;
            console.log(res);
        }
    }

    function calculateMemory(oper){
        var res = eval("(" + $scope.memoryM + ")" + oper + "(" + String($scope.display) + ")");
        $scope.display = res;
        console.log(res);  
    }
   
   }],
   controllerAs: 'calc',
   templateUrl: 'calculadora.tpl.html'
});

})(window.angular);
