import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: "abouteMe",
      title: "About Me",
      type: "text"
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image'
    }
  ],
})
