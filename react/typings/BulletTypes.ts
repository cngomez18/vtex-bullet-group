export type BulletSchema = {
  image: string
  title: string
  link: LinkProps
}

export type LinkProps = {
  url: string
  attributeNoFollow?: boolean
  attributeTitle?: string
  openNewTab?: boolean
  newTab?: boolean
}

export type BulletsSchema = BulletSchema[]
