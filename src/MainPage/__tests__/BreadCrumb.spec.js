import getBreadCrumb from '../BreadCrumb'

describe('BreadCrumb', ()=> {

    test('Test menu', () => {

        let breadcrumb = getBreadCrumb({ pathname: '/rad'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(4)
        expect(breadcrumb[0]).toMatchObject({title: 'Rad Home', link: '/rad'})
        expect(breadcrumb[1]).toMatchObject({title: 'AIRAC amendments', link: '/rad/project'})
        expect(breadcrumb[2]).toMatchObject({title: 'Restrictions', link: '/rad/rs'})
        expect(breadcrumb[3]).toMatchObject({title: 'Aerodrome sets', link: '/rad/az'})

    })

})