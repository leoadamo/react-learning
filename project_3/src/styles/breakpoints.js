import variables from './variables';

const sizes = variables.breakpoints;

const getMedia = (s, condition, increment = 0) => {
  const breakpointsArr = Object.keys(sizes).map((key) => [key, sizes[key]]);
  const [result] = breakpointsArr.reduce((acc, [name, size]) => {
    if (s === name) {
      return [...acc, `@media (${condition}: ${size + increment}px)`];
    }

    return acc;
  }, []);

  return result || `@media (${condition}: ${s + increment}px)`;
};

const lowerThan = (s, condition = 'max-width') => {
  return getMedia(s, condition, 0);
};

const higherThan = (s, condition = 'min-width') => {
  return getMedia(s, condition, 1);
};

const between = (
  size1,
  size2,
  condition1 = 'min-width',
  condition2 = 'max-width'
) => {
  return `@media (${condition1}:${size1} and ${condition2}:${size2})`;
};

const breakpoints = {
  lowerThan,
  higherThan,
  between,
};

export default breakpoints;
