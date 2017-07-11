<<<<<<< HEAD
myItemList.controller('itemListContoller',function($scope){
	 $scope.showEdit = {};
	$scope.myCartItems = [];
	$scope.id= $scope.myCartItems.length; 
	
	/*rest function to reset input fields*/
	$scope.reset = function(){
		$scope.itemname = "",
		$scope.itemqty ="",
		$scope.itemprice ="";
		$scope.form.$setPristine();
	},
	
	/*Adding a hardware item*/
	$scope.itemAdd = function(itemdata) {
		$scope.myCartItems.push({Id: $scope.id,
					Product: $scope.itemname,
					Qty: $scope.itemqty,
					Price: $scope.itemprice
		});
		$scope.id++;
		$scope.reset();
	},
	 /*Delete an item from the repository*/
	$scope.deleteItem = function(itemdata){
		/*are you sure you want to delete. component to add here */
		alert("You are deleting an item");
		$scope.myCartItems.splice($scope.myCartItems.indexOf(itemdata),1);
	},
	 
	  /*Edit an item from the repository*/
	   $scope.editItem = function(itemdata){
		   $scope.showEdit[itemdata.Id] = true;
		};
		
	/*After editing saving the updated item to the repository*/
	$scope.saveItem = function(itemdata){
		$scope.showEdit[itemdata.Id] = false;
	}
  });
   


  
=======
myItemList.controller('itemListContoller',function($scope){
	 $scope.showEdit = {};
	$scope.myCartItems = [];
	$scope.id= $scope.myCartItems.length; 
	
	/*rest function to reset input fields*/
	$scope.reset = function(){
		$scope.itemname = "",
		$scope.itemqty ="",
		$scope.itemprice ="";
		$scope.form.$setPristine();
	},
	
	/*Adding a hardware item*/
	$scope.itemAdd = function(itemdata) {
		$scope.myCartItems.push({Id: $scope.id,
					Product: $scope.itemname,
					Qty: $scope.itemqty,
					Price: $scope.itemprice},		
		);
		$scope.id++;
		$scope.reset();
	},
	 /*Delete an item from the repository*/
	$scope.deleteItem = function(itemdata){
		/*are you sure you want to delete. component to add here */
		alert("You are deleting an item");
		$scope.myCartItems.splice($scope.myCartItems.indexOf(itemdata),1);
	},
	 
	  /*Edit an item from the repository*/
	   $scope.editItem = function(itemdata){
		   $scope.showEdit[itemdata.Id] = true;
		};
		
	/*After editing saving the updated item to the repository*/
	$scope.saveItem = function(itemdata){
		$scope.showEdit[itemdata.Id]= false;
	}
  });
   


  
>>>>>>> ef3eb2d1c9f1ab2d5028c3ae1df3a655e4591f42
