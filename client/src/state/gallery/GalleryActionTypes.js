// Action type constants, of the form
// GALLERY.ADD_FILES === 'GALLERY.ADD_FILES'

export default [
  'ADD_FILES',
  'DESELECT_FILES',
  'REMOVE_FILES',
  'SELECT_FILES',
  'SORT_FILES',
  'LOAD_FILE_REQUEST',
  'LOAD_FILE_SUCCESS',
  'CREATE_FOLDER_REQUEST',
  'CREATE_FOLDER_SUCCESS',
  'CREATE_FOLDER_FAILURE',
  'DELETE_ITEM_REQUEST',
  'DELETE_ITEM_SUCCESS',
  'DELETE_ITEM_FAILURE',
  'LOAD_FOLDER_REQUEST',
  'LOAD_FOLDER_SUCCESS',
  'HIGHLIGHT_FILES',
].reduce((obj, item) => Object.assign(obj, { [item]: `GALLERY.${item}` }), {});
