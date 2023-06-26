const specialProjectPage = {
    name: 'specialProject',
    title: 'Portfolio_Special_Projects',
    type: 'document',
    fields: [

        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                } 
            ]
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'block' }],
        }

    ]
}


export default specialProjectPage;