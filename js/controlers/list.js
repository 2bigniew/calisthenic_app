(function () {
    
    angular
        .module("KalistenikaApp")
        .controller("listCtrl", listController);
    
        listController.$inject = ['quizMetrics', 'DataService'];
    
        function listController(quizMetrics, DataService){
            var vm = this;
            // vm.dummyData = "Hello World again";
            
            vm.quizMetrics = quizMetrics;
            vm.data = DataService.exercisesData; 
            vm.activeExercise = {};
            vm.changeActiveExercise = changeActiveExercise;
            vm.search = "";
            vm.activateQuiz = activateQuiz;
            
            
            function changeActiveExercise(index){
                vm.activeExercise = index;   
            }
             
            function activateQuiz(){
                quizMetrics.changeState("quiz", true);  
            }
               
        }
})();
