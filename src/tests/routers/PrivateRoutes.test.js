import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom"
import { PrivateRoutes } from "../../routers/PrivateRoutes"

describe('test in <PrivateRoutes />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()


    test('should show the component any is authenticated and save on localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={true}
                    component={() => <span>listo!</span>}
                    {...props}
                />
            </MemoryRouter>

        )

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel');

    })

    test('should block the component if it is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoutes
                    isAuthenticated={false}
                    component={() => <span>listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel');
    })
    

})
