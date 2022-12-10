import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{type: "object", name:"PhotoInfo", title:"Photo", fields:[
        {
          name: "photo",
          type: "image",
          title: "Photo"
        },        
        {
          name: "alt",
          type: "string",
          title: "Alt"
        },
      ]}]
    },
    {
      name: "repo",
      title: "Repo",
      type: "url"
    },
    {
      name: "visit",
      title: "Visit Url",
      type: "url"
    },
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string"
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "text"
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of:[
        {
          type:'string',
          name:"tag",
          title:"Tag"
        }
      ]
    }
  ],
})
