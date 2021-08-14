import React from 'react'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ url, altenativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={altenativeText} />
)

export default Logo
