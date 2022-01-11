import { MenusActions ,MenusActionTypes} from './menus.actions';
import { menusInitialState, MenusState } from './menus.state';
import { LogoutCompleted } from '../../auth/store/auth.actions';

export function menusReducer(state = menusInitialState, action: MenusActions): MenusState {
  switch (action.type) {   
    case MenusActionTypes.MENU_SUCCESS: {          
      return Object.assign({}, state, {
        menudata: action.payload.menudata,       
        menuloaded:  true,
        menuloading: false,        
        error:       null       
      });
    }
    case MenusActionTypes.MENU_FAILED: {
      return Object.assign({}, state, {
        menudata:    [],
        menuloading: false,
        menuloaded:  false

      },LogoutCompleted, state = menusInitialState);
    }  
    case MenusActionTypes.MENU_ERROR: {
      return Object.assign({}, state, {
        error: action.payload.error
      });
    }
    default:
    return state;
  }
}

