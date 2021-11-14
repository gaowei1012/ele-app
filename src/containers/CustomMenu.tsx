import { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import { Menu } from "antd"

type subMenuType = {
  path?: any
  icon?: string
  title?: string
  subs?: any
}

const getOpenKeys = (str: string) => {
  let newStr = "",
    newArr = [],
    // @ts-ignore
    arr = str.split("/").map((i) => "/" + i);
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i];
    newArr.push(newStr);
  }
  return newArr;
}

const CustomMenu = (props: any) => {
  const [state, setstate] = useState({
    openKeys: [],
    selectedKeys: [],
  });
  let { openKeys, selectedKeys } = state;

  const renderMenuItem = (subMenu: subMenuType) => {
    const { path, icon, title } = subMenu
    return (
      <Menu.Item key={path}>
        <Link to={path}>
          <img className="menu_icon" src={icon} alt="" />
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  const onOpenChange = (openKeys: string[]): any => {
    useState((prevState: any) => {
      if (openKeys.length === 0 || openKeys.length === 1) {
        return { ...prevState, openKeys };
      }
      const latestOpenKey = openKeys[openKeys.length - 1];

      // 这里与定义的路由规则有关
      if (latestOpenKey.includes(openKeys[0])) {
        return { ...prevState, openKeys };
      } else {
        return { ...prevState, openKeys: [latestOpenKey] };
      }
    });
  };

  const renderSubMenu = (subMenu: subMenuType) => {
    const { path, icon, title, subs } = subMenu
    return (
      <Menu.SubMenu
        key={path}
        title={
          <span>
            <img className="menu_icon" src={icon} alt="" />
            <span>{title}</span>
          </span>
        }
      >
        {subs &&
          // @ts-ignore
          subs.map((item) => {
            return item.subs && item.subs.length > 0
              ? renderSubMenu(item)
              : renderMenuItem(item);
          })}
      </Menu.SubMenu>
    );
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      // @ts-ignore
      selectedKeys={props.menuToggle === true ? "" : selectedKeys}
      // @ts-ignore
      onClick={({ path }) =>
        // @ts-ignore
        setstate((prevState) => ({ ...prevState, selectedKeys: [path] }))
      }
      onOpenChange={onOpenChange}
    >
      {props.menu &&
        // @ts-ignore
        props.menu.map((item) => {
          return item.subs && item.subs.length > 0
            ? renderSubMenu(item)
            : renderMenuItem(item);
        })}
    </Menu>
  )
}

export default withRouter(CustomMenu)
