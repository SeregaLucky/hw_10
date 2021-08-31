import { refs } from './refs';
import dataKats from '../../data/dataKats';

refs.listCats.addEventListener('click', onClicklist);

function onClicklist(e) {
  const target = e.target;

  if (target.nodeName !== 'BUTTON') return;

  if (target.dataset.action === 'remove') {
    const parentLi = target.closest('li.item');
    parentLi.remove();
    return;
  }

  showPhoto(target);
}

function showPhoto(buttonCreatSubPhoto) {
  const buttonClick = buttonCreatSubPhoto;

  const parentLi = buttonClick.closest('li');
  const parentLiMain = buttonClick.closest('.item');

  buttonClick.remove();

  const idForKitten = Number(parentLi.dataset.kittenname);
  const idLiMain = Number(parentLiMain.dataset.id);

  const clickMainItem = dataKats.find(item => item.id === idLiMain);
  const { kittens } = clickMainItem;
  const kittenItem = kittens.find(item => item.id === idForKitten);

  const pemplate = `<img height="100" src=${kittenItem.src} alt="" />`;
  parentLi.insertAdjacentHTML('beforeend', pemplate);
}
