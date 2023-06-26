const portfolioKodegoChallenge = {
    name: 'portfolioKodegoChallenge',
    title: 'Portfolio_Kodego_Challenges',
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
            name: 'project_title',
            title: 'Project_Title',
            type: 'string'
        },
        {
            name: 'group_name',
            title: 'Group_Name',
            type: 'string'
        },
        {
            name: 'date_started',
            title: 'Date_Started',
            type: 'string'
        },
        {
            name: 'date_completed',
            title: 'Date_Completed',
            type: 'string'
        },
        {
            name: 'git_repository',
            title: 'Github_Repository',
            type: 'url'
        },
        {
            name: 'live_link',
            title: 'Live_Link',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }

    ]
}


export default portfolioKodegoChallenge;