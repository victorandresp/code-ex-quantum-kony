define({ 

  getNews: function(){
    let noticiaSeleccionada = 'sports';
    
    serviceName = "obtenerNoticiasGG1";
	integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
    
    operationName = "porTipo";
    data = { "tipo" : noticiaSeleccionada };
    headers = {};
    integrationObj.invokeOperation(operationName, headers, data, operationSuccess.bind(this), operationFailure.bind(this));
    function operationSuccess(res){
      alert(JSON.stringify(res));
      const { channel } = res;
      this.setNewsData(channel);
    }
    function operationFailure(err){
      alert(JSON.stringify(err));
    }
  },
  setNewsData(data){
    this.view.segmentNews.widgetDataMap = { 
    	newTitle: "title",
      	description: "description",
      	pubDate: "pubDate"
    };
     this.view.segmentNews.setData(data);
  },
  navigateToNewDetail(){
    const [ selectedRowItems ] = this.view.segmentNews;
    kony.print(selectedRowItems);
    const nav = kony.mvc.Navigation('NewDetail');
    nav.navigate(selectedRowItems);
  }
 //Type your controller code here 

 });