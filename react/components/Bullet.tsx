import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

import { BulletSchema } from '../typings/BulletTypes'

const Bullet = ({ image, title, link }: BulletSchema) => {
  const CSS_HANDLES = [
    'bullet__item',
    'bullet__item--title',
    'bullet__item--image',
    'bullet__item--link',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.bullet__item}`}>
      <Link to={link.url} className={`${handles['bullet__item--title']}`}>
        <img
          src={image}
          alt={title}
          className={`${handles['bullet__item--image']}`}
        />
        <p className={`${handles['bullet__item--link']}`}> {title} </p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: 'Bullet',
  type: 'object',
  properties: {
    image: {
      title: 'Bullet image',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
}

export default Bullet
