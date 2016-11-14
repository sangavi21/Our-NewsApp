var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newsDetailsSchema=new Schema({
	author:String,
  title:String,
  description:String,
  url:String,
	urlToImage:String,
  publishedAt:String,
	comments :String
})
module.exports=mongoose.model('newsinfos',  newsDetailsSchema);
