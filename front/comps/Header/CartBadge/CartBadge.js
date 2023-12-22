'use client'
import React from 'react'
import {useCartContext} from '../../../context/cart/CartState'
import * as S from './cart-badge.styled'
import Badge from '@mui/material/Badge'
import CartIcon from '@mui/icons-material/ShoppingCart'
import {Link} from '../../../navigation'
import { usePathname } from 'next/navigation'
import {useTranslations} from 'next-intl'


export const CartBadge = () => {
const t = useTranslations('Header')
const {cartItems, setFromLocale} = useCartContext()
const pathname = usePathname()

const setCartToStorage = e => {
	
	localStorage.setItem('cart', JSON.stringify(cartItems))
	}
React.useEffect(()=>{if(cartItems.length)setCartToStorage()},[cartItems])
React.useEffect(()=>{
	 const localCart = JSON.parse(localStorage.getItem('cart'))
	 if(localCart){setFromLocale(localCart)}
	                },[])

return (<S.Container>
        <Link className='styledLink' href={!cartItems.length?pathname:'/shop-cart'}>
        <S.Label>{t('badge')}</S.Label>
     <Badge color='error'
            overlap="rectangular"
            badgeContent={cartItems.length||null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}> 
        <CartIcon style={{fontSize:'40px'}}/>             
     </Badge>
        </Link>
        </S.Container>)
}
