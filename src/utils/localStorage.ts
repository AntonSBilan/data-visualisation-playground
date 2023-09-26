export const getSideMenuState = (): boolean | null => {
  const state = localStorage?.getItem('side_menu');

  return state === 'true' ? true : state === 'false' ? false : null;
};

export const setSideMenuState = (state: boolean) => {
  localStorage.setItem('side_menu', state?.toString());
};
