import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import { useEffect } from 'react';
import { getProducts } from '../../utils';

const products = [
  { id: 1, name: 'Autó', price: 1500 },
  { id: 2, name: '3d nyomtató', price: 1600 },
  { id: 3, name: 'telefon', price: 1800 },
  { id: 4, name: 'monitor', price: 2300 },
]

export const Products = () => {

  const [prod, setProd] = useState(null)

  useEffect(()=> {
    getProducts(setProd)
  }, [])

  prod && console.log(prod);
  
  return (

    <div id='productsdiv'>

      {prod && prod.map(product => 
        <Card sx={{ maxWidth: 345 }} key={product.id}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.img_url}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.price}
            </Typography>
          </CardContent>
        </Card>
      )}

    </div>
  )
}


