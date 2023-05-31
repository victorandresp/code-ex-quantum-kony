define({
  // Selection Logic
  getCategoriesList: function(){
    this.view.categoriesListBox.masterData = [
		[0, "Select a Category"],
        [1, "Cities"],
        [2, "Fruits"],
      	[3, "Colors"],
    ];
  },
  categoriesChilds: function(categorie){
    const CATEGORIES_CHILDS = {
      Cities:[
        [0, "Select a City"],
        [1, "Berlin"],
        [2, "Paris"],
        [3, "Madrid"],
      ],
      Fruits:[
        [0, "Select a Fruit"],
        [1, "Banana"],
        [2, "Grapes"],
        [3, "Cranberry"],
      ],
      Colors:[
        [0, "Select a Fruit"],
        [1, "Blue"],
        [2, "Red"],
        [3, "Green"],
      ],
    };
    return CATEGORIES_CHILDS[categorie];
  },
  changeCategoriesListBox: function(){
  	const value = this.view.categoriesListBox.selectedKeyValue;
    if(value[0] !== 0){
      this.view.optionsListBox.masterData = this.categoriesChilds(value[1]);
    }
  },
  setSelectedOptionLabel(){
    const value = this.view.optionsListBox.selectedKeyValue;
    if(value[0] !== 0){
      this.view.optionSelectedLabel.text = value[1];
    } 
  },
  // Segment Logic
	getProductsData(){
      const products = [
        { id:1000, name: 'Fanta', price: '200$' },
        { id:1001, name: 'Doritos', price: '300$' },
        { id:1002, name: 'Kit-Kat', price: '150$' },
        { id:1003, name: 'Skittles', price: '500$' },
        { id:1004, name: 'M&M', price: '100$' },
      ];
      this.view.segmentProducts.widgetDataMap = { titleSegmentProducts:'name', priceSegmentProducts: 'price' };
      this.view.segmentProducts.setData(products);
    },
  	showSelectedProduct(){
      const selected = this.view.segmentProducts.selectedRowItems[0];
      this.view.titleSelected.text = selected.name;
      this.view.priceSelected.text = selected.price;
      this.view.idSelected.text = selected.id;
    }
  
 });