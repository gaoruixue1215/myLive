import React, { Component } from 'react';
import { NavBar, Carousel,Grid } from 'antd-mobile';
var data = [ 
  {img: './images/pinpai.png',msg:'热门品牌'},
  {img: './images/siren.png',msg:'私人搭配师'},
  {img: './images/xuangou.png',msg:'选购指南'} 
];

const GridExample = () => (
    <div>
      <Grid data={data} columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: '5%' ,background: 'rgb(243, 241, 241)'}}>
            <div style={{background: 'rgb(119, 118, 118)'}}>
              <img src={dataItem.img} style={{ width: '100%', height: '100%' ,opacity:'0.6'}} alt="" />
            </div>
            <p style={{position: 'absolute',top:'30%',left:'25%',color:'white'}}>{dataItem.msg}</p>
          </div>
        )}
      />
    </div>
  );
const Tui = () =>(
  <div style={{width:'100%',backgroundColor:'white',paddingTop:'0.2%',paddingBottom:'0.2%',marginTop:'1%'}}>
    <p style={{paddingLeft:'5%',borderLeft:'5px solid rgb(94, 243, 243)'}}>热门推荐</p>
  </div>
);

const GridExample1 = () => (
  <div>
    <div style={{background: 'rgb(119, 118, 118)'}}>
      <img src={`./images/yinglun.png`} style={{ width: '100%', height: '100%' ,opacity:'0.6'}} alt="" />
    </div>
      <p style={{position: 'absolute',top:'94%',left:'2%',color:'white',fontSize:'13px'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>    
   
  </div>
);  

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
            data: ['./images/lunbo1.png', './images/lunbo0.png'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}>住吧家居</NavBar> 
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
                <GridExample />
                <Tui/>
                <GridExample1 />
            </div>
        )
    }
}
