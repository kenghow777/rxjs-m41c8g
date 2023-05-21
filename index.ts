import './style.css';

import { of, map, Observable, Subscription } from 'rxjs';

const plantEl = document.querySelector<HTMLImageElement>('[data-plant]');
const promiseButtonEl =
  document.querySelector<HTMLButtonElement>('[data-promise]');
const observableButtonEl =
  document.querySelector<HTMLButtonElement>('[data-observable]');
const unsubscribeButtonEl =
  document.querySelector<HTMLButtonElement>('[data-unsubscribe]');

let subscription: Subscription;
observableButtonEl.addEventListener('click', (event) => {