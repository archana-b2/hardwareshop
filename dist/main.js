var myItemList=angular.module("myItemList",[]);myItemList.controller("itemListContoller",function($scope){$scope.showEdit={},$scope.myCartItems=[],$scope.id=$scope.myCartItems.length,$scope.reset=function(){$scope.itemname="",$scope.itemqty="",$scope.itemprice="",$scope.form.$setPristine()},$scope.itemAdd=function(itemdata){$scope.myCartItems.push({Id:$scope.id,Product:$scope.itemname,Qty:$scope.itemqty,Price:$scope.itemprice}),$scope.id++,$scope.reset()},$scope.deleteItem=function(itemdata){alert("You are deleting an item"),$scope.myCartItems.splice($scope.myCartItems.indexOf(itemdata),1)},$scope.editItem=function(itemdata){$scope.showEdit[itemdata.Id]=!0},$scope.saveItem=function(itemdata){$scope.showEdit=!1,$scope.showBtnSave=!1,$scope.showBtnEdit=!0}});