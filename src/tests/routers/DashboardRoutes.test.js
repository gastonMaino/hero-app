import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('test in <DashboardRoutes />', () => {

    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'juan'
        }
    }


    test('should match to snapshot', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.main-menu__user').text().trim()).toBe('juan');
    })

})
