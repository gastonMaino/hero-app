import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroScreen } from "../../../components/heroes/HeroScreen"

describe('tests in <HeroScreen />', () => {

    const historyMock = {
        replace: jest.fn(),
        length: 10,
        goBack: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }


    test('should match to snapshot amd show the Redirect comoponent', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HeroScreen history={historyMock} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })

    test('should show a hero if is exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroid' component={HeroScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('article').exists()).toBe(true);
        expect(wrapper.find('.container-img').exists()).toBe(true);
        expect(wrapper.find('HeroItemScreen').exists()).toBe(true);
    })

    test('should call history.push()', () => {
        const historyMock = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn(),
            location: {},
            listen: jest.fn(),
            createHref: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path='/hero/:heroid'
                    component={() => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();
    })

    test('should call history.goBack()', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path='/hero/:heroid'
                    component={() => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()

        expect(historyMock.goBack).toHaveBeenCalled();
        expect(historyMock.push).not.toHaveBeenCalled();
    })

    test('should call Redirect', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider2334']}>
                <Route
                    path='/hero/:heroid'
                    component={() => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )

        expect(wrapper.text()).toBe('');
    })


})
