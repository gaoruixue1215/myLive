import { TabBar } from 'antd-mobile';
import React from 'react';
import AppHome from './AppHome';
import AppInspiration from './AppInspiration';
import AppStore from './AppStore';



export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }


  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494" 
          tintColor="#33A3F4" 
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Start"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./images/start02.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{//选中的图标
              width: '22px',
              height: '22px',
              background: 'url(./images/start01.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={3} 消息数目
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            
          >
           <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/linggan01.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/linggan.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="Linggan"
            // badge={'new'} //徽标
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            
          >
            <AppInspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shop01.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./images/shop02.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Shop"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           <AppStore/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './images/me01.png' }}
            selectedIcon={{ uri: './images/me02.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}