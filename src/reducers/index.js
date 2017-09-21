import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import FiltersReducer from './reducer_filters';
import ActiveFilterReducer from './reducer_active_filter';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  filters: FiltersReducer,
  activeFilter: ActiveFilterReducer
});

export default rootReducer;
