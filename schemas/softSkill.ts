import {defineType} from 'sanity'

export default defineType({
  name: 'softSkill',
  title: 'Soft Skills',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
  ],
})
