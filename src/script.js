/**
 * Update Query String Parameter
 * @param {string} key - The query string key to update
 * @param {string} value - The value to set for the query string key
 * @returns {void}
 */
function updateQueryStringParam(key, value) {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.replaceState({}, '', url);
}

/**
 * Get Query String Param
 * @param {string} key - The query string key to retrieve
 * @returns {string|null} - The value of the query string parameter
 */
function getQueryStringParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key) || undefined;
}

/**
 * Get Query Params and set initial values
 */
function initVariablesFromQueryParams() {
  const gridsizeValue = getQueryStringParam('gridsize');
  const strokewidthValue = getQueryStringParam('strokewidth');
  const colorpickerValue = getQueryStringParam('color');
  const gridtypeValue = getQueryStringParam('gridtype');

  if(gridsizeValue) {
    gridsize.value = gridsizeValue;
    document.body.style.setProperty('--gridsize', gridsizeValue);
  }

  if(strokewidthValue) {
    strokewidth.value = strokewidthValue;
    document.body.style.setProperty('--strokewidth', strokewidthValue);
  }

  if(colorpickerValue) {
    console.log('setting colorpicker to', colorpickerValue);
    colorpicker.value = colorpickerValue;
    document.body.style.setProperty('--accent', colorpickerValue);
  }

  if(gridtypeValue) {
    gridtype.value = gridtypeValue;
    document.body.dataset.grid = gridtypeValue;
  }
}

/**
 * Initial Setup
 */
document.body.dataset.grid = 'grid';

initVariablesFromQueryParams();

/**
 * Event Listeners
 */
gridsize.addEventListener('change', (e) => {
  document.body.style.setProperty('--gridsize', e.target.value)
  updateQueryStringParam('gridsize', e.target.value);
})

strokewidth.addEventListener('change', (e) => {
  document.body.style.setProperty('--strokewidth', e.target.value)
  updateQueryStringParam('strokewidth', e.target.value);
})

colorpicker.addEventListener('change', (e) => {
  document.body.style.setProperty('--accent', e.target.value)
  updateQueryStringParam('color', e.target.value);
})

gridtype.addEventListener('change', (e) => {
  document.body.dataset.grid = e.target.value
  updateQueryStringParam('gridtype', e.target.value);
})

