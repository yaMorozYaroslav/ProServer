'use client'

import React from 'react'
import decode from 'jwt-decode'
import * as S from './auth-panel.styled'
import {useTranslations} from 'next-intl'
import {useRouter} from '../../../navigation'

import {useUserContext} from '../../../context/user/UserState'
 
export function AuthPanel(){
 const r = useRouter()
 const t = useTranslations('Header')
 const [update, setUpdate] = React.useState(0)
 const {userData, setFromStorage, signIn,
	    signUp, logout, error, clearError} =  useUserContext()
    	
    	const removeProfile = () => localStorage.removeItem('profile')
        const onLogin = () => r.push('/auth') 
    let profile
	let currentUser
	
	if (typeof window !== 'undefined'){
    profile = JSON.parse(localStorage.getItem('profile'))
	currentUser = (source) => Object.keys(source).length > 0
	
	}else{profile = undefined, currentUser = undefined}
   
   React.useEffect(()=>{
		
		const shouldUpdateStorage = currentUser(userData) && 
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateStorage){
		  localStorage.setItem('profile', JSON.stringify(userData))
		  }

		const shouldUpdateState = profile && currentUser(profile) &&
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateState){
		setFromStorage(profile)
	    }
		},[userData, profile, setFromStorage])
		
   React.useEffect(()=>{
		 if(error)alert(error)
	     if(error)clearError() 
			},[error])
   
     
   React.useEffect(()=>{
	              let token
	        	if(userData)token = userData.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		//~ console.log(decodedToken)
	        		//~ if(decodedToken.exp * 1000 < new Date().getTime()){
	        		if(decodedToken.exp * 999.998 < new Date().getTime()){
	        		 logout()
	        		 removeProfile()
	        		 alert('Token has expired')
	              }
	        	}
	        	const interval = setInterval(()=>{setUpdate(update+1);
					                              //~ console.log(update);
					                                       },10000)
	        	if(!token)clearInterval(interval)
	        	return () => clearInterval(interval)
	        },[userData, profile, logout, update])
	       // console.log(userData)
	    return <>
	    <S.Name>{userData.user?userData.user.name.slice(0,4):t('guest')}</S.Name>
	    {userData.user
			?<S.LogBut className='styledLink'
			           onClick={()=>{logout();removeProfile();}}>{t('logout')}</S.LogBut>
			:<S.LogBut onClick={()=>onLogin()}>{t('login')}</S.LogBut>}
		 </>
		}
