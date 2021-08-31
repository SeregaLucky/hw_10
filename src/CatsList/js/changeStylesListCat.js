import { refs } from './refs';
import LS from './LS';

refs.inputChangeListStyles.addEventListener('change', onChange);

const IS_GRID = 'isGrid';

function onChange(e) {
  const input = e.target;
  const isChecked = input.checked;

  refs.listCats.classList.toggle('list_flex');
  LS.save(IS_GRID, isChecked);
}

// const isGrid = LS.load(IS_GRID);
// if (isGrid) {
//   refs.listCats.classList.add('list_flex');
//   refs.inputChangeListStyles.checked = isGrid;
// }

const isChackGrid = () => {
  const isGrid = LS.load(IS_GRID);

  if (isGrid) {
    refs.listCats.classList.add('list_flex');
    refs.inputChangeListStyles.checked = isGrid;
  }
};
isChackGrid();
