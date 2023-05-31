define({ 
	addNewCar(){
      let brand = this.view.brandTextField.text;
      let model = this.view.modelTextField.text;
      const segment = this.view.segmentCars.data;
      
     let brandIndex = -1;
      let modelIndex = -1;

      if(brand.length > 0 && brand.length > 0){
        	
        for(let i = 0; i < segment.length; i++){
          let brandListed = segment[i][0].lblHeading;
          let modelArray = segment[i][1];
          if(brandListed === brand){
            brandIndex = i;
          }
          for(let j = 0; j < modelArray.length; j++){
            if(modelArray[j].nameCarLabel === model){
              modelIndex = j;
            }
          }
        }
        
        if(brandIndex === -1){
          let dataToAdd = [
            [
              {lblHeading: brand },
              [{ nameCarLabel : model }],
            ]
          ];
          
          this.view.segmentCars.addAll(dataToAdd);
          
        }else if(modelIndex === -1){
          let dataToAdd = { nameCarLabel : model }
          this.view.segmentCars.addDataAt(dataToAdd, segment[brandIndex][1].length, brandIndex);
        }
        this.view.brandTextField.text = '';
        this.view.modelTextField.text = '';
      }
    }
 //Type your controller code here 

 });