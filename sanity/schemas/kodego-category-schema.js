const kodegoCategory = {
    name: 'portfolioKodegoCategory',
    title: 'Portfolio_Kodego_Categories',
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
            name: 'feature_image1',
            title: 'Feature_Image1',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: { source: 'alt' },
                }
            ]
        },
        {
            name: 'feature_image2',
            title: 'Feature_Image2',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: { source: 'alt' },
                } 
            ]
        },
        {
            name: 'feature_image3',
            title: 'Feature_Image3',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: { source: 'alt' },
                }
            ]
        },
       

    ]
}


export default kodegoCategory;