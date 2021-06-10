import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"

describe('tests in <Navbar />', () => {

    const historyMock = {
        replace: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'alfonso'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('should match to snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.main-menu__user').text().trim()).toBe('alfonso');
    })

    test('should call logout and use history', () => {
        wrapper.find('button').simulate('click');

        expect(contexValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })


})
