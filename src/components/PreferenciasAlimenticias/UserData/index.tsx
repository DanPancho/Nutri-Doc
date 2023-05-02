import { ButtonMUI } from '@/components/Inicio Sesion/styles'
import { Avatar } from '@mui/material'
import React from 'react'
import { AnimationBase, ContainerUserData, EmailUser, FlexContainer, NameUser } from '../styles'

const UserData = ({img} : {img: string}) => {
  return (
    <ContainerUserData>
        <AnimationBase>
          <FlexContainer>
            <Avatar
              src={img}
              style={{
                width: "15em",
                height: "20vh",
              }}
            />
          </FlexContainer>
          <NameUser>Daniel Arcos</NameUser>
          <EmailUser>danielandres-01@outllok.com</EmailUser>
          <ButtonMUI variant="contained">
            <strong>Guardar Configuración</strong>
          </ButtonMUI>
        </AnimationBase>
      </ContainerUserData>
  )
}

export default UserData