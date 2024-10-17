import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Mojo Multi Cuisine </Typography>
      <Typography component='p'>Taj Restaurant not only offers an exquisite dining experience with authentic multiple cuisine but also provides the convenience of table reservations. Guests can easily book a table in advance, ensuring a seamless and stress-free dining experience, especially during peak hours or for special occasions.The reservation service allows diners to plan ahead, making it an ideal spot for family gatherings, business lunches, or romantic dinners.</Typography>
    </Container>
  )
}

export default About