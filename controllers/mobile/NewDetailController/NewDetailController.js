define({ 
 onNavigate(data){
   this.view.detailTitle.text = data.title;
   this.view.detailDescription.text = data.description;
   this.view.detailPubDate.text = data.pubDate;
 }
 //Type your controller code here 

 });