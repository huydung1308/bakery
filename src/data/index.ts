export interface IMenu {
  name: string
  subMenu: ISubMenu[]
  href: string
}

export interface ISubMenu {
  name: string
  href: string
  items?: IItem[]
}

export interface IItem {
  name: string
  href: string
}

export const menu: IMenu[] = [
  {
    name: 'Shop',
    href: 'shop',
    subMenu: [
      { name: 'Flour', href: 'flour' },
      { name: 'Ingredients', href: 'ingredients' },
      { name: 'Mixes', href: 'mixes' }
    ]
  },
  {
    name: 'Recipes',
    href: 'recipes',
    subMenu: [
      {
        name: 'Categories',
        href: 'categories',
        items: [
          {
            name: 'Bread',
            href: 'bread'
          },
          {
            name: 'Croissant',
            href: 'croissant'
          },
          {
            name: 'Muffin',
            href: 'muffin'
          },
          {
            name: 'Bagel',
            href: 'bagel'
          },
          {
            name: 'Scone',
            href: 'scone'
          },
          {
            name: 'Danish',
            href: 'danish'
          },
          {
            name: 'Baguette',
            href: 'baguette'
          },
          {
            name: 'Brioche',
            href: 'brioche'
          },
          {
            name: 'Eclair',
            href: 'eclair'
          },
          {
            name: 'Cinnamon Roll',
            href: 'cinnamon-roll'
          }
        ]
      },
      { name: 'Collections', href: 'collections' },
      { name: 'Resources', href: 'resources' }
    ]
  },
  {
    name: 'Learn',
    href: 'learn',
    subMenu: [
      { name: 'Video', href: 'video' },
      { name: 'Podcast', href: 'podcast' }
    ]
  },
  { name: 'About Us', href: 'about-us', subMenu: [] },
  { name: 'Blog', href: 'blog', subMenu: [] }
]
