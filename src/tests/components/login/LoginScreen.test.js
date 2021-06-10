import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../components/login/LoginScreen"

describe('tests in <LoginScreen />', () => {
    const historyMock = {
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()
    }    

    const contexValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
            <LoginScreen history={historyMock} />
        </AuthContext.Provider>
    )

    test('should match to snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call dispatch and history replace', () => {
        wrapper.find('button').prop('onClick')()

        expect(historyMock.replace).toHaveBeenCalledWith('/');
        expect(contexValue.dispatch).toHaveBeenCalled();
    })

    test('should call history.replace(lastpath) ', () => {

        localStorage.setItem('lastpath', '/dc');

        wrapper.find('button').prop('onClick')();

        expect(historyMock.replace).toHaveBeenCalledWith('/dc')
    })
    
    
    
    
})

