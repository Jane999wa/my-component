import React, { createContext, useContext, useState} from 'react';
//设计全局配置项
//创建上下文 , 传递配置信息
const context = createContext();
//定义组件 , 语言环境 : 中文 ; 主题 : light
export const config = ({children}) => {
    const [theme,setTheme] = useState('light');
    const [inter,setinter] = useState('zh-CN');
    return(
        <context.Provider value = {{theme,setTheme,inter,setinter}}>
            {children}
        </context.Provider>
    );
};
export const useConfig = () => useContext(context);