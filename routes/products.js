var express = require('express');
var router = express.Router();

var products = [
  {
    id:1,
    image:'./images/4.jpg',
    title:'商品1',
    subTitle:'描述1'
  },{
    id:2,
    image:'./images/4.jpg',
    title:'商品2',
    subTitle:'描述2'
  },{
    id:3,
    image:'./images/4.jpg',
    title:'商品3',
    subTitle:'描述3'
  },{
    id:4,
    image:'./images/4.jpg',
    title:'商品4',
    subTitle:'描述4'
  },{
    id:5,
    image:'./images/4.jpg',
    title:'商品5',
    subTitle:'描述5'
  },{
    id:6,
    image:'./images/4.jpg',
    title:'商品6',
    subTitle:'描述6'
  },{
    id:7,
    image:'./images/4.jpg',
    title:'商品7',
    subTitle:'描述7'
  },{
    id:8,
    image:'./images/4.jpg',
    title:'商品8',
    subTitle:'描述8'
  },{
    id:9,
    image:'./images/4.jpg',
    title:'商品9',
    subTitle:'描述9'
  },{
    id:10,
    image:'./images/4.jpg',
    title:'商品10',
    subTitle:'描述10'
  }
];

//查询商品
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(products));
});

//新增商品
router.post('/',function(req,res,next){
  products=products.concat(req.body);
  res.send(JSON.stringify(products));
});

//更新商品列表
router.put('/:id',function(req,res,next){
  for(var i=0;i < products.length;i++){
    if(products[i].id === parseInt(req.params.id)){
      products[i] = req.body;
    }
  }

  res.send(JSON.stringify(products))
});

//删除商品
router.delete('/:id',function(req,res,next){
  for(var i=0; i<products.length; i++){
    if(products[i].id === parseInt(req.params.id)){
      products.splice(i,1)
    }
  }
  res.send('success')
});


module.exports = router;
