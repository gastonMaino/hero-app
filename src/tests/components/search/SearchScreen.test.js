import { shallow } from "enzyme"
import { SearchScreen } from "../../../components/search/SearchScreen"

describe('test in <SearchScreen />', () => {
    
    test('should match to snapshot', () => {
        const wrapper = shallow(<SearchScreen />);

        expect(wrapper).toMatchSnapshot();
    })
})
