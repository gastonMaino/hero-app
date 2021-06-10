import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { SearchForm } from "../../../components/search/SearchForm"

describe('test in <SearchForm />', () => {


    test('should match to snapshot', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path='/search' component={SearchForm} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert__paragraph').text().trim()).toBe('Search a hero!');
    })

    test('should show batman and input value have the querySrting', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path='/search' component={SearchForm} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper.find('HeroCard').exists()).toBe(true);
    })

    test('should show message error', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman1233']}>
                <Route path='/search' component={SearchForm} />
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger__paragraph').text().trim()).toBe('There is no a hero batman1233');
    })

    test('should call history.push', () => {

        const historyMock = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route
                    path='/search'
                    component={() => <SearchForm history={historyMock} />}
                />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'batman'
            }
        });
 
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
 
        expect( historyMock.push ).toHaveBeenCalledWith(`?q=batman`);

    })



})
