import {defineType} from 'sanity'
// data: {
//   role: string,
//   company: string,
//   from: Date,
//   to: Date,
//   description: string,
//   working: boolean
// }[]

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "from",
      title: "From",
      type: "date"
    },
    {
      name: "to",
      title: "To",
      type: "date"
    },
    {
      name: "working",
      title: "Working",
      type: "boolean"
    }
  ],
})
