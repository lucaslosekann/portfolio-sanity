import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeInfo',
  title: 'Home Info',
  type: 'document',
  fields: [
    {
      name: "presentation",
      title: "Presentation",
      type: "array",
      of: [{type: "string", name:"presentationText", title:"Presentation Text"}]
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string"
    },
    {
      name: "socials",
      title: "Socials",
      type:"array",
      of:[{
        type: "url", name: "href", title: "URL"
      }]
    }
  ],
})
