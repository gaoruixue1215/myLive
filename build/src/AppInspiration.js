import React, { Component } from 'react';
import { NavBar,Icon,Tabs, WhiteSpace, Grid} from 'antd-mobile';
var data = [
    {img:'./images/chengse.png',head:'./images/head.png',xin:'./images/heart.png',msg:'橙色律动'},
    {img:'./images/ertong.png',head:'./images/head.png',xin:'./images/heart.png',msg:'儿童房'},
    {img:'./images/ertong.png',head:'./images/head.png',xin:'./images/heart.png',msg:'翻滚吧，地毯君'},
    {img:'./images/chengse.png',head:'./images/head.png',xin:'./images/heart.png',msg:'角落里的遐想'},
    {img:'./images/chengse.png',head:'./images/head.png',xin:'./images/heart.png',msg:'橙色律动'},
    {img:'./images/ertong.png',head:'./images/head.png',xin:'./images/heart.png',msg:'橙色律动'},
]

const GridExample = () => (
    <div>
      <Grid data={data} columnNum={2} square={false}
        renderItem={dataItem => (
          <div style={{padding:'5%',backgroundColor:'rgb(238, 237, 237)'}}>
            <img src={dataItem.img} style={{ width: '100%',height:'100%'}} alt="" />
            <div style={{height:'20%',backgroundColor:'white',width:'100%',marginleft:'5%'}}>
                <img src={dataItem.head} style={{ float:'left',width: '10%',height:'10%'}} alt="" />
                <span style={{fontSize:'12px'}}>{dataItem.msg}</span>
                <img src={dataItem.xin} style={{ float:'right',width: '15px',height:'15px'}} alt="" />
            </div>
          </div>
        )}
      />
    </div>
  );




export default class AppInspiration extends Component {
    renderContent = tab =>
    (<div style={{backgroundColor:'#bbc0c0'}}>
    <GridExample/>
    </div>);

    render() {
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '彪' }
            ];
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' ,color:'white'}} />
                    ]}>灵感</NavBar> 
                <div>
                    <WhiteSpace />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
                </div>
                
            </div>
        )
    }
}
