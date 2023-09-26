export const getSideMenuState = (): boolean | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const state = localStorage?.getItem('side_menu');

  return state === 'true' ? true : state === 'false' ? false : null;
};

export const setSideMenuState = (state: boolean) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage?.setItem('side_menu', state?.toString());
};
