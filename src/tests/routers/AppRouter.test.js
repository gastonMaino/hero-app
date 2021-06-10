import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routers/AppRouter"

describe('test in <AppRouter />', () => {

    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should show login if it is no authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('PublicRoutes').exists()).toBe(true);
        expect(wrapper.find('PrivateRoutes').exists()).toBe(false);
    })

    test('should show marvel component if is authenticated', () => {

        const contexValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'juan'
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.main-menu').exists()).toBe(true);
    })
    
})
