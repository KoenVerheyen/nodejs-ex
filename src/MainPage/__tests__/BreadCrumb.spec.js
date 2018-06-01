import getBreadCrumb from '../BreadCrumb'

describe('BreadCrumb', ()=> {

    test('Home', () => {

        let breadcrumb = getBreadCrumb({ pathname: '/'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(1)
        expect(breadcrumb[0]).toMatchObject({title: 'Home', link: '/'})

    })

    test('Rad', () => {
        let breadcrumb = getBreadCrumb({ pathname: '/rad'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(2)
        expect(breadcrumb[0]).toMatchObject({title: 'Home', link: '/'})
        expect(breadcrumb[1]).toMatchObject({title: 'Rad', link: '/rad'})
    })

    test('Rad Query', () => {
        let breadcrumb = getBreadCrumb({ pathname: '/rad/query'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(3)
        expect(breadcrumb[0]).toMatchObject({title: 'Home', link: '/'})
        expect(breadcrumb[1]).toMatchObject({title: 'Rad', link: '/rad'})
        expect(breadcrumb[2]).toMatchObject({title: 'Query', link: '/rad/query'})
    })

    test('Rad Query end with \'/\'', () => {
        let breadcrumb = getBreadCrumb({ pathname: '/rad/query/'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(3)
        expect(breadcrumb[0]).toMatchObject({title: 'Home', link: '/'})
        expect(breadcrumb[1]).toMatchObject({title: 'Rad', link: '/rad'})
        expect(breadcrumb[2]).toMatchObject({title: 'Query', link: '/rad/query'})
    })

    test('Rad Query dummy', () => {
        let breadcrumb = getBreadCrumb({ pathname: '/rad/query/dummy'})
        expect(breadcrumb).toBeDefined()
        expect(breadcrumb.length).toEqual(4)
        expect(breadcrumb[0]).toMatchObject({title: 'Home', link: '/'})
        expect(breadcrumb[1]).toMatchObject({title: 'Rad', link: '/rad'})
        expect(breadcrumb[2]).toMatchObject({title: 'Query', link: '/rad/query'})
        expect(breadcrumb[3]).toMatchObject({title: 'dummy', link: '/rad/query/dummy'})
    })
})