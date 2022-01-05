import React, {useState} from 'react';

export const STATUS = {
  toSignIn: 1, //status為signIn 已註冊，將要登入
  toSignOut: 2, //status為signOut 已登入，將要登出
  toSignUp: 0, //status為signUp 未註冊，將要註冊
};
export const AuthContext = React.createContext({
    status: STATUS.toSignIn, setStatus:(newStatus)=>{this.status=newStatus}
  })
/*
status及setStatus在provider會被覆蓋

status為signUp 未註冊，將要註冊  
*/