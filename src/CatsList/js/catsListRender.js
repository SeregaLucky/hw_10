import dataKats from '../../data/dataKats';
import CatItem from '../../templates/CatItem.hbs';
import AllCatsItems from '../../templates/AllCatsItems.hbs';
import { refs } from './refs.js';

// const allCats = dataKats.map(itemCat => CatItem(itemCat)).join('');
const allCats = AllCatsItems(dataKats);

refs.listCats.insertAdjacentHTML('beforeend', allCats);
