import React, {Component} from 'react';
import {ConfigProvider, Button, Dropdown, Menu, Radio,} from 'antd';
import {initIntl, getString, getInitOptions} from '../utils/util';
import './indexPage.less';
import logo from '../assets/logo.png';


class IndexPage extends  Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      language: getInitOptions().currentLocale,
      product_open: false,
      partner_open: false,
      productList: ['产品中心', '产品1', '产品2'],
      selectedProductIndex: 0,
      partnerList: ['合作单位', '北京', '上海'],
      selectedPartnerIndex: 0,
      selectedLeftMenu: '',
    };
  }

  componentDidMount() {
  }

  onClickNav = (index) => {
    this.setState({current: index});
  }

  onSelectLeftMenu = (data) => {
    this.setState({selectedLeftMenu: data.key});
  }

  onSelectDropdownMenu = (index, type) => {
    switch (type) {
      case 'product':
        this.setState({selectedProductIndex: index}, () => {
          this.onClickNav(2);
        });
        break;
      case 'partner':
        this.setState({selectedPartnerIndex: index}, () => {
          this.onClickNav(4);
        })
        break;
      default:
    }
  }

  changeLanguage = (e) => {
    const language = e.target.value;
    initIntl(language, () => {
      this.setState({language});
    });
  }

  configureNavigation = () => {
    const {current, productList, selectedProductIndex, partnerList, selectedPartnerIndex} = this.state;
    return (
      <ul className="nav">
        <li>
          <Button
            className={current === 0 ? 'button-selected' : 'button'}
            onClick={this.onClickNav.bind(this, 0, 'button')}
          >{getString('introduction')}</Button>
        </li>

        <li>
          <Button
            className={current === 1 ? 'button-selected' : 'button'}
            onClick={this.onClickNav.bind(this, 1)}
          >研究人员</Button>
        </li>

        <li>
          <Dropdown overlay={
            <Menu>
              {
                productList.map((v, i) => (
                  <Menu.Item onClick={this.onSelectDropdownMenu.bind(this, i,'product')}>{v}</Menu.Item>
                ))
              }
            </Menu>
          }>
            <Button className={current === 2 ? 'button-selected' : 'button'}>{productList[selectedProductIndex]}</Button>
          </Dropdown>
        </li>

        <li>
          <Button className={current === 3 ? 'button-selected' : 'button'} onClick={this.onClickNav.bind(this, 3)}>相关</Button>
        </li>

        <li>
          <Dropdown overlay={
            <Menu>
              {
                partnerList.map((v, i) => (
                  <Menu.Item onClick={this.onSelectDropdownMenu.bind(this, i,'partner')}>{v}</Menu.Item>
                ))
              }
            </Menu>
          }>
            <Button className={current === 4 ? 'button-selected' : 'button'}>{partnerList[selectedPartnerIndex]}</Button>
          </Dropdown>
        </li>

        <li>
          <Button
            className={current === 5 ? 'button-selected' : 'button'}
            onClick={this.onClickNav.bind(this, 5)}
          >简介</Button>
        </li>
      </ul>
    );
  };

  configureLeftMenu = () => {
    return (
      <div>
        <Menu mode="inline" style={{width: '256px'}} onSelect={this.onSelectLeftMenu}>
          <Menu.SubMenu key="submenu1" title="submenu1">
            <Menu.ItemGroup key="submenu1_group1" title="submenu1_group1">
              <Menu.Item key="submenu1_group1_option1">submenu1_group1_option1</Menu.Item>
              <Menu.Item key="submenu1_group1_option2">submenu1_group1_option2</Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup key="submenu1_group2" title="submenu1_group2">
              <Menu.Item key="submenu1_group2_option1">submenu1_group2_option1</Menu.Item>
              <Menu.Item key="submenu1_group2_option2">submenu1_group2_option2</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>

          <Menu.SubMenu key="submenu2" title="submenu2">
            <Menu.ItemGroup key="submenu2_group1" title="submenu2_group1">
              <Menu.Item key="submenu2_group1_option1">submenu2_group1_option1</Menu.Item>
              <Menu.Item key="submenu2_group1_option2">submenu2_group1_option2</Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup key="submenu2_group2" title="submenu1_group2">
              <Menu.Item key="submenu2_group2_option1">submenu2_group2_option1</Menu.Item>
              <Menu.Item key="submenu2_group2_option2">submenu2_group2_option2</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </div>
    )
  }

  configureMainView = () => {
    const {selectedLeftMenu} = this.state;
    return (
      <div>
        {selectedLeftMenu}
      </div>
    )
  }

  render() {
    const {language} = this.state;
    return (
      <ConfigProvider>
        <div className="index-page">
          <Radio.Group className="language-btn" value={language} onChange={this.changeLanguage}>
            <Radio.Button key='en' value='en'>English</Radio.Button>
            <Radio.Button key='cn' value='cn'>中文</Radio.Button>
          </Radio.Group>

          <div className="index-header">
            <img className="logo" src={logo} alt=''/>
            {
              this.configureNavigation()
            }
          </div>

          <div className="index-main">
            <div className="main-left">
              {
                this.configureLeftMenu()
              }
            </div>

            <div className="main-right">
              {
                this.configureMainView()
              }
            </div>
          </div>

          <div>
          </div>
        </div>
      </ConfigProvider>
    )
  }
}

export default IndexPage;
