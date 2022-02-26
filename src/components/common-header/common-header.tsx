import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import styled from "styled-components";

const StyledCommonHeader = styled.div`
  background-color: #fff;
  padding: 0;
  margin: 0 auto;
  width: 100%;
`;

export default function CommonHeader() {
  const [current, currentSet] = useState("mail");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement> | any) => {
    currentSet(e.key);
  };
  return (
    <StyledCommonHeader>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        data-testid="test-menu"
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item
          key="app"
          icon={<AppstoreOutlined />}
          data-testid="test-menu-item"
        >
          Navigation Two
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </StyledCommonHeader>
  );
}
