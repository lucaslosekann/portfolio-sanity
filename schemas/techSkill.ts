import {defineType} from 'sanity'

export default defineType({
  name: 'techSkill',
  title: 'Tech Skills',
  type: 'document',
  fields: [
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
  ],
})
