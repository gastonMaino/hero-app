import { authReducer } from "../../auth/authReduce";
import { types } from "../../types/types";

 describe('tets in authReducer', () => {

    const initialState = {
        logged: false
    }

     test('should return the default state', () => {
        const user = authReducer(initialState, {});
        expect(user).toEqual(initialState);
     })

     test('should authenticated and add user name ', () => {
         const user = authReducer(initialState, {type: types.login, payload:{name:'gaston'}})
         expect(user).toEqual({name:'gaston', logged:true});
     })
     
     test('should delete user name and change logged to flase ', () => {
         const user = authReducer({logged:true, name: 'gaston'}, {type: types.logout})
         expect(user).toEqual(initialState);
     })
     
     
     
 })
 