import blog from './blog-schema';
import bootcampCategory from './bootcamp-category-schema'
import bootcampPage from './bootcamp-page-schema'
import freelanceCategory from './freelance-category-schema'
import freelancePage from './freelance-page-schema'
import kodegoCategory from './kodego-category-schema'
import kodegoPage from './kodego-page-schema'
import previousProjectCategory from './prevJob-category-schema'
import previousProjectPage from './prevJob-page-schema'
import portfolioKodegoActivity from './activity-schema'
import portfolioKodegoChallenge from './challenge-schema'
import portfolioKodegoProject from './project-schema'
import service from './service-schema'
import specialProjectCategory from './specialProject-category-schema'
import specialProjectPage from './specialProject-page-schema'



const schemas = [ 
    blog,
    bootcampCategory, 
    bootcampPage,
    freelanceCategory, 
    freelancePage, 
    kodegoCategory, 
    kodegoPage,
    previousProjectCategory, 
    previousProjectPage,
    portfolioKodegoActivity,
    portfolioKodegoChallenge, 
    portfolioKodegoProject,
    service,
    specialProjectCategory,
    specialProjectPage
];

export default schemas;