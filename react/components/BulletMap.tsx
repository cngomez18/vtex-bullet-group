import React from 'react'

import { BulletsSchema, BulletSchema } from '../typings/BulletTypes'
import Bullet from './Bullet'

export const BulletMap = (bullets: BulletsSchema) => {
  const emptyLink = {
    url: '',
    attributeNoFollow: false,
    attributeTitle: '',
    openNewTab: false,
    newTab: false,
  }

  return bullets.map((bullet: BulletSchema, index) => {
    return (
      <Bullet
        key={index}
        image={bullet.image}
        title={bullet.title}
        link={bullet.link ? bullet.link : emptyLink}
      />
    )
  })
}
