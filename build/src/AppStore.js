import React, { Component } from 'react';
import { NavBar , Carousel,SearchBar,  Grid } from 'antd-mobile';

var data = [
    {img:'./images/zhuozi.png',msg:'桌',color:'#fc5488'},
    {img:'./images/chuang.png',msg:'床',color:'#4dccfe'},
    {img:'./images/yizi.png',msg:'椅',color:'#fda32d'},
    {img:'./images/ji.png',msg:'几',color:'#2dd3d2'},
    {img:'./images/guizi.png',msg:'柜',color:'#fc2e2c'},
    {img:'./images/shujia.png',msg:'书架',color:'#4646f7'},
    {img:'./images/shafa.png',msg:'沙发',color:'#b021ff'},
    {img:'./images/shanzi.png',msg:'家居饰品',color:'#43df87'},
    {img:'./images/huwai.png',msg:'户外家具',color:'#8e85c1'},
    {img:'./images/fenlei.png',msg:'全部分类',color:'#77767d'},
]

var data1 = [
    {img:'./images/beizi.png',msg:'Too Art Studio 欧式风格精细...',price:'￥39.95'},
    {img:'./images/biao.png',msg:'顺顺工艺欧式风格塑料外框黑...',price:'￥83.99'}
]


export default class AppStore extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
            data: ['./images/lunbo2.png', './images/lunbo2.png','./images/lunbo2.png','./images/lunbo2.png'],
            });
        }, 100);
    }
    
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <img src={`./images/gouwuche.png`} alt='' style={{marginRight:'16px',width:'45%',height:'70%'}}/>
                ]}>商城</NavBar> 
                <div style={{position:"relative"}}>
                    <Carousel autoplay={true} infinite>
                        {this.state.data.map(val => (
                            <a key={val} style={{ display: 'block', width: '100%', height: this.state.imgHeight }}>
                            <img
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>    
                        ))}
                    </Carousel>
                    <SearchBar placeholder="输入关键词搜索" maxLength={8} style={{position: 'absolute',top:'0',left:'0',zIndex:"99",width:'100%'}}/>
                </div>
                <Grid data={data}
                    columnNum={5} hasLine={false} square={false}
                    renderItem={dataItem => (
                        <div>
                            <div style={{ width:'70%',backgroundColor:`${dataItem.color}`,borderRadius:'50%',padding:'10px',margin:'12%'}} >
                                <img src={dataItem.img} style={{ width: '80%'}} alt="" />
                            </div>
                            <div style={{ color: 'black', fontSize: '12px', marginTop: '12px' }}>
                                <span>{dataItem.msg}</span>
                            </div>
                        </div>
                    )}
                />
                <Grid data={data1}
                    columnNum={2} hasLine={false} square={false}
                    renderItem={dataItem => (
                        <div style={{backgroundColor:'rgb(250, 244, 250)',paddingTop:'15px'}}>
                            <img src={dataItem.img} style={{ width: '80%'}} alt="" />
                            <div style={{ color: 'black', fontSize: '11px', marginTop: '12px' ,backgroundColor:'rgb(250, 244, 250)'}}>
                                <span>{dataItem.msg}</span>
                                <p>{dataItem.price}</p>
                            </div>
                        </div>
                    )}
                />

               
            </div>
        )
    }
}
